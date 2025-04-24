import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Alert from "../components/Alert"

const DefaultLayout = () => {
    return <>
        <Header />
        <main>
        <Alert />
        <Outlet />
        </main>
        <Footer />
    </>
}

export default DefaultLayout