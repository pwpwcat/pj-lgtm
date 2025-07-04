import { useState } from 'react'
import GlobalNav from './GlobalNav'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="header">
            <h1 className="logo">PJ-LGTM</h1>
            <GlobalNav isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </header>
    )
}

export default Header
