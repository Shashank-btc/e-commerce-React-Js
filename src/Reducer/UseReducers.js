import React, { useReducer, useState } from 'react'
import Button from '../props/Button'
import Inputfield from '../components/Inputfiled'

function UseReducers() {

const intailState =[{
    name : "sai",
    age : 45,
    id : 1,
    isNameChange : false,
    isAgeChange : false,
},
{
    name : "sai",
    age : 45,
    id : 2,
    isNameChange : false,
    isAgeChange : false,
}]

const [name , setName] = useState('');
const [age, setAge] = useState(0);

const [isAddPerson, setIsAddPerson] =useState(false)




    function reducer(state, action){
        switch(action.type){
            case "add" :{
               return[
                ...state,{
                    name : action.name,
                    age : action.age,
                    id :  action.id,
                    isAgeChange : false,
                    isNameChange : false,
                }
               ]
            }
            case "edit-name" :{
                return state.map(person =>
                    person.id === action.id
                      ? { ...person, isNameChange: true }
                      :  { ...person}
                  );
                }
                case 'change-value':
                    return state.map(person =>
                      person.id === action.id ? { ...person, [action.field]: action.value } : person
                    );
            case "edit-age" :{
                return state.map(person =>
                    person.id === action.id
                      ? { ...person, isAgeChange: true }
                      :  { ...person}
                  );
            }
            case 'save-age':
  return state.map(person =>
    person.id === action.id ? { ...person, isAgeChange: false, isNameChange : false } : person
  );


            default: {
                throw Error('Unknown action: ' + action.type);
              }
        }
        
    }

   const[person, dispatch] = useReducer(reducer, intailState)
   console.log("person ",person)

   function handleAgeChange(id) {
    dispatch({
        type: 'edit-age',
        id: id
      });
   }

   function handleNameChange(id) {
    dispatch({
        type: 'edit-name',
        id: id
      });
   }

   function valueChange(id, value, field){
   dispatch({
    type: 'change-value',
    id: id,
    field: field,
    value: value
  })
   }

   function saveDetails(id){
    dispatch({
        type: 'save-age',
        id: id
      });
   }

   function handleUserForm(){
    setIsAddPerson(true)
   }

   function addNewUser(){
    setIsAddPerson(false)
    dispatch({
        type : 'add',
        name : name,
        age :  age,
        id : person.length+1
    })
   }

   function handleName(e){
    setName(e.target.value)
   }

   function handleAge(e){
    setAge(e.target.value)
   }

  return (
<div>
    <div style={{ display : 'flex', justifyContent : 'center'}}>
    <h1>Add new User </h1> <Button onClick={handleUserForm}>Add new person</Button>
    </div>
    {isAddPerson ?
     <div style={{display : 'flex', justifyContent : 'center', height : '60px', backgroundColor : '#CCE6E6', alignItems : 'center'}}> 
         <Inputfield placeholder='NAME' onChange={handleName} value={name}/> <Inputfield placeholder='AGE' value={age} onChange={handleAge}/> <Button onClick={addNewUser}>save</Button> 
    </div> :<></>
          }
  {person.map(person => (
    <div key={person.id} style={{display : 'flex' ,alignItems : "center", justifyContent : 'space-evenly',  }}> 
      <div style={{display : 'flex' , alignItems : "center", justifyContent : 'space-evenly', }}>
        <h6 style={{marginLeft : '40px', marginRight : '40px' }}>
      {person.id}
      </h6>
      <h6 style={{ marginLeft : '40px', marginRight : '40px'}}>
      {person.isNameChange ? (
        <input
          value={person.name}
          onChange={(e) => valueChange(person.id, e.target.value, 'name')}
        />
      ) : (
        person.name
      )}
      </h6>
      <h6 style={{marginLeft : '40px', marginRight : '40px'}}>
      {person.isAgeChange ? (
        <input
          value={person.age}
          onChange={(e) => valueChange(person.id, e.target.value, 'age')}
        />
      ) : (
        person.age
      )}
      </h6>
      </div>
      <Button onClick={() => handleNameChange(person.id)}>Change name</Button>
      <Button onClick={() => handleAgeChange(person.id)}>Change age</Button>
      <Button onClick={() => saveDetails(person.id)}>Save</Button>
    </div>
  ))}
</div>
   
  )
}

export default UseReducers