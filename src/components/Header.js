import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="nav">
            <Link to='/'>
            <h2>When in</h2>
            <h3>Barcelona</h3>
            </Link>
        </nav>
    );
}

export default Header;