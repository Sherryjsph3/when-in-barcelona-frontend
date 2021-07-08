import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
function Home(props) {
    return  (
        <>
    <img className='img-home'src='/imgs/barcelona image.png' alt='new'/>
    <h2 className='logo'>When in</h2>
    <h3 className='sub-logo'>Barcelona</h3>
    
    <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Attractions</Link></li>
    </ul>
    <div className='sec-home'>
    <p>" Barcelona is a very old city in which you can feel the weight of the history; it is haunted by history. You cannot walk around it without perceiving it... "</p>
    <br/>
    <hr className='line'/>
    <br/>
    <p className='name'>Carlos Ruiz Zafon</p>
    </div>
    </>
    )
}


export default Home;