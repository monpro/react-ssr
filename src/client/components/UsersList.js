import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "../actions";

const UsersList = (props) => {
  const {users} = props;
  useEffect(() => {
    props.fetchUsers()
  });
  console.log(users);
  const renderUsers = (users) => {
    return users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  };

  return(
    <div>
      List of users:
      <ul>
        {renderUsers(users)}
      </ul>
    </div>
  )
};

export default connect(state => {
  return {
    users: state.users
  }
}, {fetchUsers})(UsersList);
