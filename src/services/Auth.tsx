import {createContext, useState, useEffect} from 'react'

type PropsContext = {
    children: React.ReactNode
} 

interface ContextDados {
    user:User | null | undefined,
    signin:(username:string,password:string) => string | undefined;
    signout: () => void;
    signup: (username:string, password:string) => boolean | string;
    signed: boolean | number;
}
interface User{
    username:string,
    password:string
}

export const AuthContext = createContext<ContextDados>({} as ContextDados)

export const AuthProvider = ({children}: PropsContext) => {
    const [user, setUser] = useState <User | null>()
   
    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const userStorage = localStorage.getItem("users_db")

        if(userToken && userStorage){
            const hasUser = JSON.parse(userStorage)?.filter(
                (user:User) => user.username === JSON.parse(userToken).username)
        
            if(hasUser){
                setUser(hasUser[0])
            }
        }
    },[])

    
 const signin = (username:string, password:string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db') ?? "false")   
      
        const hasUser = usersStorage?.filter((user:User) => user.username === username);

            if(hasUser?.length){
                if(hasUser[0].username === username && hasUser[0].password === password){
                    const token = Math.random().toString(36).substring(2)

                    localStorage.setItem("user_token", JSON.stringify({username, token}))
                    setUser({username, password})
                    return "usuário logado!"
                }
                else{
                    return "email ou senha incorretos!"
                }

            }
            else{
                    return "usuário não cadastrado"
            }
}

     const signup = (username:string, password:string) => {
        const userStorage = localStorage.getItem('users_db')
        const usersStorage = userStorage !== null ? JSON.parse(userStorage) : []

            const hasUser = usersStorage?.filter((user:User) => user.username === username) 

                if(hasUser?.length){
                    return false;
                    //usuário já existe
                }

                    let newUser;

                if(usersStorage){
                    newUser = [...usersStorage, {username , password}]
                }else{
                    newUser = [{username, password}]
                }

                localStorage.setItem("users_db", JSON.stringify(newUser))
                return true;    
                //usuário cadastrado
    }

    const signout = () =>{
        setUser(null)
        localStorage.removeItem("user_token")
    }
 
    return(
        <AuthContext.Provider
            value={{user, signed: !!user, signin, signup, signout: signout}}>
            {children}
        </AuthContext.Provider>
    )
    
}