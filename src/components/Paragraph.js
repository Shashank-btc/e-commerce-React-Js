import Button from '../props/Button';

export default function Paragraph({text, onClick}){


    return(
        <p style={{ marginTop:'20px'}} >{text}<Button onClick={onClick}> SIGN UP </Button>

        </p>
    );
}