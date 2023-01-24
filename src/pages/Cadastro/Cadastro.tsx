import Button from "../../components/Button"
import InputText from "../../components/InputText"
import './style.css'
import {useState} from 'react'
import axios from 'axios'
import { api } from '../../Api/api'
import Swal from 'sweetalert2'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function Cadastro(){
    const [username, setUsername ] = useState("")
    const [password, setPassword ] = useState("")

    const { signup } = useAuth()
    const navigate = useNavigate()
    
        const createUser = () => {
            const res = signup(username, password)
             const dados = {
                    username:username,
                    password:password
                }
                
        if(password.length > 8){
            Swal.fire({
                icon:'error',
                title:'senha muito grande!',
                timer:2500
            })
        }
         if(password.length < 6){
            Swal.fire({
                icon:'error',
                title:'Senha muito curta!',
                timer:2500
            })
        }
         if(!password || !username){
            Swal.fire({
                icon:'error',
                title:'Preencha todos os campos!',
                timer:2500
            })
        }

        
        console.log(res)
       

         if(res === false){
            Swal.fire({
                icon:'error',
                title:'Usuário já existe!',
                showCloseButton: true,
                showCancelButton: true
            })
        } 

         if(res === true){
            api.post('/createUser', dados )
            navigate("/")

            Swal.fire({
                icon:'success',
                title:'Usuário cadastrado com sucesso!',
                timer:2500
            })
            .then(() => {
                console.log('usuário cadastrado')
            })
            .catch((err) => {
               console.log(err)
            })
        }
        }


    return(
       <div className="container">
        <div className="template-cadastro">
            <h1>Cadastro</h1>
                <div className="template-items">
                    <InputText onchange={(e: any) => setUsername(e.target.value)} text="Name"/>
                    <InputText onchange={(e: any) => setPassword(e.target.value)} text="Password"/>
                    <Button onclick={createUser} text="Cadastrar"/>
                    <Link to="/"><p>Já tem uma conta?&nbsp;Entre</p></Link>
                </div>
            </div>
       </div>
    )
}