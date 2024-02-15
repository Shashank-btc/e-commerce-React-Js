import React, { Children, useState } from 'react'

export default function Submitbtn({children, className,onClick}){
    

    
    return(
              <button style={{margin : '5px', border : 'none', outline :'none', borderRadius : '5px', backgroundColor: '#96E9FB'}}  onClick={onClick} id='lgnbutton' className={className} >{children}</button>
    );
}
