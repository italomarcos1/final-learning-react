import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { UserList } from './styles';

export default class Users extends Component {
  state = {
    persons: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { nat } = match.params;
    const { amt } = match.params;

    const response = await api.get(`/?results=${amt}&nat=${nat}&noinfo`); // passar pro users

    const [...people] = response.data.results;

    this.setState({ persons: people });
  }

  render() {
    const { persons } = this.state;
    return (
      <UserList>
        {persons.map(person => (
          <li key={String(person.id.value)}>
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

Users.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      nat: PropTypes.string,
      amt: PropTypes.string,
    }),
  }).isRequired,
};
