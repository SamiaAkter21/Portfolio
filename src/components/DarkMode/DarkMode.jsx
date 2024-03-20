import React, { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    const toggle = () => {
        (theme === "light") ? setTheme("dark") : setTheme("light");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
        <i onClick={toggle} className="material-icons">&#xe3a9;</i>
        </>
    );
}
 
export default DarkMode;