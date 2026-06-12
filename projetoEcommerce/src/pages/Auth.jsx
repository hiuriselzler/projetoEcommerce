import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authContext";


export default function Auth(){
    const [mode, setMode]= useState("signup");
    const { signUp, user} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState :{ errors},
    } = useForm()

    function onSubmit(data){
        signUp(data.email,data.password);
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode=== "signup" ? "Sign Up" : "Login"}
                    </h1> 
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" >Email</label>
                            <input 
                                className="form-label" 
                                type="email" id="email" 
                                {...register("email",{required:"Email is required"})}/>
                        </div>
                        {errors.email &&(
                            <span className="form-error">{errors.email.message}</span>
                        )
                        } 
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input 
                                className="form-label"
                                type="password" 
                                id="password"
                                {...register("password",
                                    {required:"Password is required",
                                    minLength:{
                                        value:6,
                                        message:"Password must be at least 6 characters",
                                    },
                                    maxLength:{
                                        value:12,
                                        message:"Password must be at less than 12 characters",
                                    },
                                })}/>
                        </div>
                        {errors.password &&(
                            <span className="form-error">{errors.password.message}</span>
                        )
                        }
                        <button type="submit" className="btn btn-primary btn-large">
                            {mode=== "signup" ? "Sign Up" : "Login"}
                        </button>
                    </form>
                    <div className="auth-switch">

                        {mode === "signup" ? (<p>
                                Already have an account? 
                                <span className="auth-link" onClick={()=>setMode("Login")}>Login</span>
                            </p>
                        ):(
                            <p>
                                Don't have an account? <span className="auth-link" onClick={()=>setMode("signup")}>Sign Up</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}