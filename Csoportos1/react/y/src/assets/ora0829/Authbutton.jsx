import { useContext } from "react";
import AuthContext from "./AuthContext.js";

function AuthButton()
{
    const {auth,toangleAuth}=useContext(AuthContext);

    return <button onClick={toangleAuth} >{auth? "Kijelentkezés":"Bejelentkezés"}</button>
}

export default AuthButton