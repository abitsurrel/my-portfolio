import light_theme_bg from './assets/images/light_theme_bg.svg';
import dark_theme_bg from './assets/images/dark_theme_bg.svg';
import light_theme_sm_bg from './assets/images/light_theme_sm_bg.svg';
import dark_theme_sm_bg from './assets/images/dark_theme_sm_bg.svg';
import { useContext } from 'react';
import { DataContext } from './DataContext';
import useResizeWindow from './ResizeWindow';

function BackgroundImg() {

    const {isDarkTheme} = useContext(DataContext);
    const {width} = useResizeWindow();
    const  breakpoint = 768;

    if(isDarkTheme) {
        if(width > breakpoint) {
            return <img src={dark_theme_bg} className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed md:bg-top" />
        }
        else {
            return <img src={dark_theme_sm_bg} className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed md:bg-top" />
        }
    }
    else {
        if(width > breakpoint) {
            return <img src={light_theme_bg} className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed md:bg-top" />
        }
        else {
            return <img src={light_theme_sm_bg} className="w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed md:bg-top" />
        }
    }
}

export default BackgroundImg