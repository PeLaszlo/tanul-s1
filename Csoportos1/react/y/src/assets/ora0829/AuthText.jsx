import { useContext } from "react"
import AuthContext from "./AuthContext.js"

function AuthText()
{
    const {auth}=useContext(AuthContext);
    return <h2>{auth? "Bejelentkezve": "Kijelentkezve"}</h2>
}

export default AuthText