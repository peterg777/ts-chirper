import * as React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component<NavbarProps, NavbarState> {
    render() {
        return (
            <nav className="navbar navbar-dark bg-warning">
                <Link to="/">
                    <h3 className="text-dark">Welcome to Jurassic Chirps!</h3>
                </Link>
                <Link className="btn btn-outline-success" to="/">Home</Link>
                <Link className="btn btn-outline-success" to="./compose">Compose Chirp!</Link>
            </nav>

        )
    }
}

export default Navbar

interface NavbarProps {}
interface NavbarState {}