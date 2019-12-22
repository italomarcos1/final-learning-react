import React, { Component } from 'react';

import { UserList } from './styles';

export default class Users extends Component {
  state = {
    fake: '',
  };

  render() {
    // const { persons } = this.props;
    return (
      <h1>Mae</h1>
      // <UserList>
      //   {persons.map(person => (
      //     <li key={String(person.id.value)}>
      //       <img src={person.picture.medium} alt="Profile Pic" />
      //       <h1>
      //         {`${person.name.title}. ${person.name.first} ${person.name.last}`}
      //       </h1>
      //       <strong>
      //         {`${person.location.city}, ${person.location.state} - ${person.location.street.number}`}
      //       </strong>
      //       <span>{person.email}</span>
      //     </li>
      //   ))}
      // </UserList>
    );
  }
}
