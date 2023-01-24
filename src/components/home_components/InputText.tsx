import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'

interface Props{
    text:string
}

interface UsersTypes{
    id: number,
    username: string,
    password: string
}

export default function InputText({ text }: Props){
    const [values, setValues] = useState()
    const handleChange = (event:any) => {
        setValues(event.target.value)
    }
 
    return(
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Nome" variant="standard" 
                onChange={handleChange}/>
            </Box>
        )
}
                       