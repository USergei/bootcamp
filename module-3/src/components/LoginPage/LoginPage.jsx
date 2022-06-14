import React from "react";
import style from './LoginPage.module.scss'
import mainStyles from '../../App.module.scss'
import SVG from 'react-inlinesvg'
import google from '../../assets/icons/googleIcon.svg'


const LoginPage = () => {
    return (
        <div className={`${mainStyles.mainWrapper} ${style.LoginPageWrapper}`}>
            <div className={style.loginMenu}>
            <h1 className={style.title}>Sign in</h1>
            <form className={style.form} action="">
               <input type="email" placeholder="Email"/>
               <input type="password" placeholder="Password"/>
               <div className={style.loginPageBtns}>
                    <button>Sign in</button>
                    <span>or
                        <a href="#">
                            <SVG src={google} alt="google" />
                        </a>
                    </span>
                </div>
            </form>
            <div className={style.loginPageLinks}>
                <a href="#">Don’t have an account? Sign up</a>
                <a href="#">Forget Password?</a>
            </div>
        </div>
        </div>
    )

}

export default LoginPage