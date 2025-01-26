function RoleBasedMessage({role})
{
    let text;
    switch (role) {
        case "admin":{ text="Admin!";  break;}
        case "user":{ text="User!";  break;}    
        default: {text="Guest!"; break;}
    }
    return <p>Welcome  {text} !</p>
}
export default RoleBasedMessage