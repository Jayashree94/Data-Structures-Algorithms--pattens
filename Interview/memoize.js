import { useState, useMemo } from "react"

const memoize =() =>{

    const[num, setNum] = useState(0);
    const [theme, setTheme] = useState(false);

    const prime = useMemo(() => {findPrime(num), [num]}) 
    // const prime = findPrime(num);
    return(
        <div className={"m-4 p-2" + (theme && "bg-gray=900")}>
        <input type="number" value ={num} onChange={(e) => setText(e.target.value)}>
            
        </input>
        <div>
            <button onClick={() => {setTheme(!theme)}}></button>
        </div>

        <div>
            <h1>nth prime : {prime} </h1>
        </div>
        </div>
    )


}

export default memoize;