import React from 'react'

import { THEME } from '../../consts/themes';

function SwitchTheme (props) {
    const {theme, onToggleTheme} = props;

    return (
        <div>
            <input 
                type="checkbox"
                onChange={onToggleTheme}
                checked={theme === THEME.MOON}
            />
            
            <span>{theme} mode</span>
        </div>
    )
}

export default SwitchTheme