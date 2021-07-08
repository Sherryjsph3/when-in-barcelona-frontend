import { Link } from 'react-router-dom';
import  {useState} from 'react';

function Index(props) {
    //state to hold the form data
    const [ newForm, setNewForm ] = useState({
        name: '',
        image: '',
        blurb: '',
        location: '',
        link: '',
    })

    //handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    //handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!props.user) {
            alert('You must be logged in')
            return;
        }

        props.createAttractions(newForm);
        setNewForm({
        name: '',
        image: '',
        blurb: '',
        location: '',
        link: '',
        })
    }

    //loaded function
    const loaded = () => {
        return props.attractions.map((attraction) => (
            <div key={attraction._id} className='attraction'>
                <Link to={`/attraction/${attraction._id}`}>
                    {attraction.image && <img className='indeximg' src={attraction.image} alt={attraction.name}/>}
                </Link>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading...</h1>;
      };
    
      //onSubmit will occur when the form is submitted w/ the button click
      //onChange will fire when there's a change to any of the forms input elements
      return (
          <>
        <Link to='/home'>
        <h2 className='logotwo'>When in</h2>
        <h3 className='sub-logotwo'>Barcelona</h3>
        </Link>
        <div className='idx'>
        <p className='idxp'>" The journey changes you, It should change you. You take something with you. Hopefully you leave something good behind... "</p>
        <br/>
        <hr className='linetwo'/>
        <br/>
        <p className='nametwo'>Anthony Bourdion</p>
        </div>
        <img className='idximg' src='https://i.imgur.com/3ialWpI.jpg' alt='aesthetic'/>

          <section className='form'>
              <form onSubmit={handleSubmit}>
                  <input
                  className='idxinput'
                  type='text'
                  value={newForm.name}
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  />
                  <input
                  className='idxinput'
                  type='text'
                  value={newForm.image}
                  name='image'
                  placeholder='image URL'
                  onChange={handleChange}
                  />
                  <input
                  className='idxinput'
                  type='text'
                  value={newForm.blurb}
                  name='blurb'
                  placeholder='blurb'
                  onChange={handleChange}
                  />
                  <input
                  className='idxinput'
                  type='text'
                  value={newForm.location}
                  name='location'
                  placeholder='location'
                  onChange={handleChange}
                  />
                  <input
                  className='idxinput'
                  type='text'
                  value={newForm.link}
                  name='link'
                  placeholder='link'
                  onChange={handleChange}
                  />
                  <button
                  type='submit'
                  disabled={!props.user}
                  >Explore</button>
                  </form> 
          {props.attractions ? loaded() : loading()}  
          </section>
          </>
      );
      
    }

export default Index;
    
