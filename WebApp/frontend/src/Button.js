import './styles.css';
import axios from 'axios'
import Anno from "./Anno"

const Button = ({annostate,setState}) => {

    const onClick = () => {
          axios.get('http://localhost:3005/api/showanno').then((response) => {
              //console.log(response.data);
              //console.log(response.status);
              //console.log(annostate);
              //annostate = response.data[0];
              setState(response.data);
              console.log(annostate);
          });
    }

    return (
        <button onClick={onClick} 
        style={{backgroundColor:"green"}}
        className='btn'>
        Show all Annotations
        </button>
    )
}


export default Button