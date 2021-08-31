import React from 'react';
import UserCard from './UserCard';

function Users(props) {

    function displayUsers(user) {
        return <UserCard 
            key={user.id}
            fName={user.first_name}
            lName={user.last_name}
            email={user.email}
            avatar={user.avatar}
        />;
    }

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {props.users.map(displayUsers)}
        </div>
    );
}

export default Users;