import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

    //useEffect to make initial call for attractions list
    useEffect(() => getAttractions(), []);

return (
    <main>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/attraction'>
            <Index attractions={attractions} createAttractions={createAttractions}/>
        </Route>
        <Route 
        path='/attraction/:id'
        render={(rp) => (
            <Show
            {...rp}
            />
        )}
        />
        </Switch>
    </main>
    );
}

export default Main;