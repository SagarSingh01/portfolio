import { createContext, useEffect, useState, type ReactNode } from "react";

// THEME CHANGER CONTEXT

type themeContextType = {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = createContext<themeContextType | null>(null)

type ThemeChangerProps = {
    children: ReactNode;
}

export const ThemeChanger = ({ children }: ThemeChangerProps) => {

    const [mode, setMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("Theme");
        return savedTheme ? JSON.parse(savedTheme) : false;
    })

    useEffect(() => {
        localStorage.setItem("Theme" , JSON.stringify(mode))
    } , [mode])


    return (
        <themeContext.Provider value={{ mode, setMode }}>
            {children}
        </themeContext.Provider>
    )
}