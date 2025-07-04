import { Link } from 'react-router-dom'
type Props = {
    isOpen: boolean
    toggle: () => void
}

const GlobalNav = ({ isOpen, toggle }: Props) => {
    return (
        <div className="nav-wrapper">
            <button
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggle}
            >
                <span />
                <span />
            </button>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={toggle}>
                        <Link to="/" className="home-link">
                            Home
                        </Link>
                    </li>
                    <li onClick={toggle}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default GlobalNav
