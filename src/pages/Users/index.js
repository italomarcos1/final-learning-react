import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { UserList } from './styles';

export default function Users({ match }) {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function loadCountries() {
      const { nation } = match.params;
      const { amounts } = match.params;

      const response = await api.get(
        `/?results=${amounts}&nat=${nation}&noinfo`
      ); // passar pro users

      const [...people] = response.data.results;

      setPersons(people);
    }

    loadCountries();
  }, []);

  return (
    <UserList>
      {persons !== null &&
        persons.map(person => (
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

Users.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      nation: PropTypes.string,
      amounts: PropTypes.string,
    }),
  }).isRequired,
};
