import {login, logout} from '../services/firebase'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="nav"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link to='/home'>
            <h2>When in</h2>
            <h3>Barcelona</h3>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                { 
                props.user ?
                <>
                <div style={{marginRight: 10}}>Welcome, {props.user.displayName}</div>
                <img src={props.user.photoURL} alt={props.user.displayName} style={{
                    height:30,
                    width: 30,
                    borderRadius: '50%',
                    marginRight: 10
                }}/>
            <div
            onClick={logout}
            style={{
                cursor: 'pointer',
                marginRight: 10
            }}>
            Logout
            </div>
            </>
            :
            <div 
            onClick={login}
            style={{
                cursor: 'pointer',
                marginRight: 10
                }}>
            Login
            </div>
                }
            </div>
        </nav>
    );
}

export default Header;