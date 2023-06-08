
import patterndesktop from '../images/pattern-divider-desktop.svg';
import patternmobile from '../images/pattern-divider-mobile.svg';

const Advice = ({ adviceApi }) => {

    return (
        <>
            {
                adviceApi.map((item) => (
                    <div key={item.id}>
                        <p className="title-text">ADVICE #{item.id}</p>
                        <p className='advice-text'>"{item.advice}"</p>
                        <img className='pattern-desktop' src={patterndesktop} alt='patterndesktop' />
                        <img className='pattern-mobile' src={patternmobile} alt='patternmobile' />
                    </div>
                ))

            }
        </>
    );
}

export default Advice;