import React, {useState, useContext, useEffect} from "react"
import {NavLink, useNavigate} from "react-router-dom"
import style from "./LoginPage.module.scss"
import mainStyles from "../../../App.module.scss"
import SVG from "react-inlinesvg"
import google from "../../../assets/icons/googleIcon.svg"
import {AccountContext} from "../../AccountContext"

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {authenticate} = useContext(AccountContext)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async event => {
        event.preventDefault()
        try {
            await authenticate(email, password)
            navigate('/')
        } 
        catch(err) {
            setErrorMessage('Incorrect username or password.')
        }    
    }

    return (
            <div className={`${mainStyles.mainWrapper} ${style.pageWrapper}`}>
                <div className={style.menu}>
                    <h1 className={style.title}>Sign in</h1>
                    <form
                        className={style.form}
                        onSubmit={onSubmit}
                    >
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
                    {errorMessage && <p>{errorMessage}</p>}
                    <div>
                        <button >Sign in</button>
                        <span>or
                            <a href="google.com">
                                <SVG src={google} alt="google" />
                            </a>
                        </span>
                    </div>
                    </form>
                    <div className={style.pageLinks}>
                        <NavLink  to='/registration'>Don’t have an account? Sign up</NavLink>
                        <NavLink  to='/forgot_password'>Forgot Password?</NavLink>
                    </div>
                </div>
            </div>
    )

}

export default LoginPage
