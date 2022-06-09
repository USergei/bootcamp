import React from "react";
import style from './LoginPage.module.scss'
import SVG from 'react-inlinesvg'
import google from '../../assets/icons/googleIcon.svg'


const LoginPage = () => {
    return (
        <div className={style.loginPage}>
            <h1 className={style.title}>Sign in</h1>
            <form className={style.form} action="">
               <input type="text" placeholder="Email"/>
               <input type="password" placeholder="Password"/>
               <button>Sign in</button>
            </form>
            <div className={style.socialLoginPage}>
                <span>Sign in with</span>
                <a href="#">
                    <SVG src={google} alt="google" />
                </a>
            </div>
            <div className={style.loginPageLinks}>
                <a href="#">Forget Password?</a>
                <a href="#">Don’t have an account? Sign up</a>
            </div>
        </div>
    )

}

export default LoginPage