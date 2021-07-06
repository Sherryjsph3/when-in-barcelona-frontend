import { Link } from 'react-router-dom'

function Index(props) {
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
    
      return props.attractions ? loaded() : loading();
    }

export default Index;
    
