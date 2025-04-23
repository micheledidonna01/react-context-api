import { useEffect } from "react"

let ChiSiamo = () => {
    useEffect(() => {
        console.log('mount component Chi Siamo')

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Chi Siamo');
        }
    }, [])

    return (
        <div>Sono Chi Siamo</div>
    )
}

export default ChiSiamo