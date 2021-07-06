import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import About from '../pages/About';
import Home from '../pages/Home'

function Main(props) {
    //state to hold list of attractions
    //attractions is the variable and setAttractions holds the variable
    const [ attractions, setAttractions ] = useState(null);

    //function to make api call
    const URL = 'http://localhost:4000/attraction/'
    
    const getAttractions = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setAttractions(data);
    };

    //function to create a new attraction
    const createAttractions = async (attraction) => {
        //make post request to create attractions
        await fetch (URL, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(attraction)
        })
        //update list of attractions
        getAttractions();
    }

    //function to update an attraction
    const updateAttractions = async (attraction, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(attraction),
        })
        getAttractions();
    }

    //useEffect to make initial call for attractions list
    useEffect(() => getAttractions(), []);

return (
    <main>
        <Switch>
            <Route path='/home'
            render={(rp) => {
            if(!props.user) {
                // alert('You must be logged in');
                return <Redirect to='/home'/>
              } else {
            return (
                <Home 
                {...rp}
                />
                );
            }
            }} 
            />
        <Route path='/about'>
            <About/>
        </Route>
        <Route exact path='/'>
            <Index user={props.user} attractions={attractions} createAttractions={createAttractions}/>
        </Route>
        <Route 
        path='/attraction/:id'
        render={(rp) => {
            if(!props.user) {
                //show a modal or some alert
                alert('you must be logged in for that');
                return <Redirect to='/'/>
              } else {
            return (
            <Show
            attractions={attractions}
            updateAttractions={updateAttractions}
            {...rp}
            />
            )
        }
        }}    
         />
        </Switch>
    </main>
    );
}

export default Main;