import { Route,Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/Login";
import NotesPage from "../pages/NotesPage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/notes" element={<PrivateRoute><NotesPage/></PrivateRoute>}/>
        </Routes>
    )
}