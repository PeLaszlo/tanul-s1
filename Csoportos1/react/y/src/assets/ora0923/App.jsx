
import UserProvider from "./UserProvider";
import GetDataName from "./GetData.jsx";
import Thema from "./thema.jsx";
import LanguageBrovider from "./LanguageProvider.jsx";
import Header from "./Header.jsx";
import LoginProvider from "./Loginprovider.jsx"
import NewName from "./NewName.jsx";

export default function App()
{
    return( 
    <UserProvider>
         <LanguageBrovider >
         <LoginProvider>
            <Header/>
            <GetDataName/>
             <NewName/>
            <Thema/>
        </LoginProvider>
        </LanguageBrovider>
    </UserProvider>);
}