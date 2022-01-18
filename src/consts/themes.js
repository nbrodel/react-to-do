import React from "react";

export const themes = {
    LIGHT: 'Light',
    DARK: 'Dark'
}

export const ThemeContext = React.createContext(themes.DARK);