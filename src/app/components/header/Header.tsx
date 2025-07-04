import './Header.module.sass';

const Header = () => {
    return (
        <header>
            <div>LGTM</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;