import Welcome from './welcome.jsx'
import Card from './Card.jsx'
import ListItem from './ListItem.jsx'
import Profile from './profile.jsx'
function App()
{return(
<>
<Welcome text=" Laci"/>
<Welcome text=" Ádám"/>
<Welcome text=" Imi"/>
<Card title="Cím" discription="ez a leírás"></Card>
<Card title="Cím 2" discription="ez a leírás 2"></Card>
<Card title="Cím 3" discription="ez a leírás 3"></Card>
<ul>
<ListItem item="1. elem" />
<ListItem item="2. elem" />
</ul>
<Profile>
user {{url:"https://ui-avatars.com/api/?name=Boris Vian&background=random",
name:"tesztnév"}}
</Profile>
<Profile
url="https://ui-avatars.com/api/?name=kocsis péter&background=random"
name="új ember">
</Profile>

</>
)
}
export default App