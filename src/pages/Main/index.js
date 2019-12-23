import React from 'react';
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

export default class Main extends React.Component {
  state = {
    nat: [],
    amt: [],
    inputNat: '',
    inputAmt: '',
    notLoaded: true,
  };

  componentDidMount() {
    const { nat } = this.state;

    const countries = localStorage.getItem('countries');
    const amount = localStorage.getItem('amount');

    if (countries || amount)
      this.setState({ nat: JSON.parse(countries), amt: JSON.parse(amount) });

    console.log(nat.length);

    if (countries && countries.length !== 0) {
      this.setState({ notLoaded: false });
    }
  }

  componentDidUpdate(_, prevState) {
    const { nat } = this.state;
    const { amt } = this.state;

    if (prevState.nat !== nat) {
      localStorage.setItem('countries', JSON.stringify(nat));
      localStorage.setItem('amount', JSON.stringify(amt));
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { nat, amt, inputNat, inputAmt, notLoaded } = this.state;

    this.setState({
      nat: [...nat, inputNat],
      amt: [...amt, inputAmt],
      inputNat: '',
      inputAmt: '',
      notLoaded: false,
    });
  };

  handleNat = e => {
    this.setState({ inputNat: e.target.value });
  };

  handleAmt = e => {
    this.setState({ inputAmt: e.target.value });
  };

  render() {
    const { nat, amt, inputNat, inputAmt, notLoaded } = this.state;

    return (
      <>
        <Container>
          <Title>Type in your country abbr.</Title>

          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={inputNat}
              placeholder="Type in your country"
              onChange={this.handleNat}
            />
            <input
              type="text"
              value={inputAmt}
              placeholder="Type in the amount of people"
              onChange={this.handleAmt}
            />
            <SubmitButton>Find Related!</SubmitButton>
          </Form>
        </Container>
        <CountryList>
          {nat.map(nation => (
            <Country key={nation} disabled={notLoaded}>
              <FlagIcon code={nation} size="3x" />
              <Data>
                <footer>{nation}</footer>
                <small>{`${amt[nat.indexOf(nation)]} people found!`}</small>
              </Data>
              <Link to={`/users/${nation}/${amt[nat.indexOf(nation)]}`}>
                <MdSubject size={32} color="#000" />
              </Link>
            </Country>
          ))}
        </CountryList>
      </>
    );
  }
}
