import  {useState} from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
    //state to hold the form data
    const [ newForm, setNewForm ] = useState({
        name: '',
        image: '',
        blurb: '',
        location: '',
        link: ''
    })

    //handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    //handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
        setNewForm({
        name: '',
        image: '',
        blurb: '',
        location: '',
        link: ''
        })
    }

    //loaded function
    const loaded = () => {
        return props.attractions.map((attraction) => (
            <div key={attraction._id} className='attraction'>
                <Link to={`/attraction/${attraction.id}`}>
                    <img src={attraction.image} alt={attraction.name}/>
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
          <section>
              <form onSubmit={handleSubmit}>
                  <input
                  type='text'
                  value={newForm.name}
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={newForm.image}
                  name='image'
                  placeholder='image URL'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={newForm.blurb}
                  name='blurb'
                  placeholder='blurb'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={newForm.location}
                  name='location'
                  placeholder='location'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={newForm.link}
                  name='link'
                  placeholder='link'
                  onChange={handleChange}
                  />
                  <input
                  type='submit'
                  value='Create an Attraction'
                  />
                  </form> 
          {props.attractions ? loaded() : loading()}  
          </section>
      );
      
    }

export default Index;
    
