import React, { FC, ChangeEvent } from 'react'

import './SwitchTheme.css'

import {THEME} from '../../consts/themes';

interface Props {
    theme: string,
    toggleTheme(e: ChangeEvent<HTMLInputElement>): void
}

const SwitchTheme: FC<Props> = ({theme, toggleTheme}) => {
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