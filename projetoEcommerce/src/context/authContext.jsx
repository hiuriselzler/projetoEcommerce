import { createContext, useState } from "react";

export const AuthContext = createContext(null)


export default function AuthProvider({ children }) {
    const [user,setUser]= useState(null);

    function signUp(email,password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find(u => u.email=== email)) {
            return { sucess: false, error: "Email already exists" };  
        }
        const newUser = {email,password};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));


        setUser({ email })
        return {sucess: true};
    }

    
    function login(){
        
    }
    return (
  <AuthContext.Provider value={{ signUp, user }}>
    {children}
  </AuthContext.Provider>
);
    
}