import { Route, Routes } from "react-router-dom";
import {Home} from "../Components/Home/Home";
import SignIn from "../Components/Home/Navbar/SignIn";
import SignUp from "../Components/Home/Navbar/SIGNUP";
export function AllRoutes(){

    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        </Routes>
        

        </>
    )
}