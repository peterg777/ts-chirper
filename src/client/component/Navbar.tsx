import * as React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component<INavbarProps, INavbarState> {
    render() {
        return (
            <nav className="navbar navbar-dark bg-warning">
                <Link to="/">
                    <h3 className="text-bold">TS Chirper</h3>
                </Link>
                <Link className="btn btn-outline-light" to="/chirp/add">Add Chirp!</Link>
            </nav>

        )
    }
}

export default Navbar

interface INavbarProps { }
interface INavbarState { }