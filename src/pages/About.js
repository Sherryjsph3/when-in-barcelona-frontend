import { Link } from 'react-router-dom'

function About(props) {
    return (
        <>
        <Link to='/home'>
        <h2 className='logotwo'>When in</h2>
        <h3 className='sub-logotwo'>Barcelona</h3>
        </Link>

        <h2 className='about-h2'>Barcelona</h2>

        <div className='about-details'>
            <img className='img-about' src='/imgs/aboutpage.jpg' alt='aboutphoto'/>
            
            <p className='about-p'>In this page we will give you an overview of the main places to visit in Barcelona. Barcelona is an unforgettable and culturally rich city. You come here for a thousand reasons: its football club, its magnificent beaches, its Mediterranean atmosphere and especially its nightlife and gastronomy. But the visitor knows that he will discover much more. Barcelona is much more than a seaside destination, it is the city of modernists, of the extraordinary architect Antoni Gaudí, of great artists like Picasso, Miró, Tàpies, designers and musicians. Barcelona is not turned to the past, it is a city in motion, always dynamic, creative and fun. For example, it continues to attract young people and startups who understand that you can study, work and live pleasantly in this magical melting pot. It is all these atmospheres that you will discover during your stay that we wish you pleasant. The attractions we present here are the most emblematic of the city but they are also the most visited. </p>
        </div>
        </>
    )
}

export default About;