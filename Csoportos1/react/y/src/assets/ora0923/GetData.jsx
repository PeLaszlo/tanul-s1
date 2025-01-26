import { useContext } from "react";
import {UserData} from "./UserData.jsx"

export default function GetDataName()
{   
    const {user}= useContext(UserData);
    return <p>A felhasználó neve: {user.name}</p>
}