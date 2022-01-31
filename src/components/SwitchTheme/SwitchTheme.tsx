import React, { FC } from 'react'

import './SwitchTheme.css'

import { ThemeContext } from '../../contexts/ThemeContext';

import {THEME} from '../../consts/themes';

import {TSwitchThemeProps} from '../../models/ComponentProps';

const SwitchTheme: FC<TSwitchThemeProps> = ({theme, toggleTheme}) => {
    return <ThemeContext.Consumer>{ value =>
        <div className='theme-switcher'>
            <span className={`${value} background-switch`}>
                <input
                    className={`${value} theme-toggler`}
                    type="checkbox"
                    onChange={(e) => toggleTheme(e)}
                    checked={theme === THEME.MOON}
                />
                
                <span className='theme-text'>{theme} mode</span>
            </span>
        </div>
        }
        </ThemeContext.Consumer>
}

export default SwitchTheme