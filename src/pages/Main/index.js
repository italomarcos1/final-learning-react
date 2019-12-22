import React, { Link } from 'react';
import { MdSubject } from 'react-icons/md';
import FlagIcon from '../FlagIcon';
import api from '../../services/api';

import {
  Container,
  Title,
  CountryList,
  Country,
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

    // const response = await api.get(`/?results=${amt}&nat=${nat}&noinfo`); // passar pro users

    // const [...people] = response.data.results;

    // this.setState({ persons: people });
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
            <Country disabled={notLoaded}>
              <FlagIcon code={nation} size="3x" />
              <footer>{nation}</footer>
              <p>{`${amt[nat.indexOf(nation)]} people found!`}</p>
              <Link to="/users">Detalhes</Link>
            </Country>
          ))}
        </CountryList>
      </>
    );
  }
}
