import React, { Component } from 'react';
import api from '../../services/api';

import { UserList } from './styles';

export default class Users extends Component {
  state = {
    persons: [],
  };

  // async componentDidMount() {
  //   const response = await api.get(`/?results=${amt}&nat=${nat}&noinfo`);

  //   const [...people] = response.data.results;

  //   this.setState({ persons: people });
  // }

  render() {
    const { persons } = this.state;
    return (
      <UserList>
        {persons.map(person => (
          <li>
            <img src={person.picture.medium} alt="Profile Pic" />
            <h1>
              {`${person.name.title}. ${person.name.first} ${person.name.last}`}
            </h1>
            <strong>
              {`${person.location.city}, ${person.location.state} - ${person.location.street.number}`}
            </strong>
            <span>{person.email}</span>
          </li>
        ))}
      </UserList>
    );
  }
}
