import { useEffect } from "react"
import { useSelector } from "react-redux"
import LoginPage from '../pages/Login';


export default function PrivateRoute({children}){

    const {auth} = useSelector((state)=>state.userReducer)
    if(auth){
        return children
    }
    return <LoginPage></LoginPage>
}