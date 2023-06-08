import icondice from '../images/icon-dice.svg';

const Button = ({handleClick}) => {
 
   

    return (
        <div className='dice'>
        <button className='dicebutton' onClick={handleClick}>
            <img src={icondice} alt='icon'/>
        </button>
        </div>
    );
}

export default Button;