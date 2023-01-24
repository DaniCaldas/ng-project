import './style.css'
import { useState , useEffect } from 'react'
import {api} from '../../Api/api'
import {useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Transitions from '../../services/Transitions/Transitions'

interface UsersTypes{
    id: number,
    username: string,
    password: string
}

export default function Home(){
    const [users, setUsers] = useState<UsersTypes | null>(null)

    const navigate = useNavigate()
    const { signout } = useAuth()

    useEffect(()=>{
        api.get('/users')
            .then((response) => {
                setUsers(response.data)
                console.log(users)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const Exit = () => {
        signout()
        navigate("/")
    } 

    return(
        <div className="template-home">
            <nav className='navbar'>
                <h1>Olá</h1>
                <span>R$ 100</span> 
                <span onClick={Exit}>Sair</span>
            </nav>
            
            <div className='services'>
                
                <div className='transitions'>
                    <div className='template-transition'>
                        <Transitions/>
                    </div>
                </div>

            </div>
        </div>
    )
}