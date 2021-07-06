import { Link, } from "react-router-dom"

function Home(props) {
    return  (
    <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Attractions</Link></li>
    </ul>
    )}

export default Home;