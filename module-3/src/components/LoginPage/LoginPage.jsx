import React, {useState, useContext} from "react";
import style from './LoginPage.module.scss'
import mainStyles from '../../App.module.scss'
import SVG from 'react-inlinesvg'
import google from '../../assets/icons/googleIcon.svg'
// import {useNavigate} from 'react-router-dom'
import {AccountContext} from "../AccountContext";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const navigate = useNavigate()
    const {authenticate} = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault()

        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data)
                // navigate('/')
            })
            .catch(err => {
                console.error("Failed to login!", err)
            })
    }

    return (
            <div className={`${mainStyles.mainWrapper} ${style.LoginPageWrapper}`}>
                <div className={style.loginMenu}>
                <h1 className={style.title}>Sign in</h1>
                <form
                    className={style.form}
                    action=""
                    onSubmit={onSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                <div className={style.loginPageBtns}>
                        <button type="submit">Sign in</button>
                        <span>or
                            <a href="google.com">
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
