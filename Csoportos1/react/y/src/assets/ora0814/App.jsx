import Greating from "./Greating.jsx"
import ListItem from "./ListItem.jsx"
import ItemListWithMassege from "./ItemListWithMassege.jsx"
import  RoleBasedMessage from "./roleBasedMassege.jsx"
import ShopingList from "./shopingList.jsx"
import Navigation from "./navigation.jsx"
import CategorizedList from "./categotyList.jsx"
import ContentBlock from "./contendBlock.jsx"
import MessageList from "./mesageList.jsx"

function App()
{
    const items=[{id:1,item:"piros"},{id:2,item:"sárga"},{id:3,item:"zöld"}];
    const items2=[];
    const list =[{name:"kenyér", bought:true },{name:"kifli", bought:false},{name:"vaj",bought:true}];
    const messages=[{text:"első üzenet",type:"info"},{text:"Kritikus hiba",type:"error"},{type:"warming",text:"ez egy fgyelmeztetés"}];
    return (<>
        <Greating isMorning={true} />
        <Greating isMorning={false} />
        <ListItem items={items}/>
        <ItemListWithMassege items={items} />
        <ItemListWithMassege items={items2} />
        < RoleBasedMessage role={"admin"} />
        < RoleBasedMessage role={"user"} />
        < RoleBasedMessage role={"hzui"} />
        < ShopingList list={[]}></ShopingList>
        < ShopingList list={list} />
        <Navigation role={"admin"} />
        <Navigation role={"user"} />
        <Navigation role={"guest"} />
        <CategorizedList categories={{gyümölcs:["alma","körte","szilva"],zöldség:["répa","retek","mogyoró"],üres:[]}}/>
        <ContentBlock type={"text"} contend="ez a szöveg"/>
        <ContentBlock type={"image"} contend={"https://thispersondoesnotexist.com"} />
        <ContentBlock type={"link"} contend={{url:"http://index.hu",name:"index"}} />
        <MessageList messages={messages}/>
    </>
    )
}

export default App