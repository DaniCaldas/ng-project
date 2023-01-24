import { useState, useEffect} from 'react'

interface User{
    username:string,
    password:string
}
   export default function Context(){
        const [user, setUser] = useState <User>()

        useEffect(() => {
            const userToken = localStorage.getItem("user_token")
            const userStorage = localStorage.getItem("users_db")

            if(userToken && userStorage){
                const hasUser = JSON.parse(userStorage)?.filter(
                    (user:any) => user.username  ===JSON.parse(userToken).username)
            
                if(hasUser){
                    setUser(hasUser[0])
                }
            }
        },[])
   
    

 const signin = (username:string, password:string) => {
    const userStorage:any = localStorage.getItem("users_db")
    const hasUser = JSON.parse(userStorage)?.filter((user:any) => user.username == username)

    if(hasUser?.length){
        if(hasUser[0].username === username && hasUser[0].password === password){
            const token = Math.random().toString(36).substring(2)

            localStorage.setItem("user_token", JSON.stringify({username, token}))
            setUser({username, password})
            return;
        }else{
            return "email ou senha incorretos!"
        }
    }else{
            return "usuário não cadastrado"
    }

}

     const signup = (username:string, password:string) => {
        const userStorage:any = localStorage.getItem("users_db")

        const hasUser = JSON.parse(userStorage)?.filter((user:any) => user.username === username)

        if(hasUser?.length){
            return "Usuário já existe"
        }

        let newUser;

        if(userStorage){
            newUser = [...userStorage, {username , password}]
        }else{
            newUser = [{username, password}]
        }

        localStorage.setItem("user_db", JSON.stringify(newUser))

        return;
    }

    const signout = () =>{
        localStorage.removeItem("user_token")
    }

   }