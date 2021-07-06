import {useState} from 'react';
import {Link} from 'react-router-dom'

function Show(props) {
    const id = props.match.params.id
    const attractions = props.attractions
    const attraction = attractions.find(site => site._id === id) 

    //state for edit form
    const [editForm, setEditForm] = useState(attraction);

    //handleChange function for form
    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    // handlesubmit function for form
  const handleSubmit = event => {
    event.preventDefault();
    props.updateAttractions(editForm, attraction._id);
    // redirect  back to index
    props.history.push('/attraction');
  }

    return (
        <div className='attraction'>
            <h2>{attraction.name}</h2>
            <img src={attraction.image} alt={attraction.name}/>
            <p>{attraction.blurb}</p>
            <p>{attraction.location}</p>
            <Link to={attraction.link}>Direct Site</Link>
            <form onSubmit={handleSubmit}>
                  <input
                  type='text'
                  value={editForm.name}
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={editForm.image}
                  name='image'
                  placeholder='image URL'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={editForm.blurb}
                  name='blurb'
                  placeholder='blurb'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={editForm.location}
                  name='location'
                  placeholder='location'
                  onChange={handleChange}
                  />
                  <input
                  type='text'
                  value={editForm.link}
                  name='link'
                  placeholder='link'
                  onChange={handleChange}
                  />
                 <input
                  type='submit'
                  value='Edit Attraction'/>
                  </form> 
        </div>
    )
}

export default Show