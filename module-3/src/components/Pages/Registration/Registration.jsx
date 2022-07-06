import React, {useState} from "react"
import UserPool from "../../UserPool"
import style from "./Registration.module.scss"
import mainStyles from "../../../App.module.scss"
import SVG from "react-inlinesvg"
import google from "../../../assets/icons/googleIcon.svg"

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setUsername] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

  
    const onSubmit = (event) => {
        event.preventDefault()

        let attributeList = []

        attributeList.push({
            "Name": "name",
            "Value": name
        }, 
        {
            "Name": "family_name",
            "Value": "Surname"
        }, 
        {
            "Name": "custom:jobtitle",
            "Value": "jobTitle"
        })

        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.log('registrationErr', err.message)
                setErrorMessage(err.message)
            }
            console.log('registrationData', data)
        })
    }

    return (
        <div className={`${mainStyles.mainWrapper} ${style.RegistrationWrapper}`}>
            <div className={style.loginMenu}>
                <h1 className={style.title}>Registration</h1>
                <form
                    className={style.form}
                    onSubmit={onSubmit}
                >
                    <input
                        type="name"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setUsername(event.target.value)}
                    />
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
                    <div className={style.RegistrationBtns}>
                        <button type="submit">Register</button>
                        <span>or
                            <a href="#">
                                <SVG src={google} alt="google" />
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
