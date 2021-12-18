import React from 'react';
import UserCard from './UserCard';

function Users(props) {

    function displayUsers(user) {
        return <UserCard 
            key={user.id}
            fName={user.brand}
            ID={user.id}
        />;
    }

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {props.users.sort((a,b)=>(a.id > b.id) ? 1 : (b.id> a.id) ? -1 : 0).map(displayUsers)}
        </div>
    );
}

export default Users;