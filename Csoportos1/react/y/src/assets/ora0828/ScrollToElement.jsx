import {useRef} from "react"
function ScrollToElement()
{
    const scroll=useRef(null)
    const handleSroll=()=>{
        scroll.current.scrollIntoView();
    }
    return (<>
        <div ref={scroll}>
            cél div elem
    </div >
    <div style={{height:"1000px"}}>helyfoglaló</div>
    <button onClick={handleSroll}>Görgetés</button>
    </>)
}
export default ScrollToElement