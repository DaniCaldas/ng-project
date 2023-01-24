import { Fragment } from 'react'
import useAuth from '../hooks/useAuth'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Home from "../pages/Home/Home"


    type PropsContext = {
        Item: any
    }

    const Private = ({Item}: PropsContext) => {
        const {signed} = useAuth()

        return signed > 0 ? <Item/> : <Login />
    }

const RoutesApp = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/home" element={<Private Item={Home}/>} />
                    <Route path="*" element={<Login/>} />
                    <Route path="/" element={<Login/>} />
                </Routes>
            </Fragment>
        </Router>
    )
}
export default RoutesApp