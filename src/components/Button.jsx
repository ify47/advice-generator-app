import icondice from '../images/icon-dice.svg';

const Button = ({handleSubmit}) => {
 
   

    return (
        <div className='dice'>
        <button className='dicebutton' onClick={handleSubmit}>
            <img src={icondice} alt='icon'/>
        </button>
        </div>
    );
}

export default Button;