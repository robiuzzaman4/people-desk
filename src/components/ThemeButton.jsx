import { MoonStar, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        const html = document.querySelector('html');
        if (darkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <button onClick={toggleDarkMode}
            className="w-8 h-8 grid place-items-center">
            {
                darkMode
                    ? <Sun strokeWidth={1.5} size={16} className="text-yellow-400"/>
                    : <MoonStar strokeWidth={1.5} size={16} className="text-slate-500"/>
            }
        </button>
    );
};

export default ThemeButton;