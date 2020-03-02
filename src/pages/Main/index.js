import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSubject } from 'react-icons/md';

import Header from '../../components/Header';

import FlagIcon from '../FlagIcon';

import {
  Container,
  Title,
  CountryList,
  Country,
  Form,
  SubmitButton,
  Wrapper,
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

      if (countries || amnt) {
        setNations(JSON.parse(countries));
        setAmounts(JSON.parse(amnt));
      }

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

  function handleSubmit(e) {
    e.preventDefault();

    setNations([...nations, nation]);
    setAmounts([...amounts, amount]);

    setNation('');
    setAmount('');

    setNotLoaded(false);
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Search people around the Globe</Title>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nation}
            placeholder="Type in your country"
            onChange={e => setNation(e.target.value)}
          />
          <input
            type="text"
            value={amount}
            placeholder="Type in the amount of people"
            onChange={e => setAmount(e.target.value)}
          />
          <SubmitButton>Show me the results!</SubmitButton>
        </Form>
      </Container>

      <CountryList>
        {nations !== null &&
          nations.map(nat => (
            <Country key={nat} disabled={notLoaded}>
              <div>
                <FlagIcon code={nat} size="3x" />

                <footer>{nat}</footer>
                <small>{`${
                  amounts[nations.indexOf(nat)]
                } people found!`}</small>
              </div>
              <Link to={`/users/${nat}/${amounts[nations.indexOf(nat)]}`}>
                <MdSubject size={32} color="#000" />
              </Link>
            </Country>
          ))}
      </CountryList>
    </Wrapper>
  );
}
