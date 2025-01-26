import { useState } from "react";
function Forms()
{
    const [nameText,setNameText]= useState("");
    const [emailText,setEmailText]= useState("");
    const [passwordText,setPaswordText]= useState("");
    const [bigTextValue,setBigTextValue]= useState("");
    const [genderValue,setGenderValue]= useState("other");
    const [countryValue,setCountryValue]= useState("hun");
    const [box,setBox]=useState({news:false,test:false,prepaid:false})

    const changeHandle=(event)=> {
        if(event.target.name=="name") setNameText(event.target.value);
        else if(event.target.name=="email") setEmailText(event.target.value);
        else if(event.target.name=="password") setPaswordText(event.target.value);
        else if (event.target.name=="bigText") setBigTextValue(event.target.value);
        setSeeResult(false);
    }
    const [seeResult,setSeeResult]=useState(false)
    const sendHandle=(event)=>{
        event.preventDefault();
        setSeeResult(true);

    }
    const radioChange=(event)=>{
        setGenderValue(event.target.value);
    }
    const selectHandle=(event)=>{setCountryValue(event.target.value)}
    const boxhandle=(event)=>{
       console.log(event.target.checked);
       const result=event.target.name;
        setBox({...box, [event.target.name]:!box[result]})
       
    }
    
    return (<>
    <form>
        <label htmlFor="name">Kérem adja meg a nevet: </label>
<input type="text" name="name" id="name" value={nameText} onChange={changeHandle}/>
<br />
<label htmlFor="email">Kérem adja me az E-mail címét: </label>
<input type="text" name="email" id="email" value={emailText} onChange={changeHandle}/>
<br />
<label htmlFor="password">Jelszó: </label>
<input type="password" name="password" id="password" value={passwordText} onChange={changeHandle}/>
<br />
<label htmlFor="bigText">Vélemény: </label>
<textarea name="bigText" id="bigtext" placeholder="ide írhatsz" value={bigTextValue}onChange={changeHandle}></textarea>
<br />
<strong>neme:</strong>
<label htmlFor="male">
    <input type="radio" name="gender" id="male" value="male" checked={genderValue=="male"} onChange={radioChange}/>
    Férfi
</label>
<label htmlFor="female">
    <input type="radio" name="gender" id="female" value="female" checked={genderValue=="female"} onChange={radioChange}/>
    Nő
</label>
<label htmlFor="other">
    <input type="radio" name="gender" id="other" value="other" checked={genderValue=="other"} onChange={radioChange}/>
    Nem adom meg
</label>
<br />
<label htmlFor="country">Ország: </label>
<select name="country" id="country" onChange={selectHandle} value={countryValue}>
    <option value="hun">Magyarország</option>
    <option value="eng">Anglia</option>
    <option value="ger">Németország</option>
    <option value="usa">USA</option>
</select> <br />
<label htmlFor="news">
    <input type="checkbox" id="news" name="news" checked={box.news} onChange={boxhandle}/>
    Hírlevél
</label><br />
<label htmlFor="prepaid">
    <input type="checkbox" id="prepaid" name="prepaid" checked={box.prepaid} onChange={boxhandle}/>
    Előfizetés
</label><br />
<label htmlFor="test">
    <input type="checkbox" id="test" name="test" checked={box.test} onChange={boxhandle}/>
    Tesztelve
</label><br />
<input type="submit" value="Send" name="send" onClick={sendHandle}/>

    </form>
    {seeResult ?<div>
        név: {nameText} <br />
        E-mail: {emailText} <br />
        jelszó: {passwordText} <br />
        neme: {genderValue} <br />
        Ország: {countryValue} <br />
        Vélemény: {bigTextValue} <br /> <br />
        hírlevél : {box.news ? "igen ":"nem "} <br />
        Előfizetés: {box.prepaid ? "igen ":"nem "}  <br />
        teszt: {box.test ? "igen ":"nem "} <br />


    </div> : null}
        </>)
}

export default Forms