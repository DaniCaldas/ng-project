import './style.css'
import InputText from '../../components/InputText'
import InputPassword from '../../components/InputPassword'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'
import {api} from '../../Api/api'

    interface Users {
        id: number,
        username: string, 
        password: string
    }

const Login = () => {

    const { signin } = useAuth()
    const navigate = useNavigate()


    const [users, setUsers] = useState<Users>()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        api.get('/users')
            .then((response) => {
                setUsers(response.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
 
    
    const handleLogin = () => {

        if (!username || !password) {
            Swal.fire({
                icon: "error",
                title: "Preencha os campos vazios!",
                showCloseButton: true,
                showCancelButton: true
            })
        }
       const res = signin(username, password) 
      console.log(res)
        if(res){
            navigate("/home")
        }
        
    }

    return (

        <div className='container'>
            <div className='template-login'>
                <h1>Login</h1>
                <InputText onchange={(e: any) => setUsername(e.target.value)} text='Name' />
                <InputPassword onchange={(e: any) => setPassword(e.target.value)} text='Password' />
                <div>
                    <Button onclick={handleLogin} text='Login' />
                    <Link to="/cadastro"><p>não possui conta?&nbsp;cadastre-se</p> </Link>
                </div>
            </div>
        </div>
    )
}
export default Login