import React, { Component } from 'react'

import { themes } from '../../consts/themes';

class SwitchTheme extends Component {
    render() {
        const {theme, onToggleTheme} = this.props;

        return (
            <div>
                <input 
                    type="checkbox"
                    onChange={onToggleTheme}
                    checked={theme === themes.MOON}
                />
                <span>{theme} mode</span>
            </div>
        )
    }
}

export default SwitchTheme