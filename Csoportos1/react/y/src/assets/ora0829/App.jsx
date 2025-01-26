import AuthProvider from "./AuthProvider.jsx"
import AuthText from "./AuthText.jsx"
import AuthButton from "./Authbutton.jsx"
function App()
{
    return(<>
        <AuthProvider>
            <AuthText/>
            <AuthButton/>
        </AuthProvider>
    </>)
}

export default App