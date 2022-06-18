import React, {useState} from "react";
import UserPool from "../UserPool"
import style from './Registration.module.scss'
import mainStyles from '../../App.module.scss'
import SVG from 'react-inlinesvg'
import google from '../../assets/icons/googleIcon.svg'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setUsername] = useState('')
    const [lastname, setFamilyname] = useState('')
    const [jobTitle, setJobTitle] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        let attributeList = []

        attributeList.push({
            "Name": "name",
            "Value": firstname
        }, 
        {
            "Name": "family_name",
            "Value": lastname
        }, 
        {
            "Name": "custom:jobtitle",
            "Value": jobTitle
        })

        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(data)
        })
    }

    return (
        <div className={`${mainStyles.mainWrapper} ${style.RegistrationWrapper}`}>
            <div className={style.loginMenu}>
            <h1 className={style.title}>Registration</h1>
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
               <input
                    type="name"
                    placeholder="Name"
                    value={firstname}
                    onChange={(event) => setUsername(event.target.value)}
                />
               <input
                    type="familyname"
                    placeholder="Familyname"
                    value={lastname}
                    onChange={(event) => setFamilyname(event.target.value)}
                />
               <input
                    type="jobtitle"
                    placeholder="Job title"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                />
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
