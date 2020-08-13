import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      users: [
        {id: 1, name: 'Fisrt', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 1"},
        {id: 2, name: 'Second', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 2"},
        {id: 3, name: 'Third', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 3"},
        {id: 4, name: 'Forth', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 4"},
        {id: 5, name: 'Fifth', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 5"},
        {id: 6, name: 'Sixth', image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png", job: "Job 6"},
      ]
    }
  }

  render() {
    const { users } = this.state;

    return(
      <div>
        {users.map(function(user){
          return (
            <UserProfile
              user={user} />
          )
        })}
      </div>
    )
  }
}

export default UserProfileList;
