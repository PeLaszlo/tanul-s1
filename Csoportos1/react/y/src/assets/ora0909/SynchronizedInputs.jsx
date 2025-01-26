

import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function SynchronizedInputs() {
  const [inputs, setInputs] = useSearchParams();
  const [text1, setText1] = useState(inputs.get("text1")||"");
  const [text2, setText2] = useState(inputs.get("text2")||"");
  const clickHandler = (event) => {
    if(event.target.name=="param1") {setText1(event.target.value); inputs.set("text1",event.target.value);}
    if(event.target.name=="param2") {setText2(event.target.value); inputs.set("text2",event.target.value);}
    setInputs(inputs);
  }

  return (
    <div className="container">
      <input
        type="text"
        value={text1}
        placeholder="első input"
        name="param1"
        onChange={clickHandler}
      />
      <input
        type="text"
        value={text2}
        placeholder="második input"
        name="param2"
        onChange={clickHandler}
      />
    </div>
  )
}
