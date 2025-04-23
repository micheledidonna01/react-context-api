import { useEffect } from "react"

let Homepage = () =>{

    useEffect(()=>{
        //quando viene montato il componente
        console.log('mount component Homepage');

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Homepage');      
        }
        
    }, [])

    return (
        <div>Sono HomePage</div>
    )
}

export default Homepage