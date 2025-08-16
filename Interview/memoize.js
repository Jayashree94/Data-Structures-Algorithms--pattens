import { useState } from "react"

const memoize =() =>{

    const[Text, setText] = useState("");


    return(
        <input type="text" value ={Text} onChange={(e) => setText(e.target.value)}>
            
        </input>
    )


}