import {Link, NavLink } from "react-router-dom"

let MainNav = () => <nav className="d-flex flex-wrap gap-4 align-items-stretch">
    <NavLink to="/" className="link align-content-center">Home</NavLink>
    <NavLink to="/chi-siamo" className="link align-content-center">Chi Siamo</NavLink>
    <NavLink to="/posts" className="link align-content-center">Posts</NavLink>
</nav>

export default MainNav