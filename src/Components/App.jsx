import React, { useState } from 'react';
import Navigationbar from './NavBar';
import Main from './Main';
import Users from './Users';
import { trackPromise } from 'react-promise-tracker'
import LoadingIndicator from './Loader';

function App() {

    const [users, setUsers] = useState([]);
    const [isLoading, loaded] = useState(true);

    function getData() {

        trackPromise(
            fetch('https://random-data-api.com//api/appliance/random_appliance?size=5')
            .then(async function(userDetails) {
                const users = await userDetails.json();
                setUsers(users);
            })
        )

        setTimeout(function() {
            loaded(false);
        }, 750);
    }

    return ( <
        >
        <
        Navigationbar getUsers = { getData }
        /> {
            users.length > 0 ?
                (isLoading ?
                    <
                    LoadingIndicator / > : < Users users = { users }
                    />
                ) : < Main / >
        } <
        />
    );
}

export default App;