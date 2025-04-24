import { useContext } from "react"
import ContextAlert from "../context/ContextAlert"

 const Alert = () => {
    const {alert} = useContext(ContextAlert);
   
    return <>
         { alert.type && <div className={alert.type === 'success' ? 'alert alert-success' : 'alert alert-danger'}>{alert.type}: {alert.message}</div> }
    </>
 }

 export default Alert;