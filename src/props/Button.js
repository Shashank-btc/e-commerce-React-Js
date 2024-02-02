export default function Button({children, onClick}){
    
        return (
            <button style={{ margin : '10px',padding : '10px', paddingLeft : '30px', paddingRight : '30px', backgroundColor : '#23A6F0', borderRadius : '5px', border : '0px'}}
             onClick={onClick}>{children}</button>
        );
    
}