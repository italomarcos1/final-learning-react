import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSubject } from 'react-icons/md';
import FlagIcon from '../FlagIcon';

import {
  Container,
  Title,
  CountryList,
  Country,
  Data,
  Form,
  SubmitButton,
} from './styles';

export default function Main() {
  const [nations, setNations] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const [nation, setNation] = useState('');
  const [amount, setAmount] = useState('');

  const [notLoaded, setNotLoaded] = useState(false);

  useEffect(() => {
    async function loadCountries() {
      const countries = localStorage.getItem('countries');
      const amnt = localStorage.getItem('amount');

      if (countries) setNations(JSON.parse(countries));

      // se tem country tem amount e vice-versa, testar depois
      if (amnt) setAmounts(JSON.parse(amnt));

      if (countries && countries.length !== 0) {
        setNotLoaded(false);
      }
    }

    loadCountries();
  }, []);

  useEffect(() => {
    async function loadNations() {
      localStorage.setItem('countries', JSON.stringify(nations));
      localStorage.setItem('amount', JSON.stringify(amounts));
    }

    loadNations();
  }, [nations]);

  /** console.log(this.connectedUsers.user);
    console.log(this.connectedUsers['user']);
this.connectedUsers[user_id] = socket.id;
 */
  function handleSubmit() {
    // testar se ta safe tirar o preventDefault

    setNations([...nations, nation]);
    setAmounts([...amounts, amount]);

    setNation('');
    setAmount('');

    setNotLoaded(false);
  }

  return (
    <>
      <Container>
        <Title>Type in your country abbr.</Title>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nation}
            placeholder="Type in your country"
            onChange={() => setNation(nation)}
          />
          <input
            type="text"
            value={amount}
            placeholder="Type in the amount of people"
            onChange={() => setAmount(amount)}
          />
          <SubmitButton>Find Related!</SubmitButton>
        </Form>
      </Container>
      <CountryList>
        {nations !== null &&
          nations.map(nat => (
            <Country key={nat} disabled={notLoaded}>
              <FlagIcon code={nat} size="3x" />
              <Data>
                <footer>{nat}</footer>
                <small>{`${amt[nat.indexOf(nation)]} people found!`}</small>
                <small>0 people found!</small>
              </Data>
              <Link to="/users/gb/5">
                <MdSubject size={32} color="#000" />
              </Link>
            </Country>
          ))}
      </CountryList>
    </>
  );
}
