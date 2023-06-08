
import patterndesktop from '../images/pattern-divider-desktop.svg';
import patternmobile from '../images/pattern-divider-mobile.svg';

const Advice = ({ adviceApi }) => {

    return (
        <>
            <p className="title-text">ADVICE #{adviceApi.id}</p>
            <p className='advice-text'>"{adviceApi.advice}"</p>
            <img className='pattern-desktop' src={patterndesktop} alt='patterndesktop' />
            <img className='pattern-mobile' src={patternmobile} alt='patternmobile' />
        </>
    );
}

export default Advice;