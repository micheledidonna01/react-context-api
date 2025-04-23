import MainNav from "./MainNav"

const Header = () => {
    return <header className="bg-dark d-flex justify-content-around align-items-stretch">
        <h1 className="text-secondary align-content-center">Titolo Del sito</h1>
        <MainNav />
    </header>
}

export default Header