const validarSenha = (senha:string) =>{
    return senha?.toString().length <= 8 
}

export{
    validarSenha
}