import React, { FC, ChangeEvent } from 'react'

import './SwitchTheme.css'

import {THEME} from '../../consts/themes';

import { SwitchThemeProps } from '../../models/ComponentProps';

const SwitchTheme: FC<SwitchThemeProps> = ({theme, toggleTheme}) => {
    return (
        <div>
            <input 
                type="checkbox"
                onChange={(e) => toggleTheme(e)}
                checked={theme === THEME.MOON}
            />
            
            <span>{theme} mode</span>
        </div>
    )
}

export default SwitchTheme