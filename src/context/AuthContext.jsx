import React, { useContext, useState,useEffect } from "react"
const AuthContext=React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const[isLoggedIn,setIsLoggedIn]=useState(()=>{
        return localStorage.getItem('dark')==='true'
    })
    const[dark,setDark]=useState(false)
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(dark ? 'theme-dark' : 'theme-light');
      }, [dark]);

      const toggleTheme = () => {
        setDark((prevTheme) => {
          const newTheme = !prevTheme;
          localStorage.setItem('dark', newTheme);
          return newTheme;
        });
      };

    const value={
        user,
        isLoggedIn,
        setDark,
        dark,
        toggleTheme,
    }
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}