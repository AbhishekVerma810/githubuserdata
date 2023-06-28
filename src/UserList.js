import React, { useState, useEffect } from 'react';
 import './UserList.css';
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>GitHub Users</h1>
      <ul className="userlist">
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
