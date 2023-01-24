import {BsEye, BsEyeSlash} from 'react-icons/bs'
import { useState } from 'react'
import './InputPassword.css'
interface Props{
    text: string,
    onchange: any
}

export default function InputPassword({text, onchange}: Props){
    const [show, setShow] = useState(false)

    const mostPassword = () => {
        setShow(prevState => !prevState)
    }

    return(
        <div className='inputgroup'>
           
            <input required className='input' onChange={onchange} type={show ? "text" : "password"}/>
             
            <label className='userlabel'>
                {text}
            </label>
            <button onClick={mostPassword} className='Button'>{show ?  <BsEyeSlash/> : <BsEye/>}</button>
        </div>
    )
}