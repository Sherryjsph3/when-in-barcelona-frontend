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
    props.history.push('/');
  }

  const handleDelete = () => {
    props.deleteAttractions(attraction._id);
    props.history.push("/");
}
    return (
        <>
        <Link to='/home'>
        <h2 className='logotwo'>When in</h2>
        <h3 className='sub-logotwo'>Barcelona</h3>
        </Link>
        <div className='attractionTwo'>
            <h2 className='show-h2'>{attraction.name}</h2>
            <img className='img-show' src={attraction.image} alt={attraction.name}/>
            <br/>
            <div className='show-p'>
            <p>{attraction.blurb}</p>
            <br/>
            <p>{attraction.location}</p>
            <br/>
            <Link className='direct-link' to= {{ pathname: attraction.link}} target='_blank'>Direct Site</Link>
            <br/>
            <br/>
            <hr/>
            <br/>
        </div>
        <section>
            <form onSubmit={handleSubmit}>
                  <input className='formTwo'
                  type='text'
                  value={editForm.name}
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  />
                  <input className='formTwo'
                  type='text'
                  value={editForm.image}
                  name='image'
                  placeholder='image URL'
                  onChange={handleChange}
                  />
                  <input className='formTwo'
                  type='text'
                  value={editForm.blurb}
                  name='blurb'
                  placeholder='blurb'
                  onChange={handleChange}
                  />
                  <input className='formTwo'
                  type='text'
                  value={editForm.location}
                  name='location'
                  placeholder='location'
                  onChange={handleChange}
                  />
                  <input className='formTwo'
                  type='text'
                  value={editForm.link}
                  name='link'
                  placeholder='link'
                  onChange={handleChange}
                  />
                 <input className='formTwo'
                  type='submit'
                  value='Edit'/>
                <input className='formTwo' 
                  type='submit' 
                  value='Delete' 
                  onClick={handleDelete}/>
                  </form> 
                  </section>
        </div>
        </>
    )
}

export default Show