import light_theme_logo from './assets/images/light_theme_logo.webp';
import dark_theme_logo from './assets/images/dark_theme_logo.webp';
import { useContext } from 'react';
import { DataContext } from './DataContext';

function Logo() {
    const {isDarkTheme} = useContext(DataContext);

    if(isDarkTheme) {
        return <img src={dark_theme_logo} alt="My Portfolio" />
    }
    else {
        return <img src={light_theme_logo} alt="My Portfolio" />
    }
}

export default Logo