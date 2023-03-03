import { Link } from 'react-router-dom'

function Home(props) {
    return  (
        <>
    <ul>
        <Link to='/about'><li>About</li></Link>
        <Link to='/'><li>Attractions</li></Link>
    </ul>
    {/* <img className='img-home'src='/imgs/barcelona image.png' alt='new'/> */}
    <div className='img-home'>
        <div className="home-logo">
            <h2 className='logo'>When in</h2>
            <h3 className='sub-logo'>Barcelona</h3>
        </div>
        <div className='sec-home'>
            <p>" Barcelona is a very old city in which you can feel the weight of the history; it is haunted by history. You cannot walk around it without perceiving it... "</p>
            <br/>
            <hr className='line'/>
            <br/>
            <p className='name'>Carlos Ruiz Zafon</p>
        </div>
    </div>
    
    
    

    </>
    )
}


export default Home;