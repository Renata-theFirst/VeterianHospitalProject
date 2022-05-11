import { useState } from 'react';
import logotype from './appHeaderPics&Logo/Logo.png';

const Logo = () => {
    const [state, setState] = useState('');
    const mouseEnter = () => {
        setState('shadow');
    }
    const mouseLeave = () => {
        setState('');
    }

    return (
        <div className={state === '' ? 'logo' : 'logo withShadow'}>
            <img src={logotype} alt="logotype" id="logo" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>
        </div>
    )
}

export default Logo;