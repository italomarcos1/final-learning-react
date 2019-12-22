import React, { Component, Link } from 'react';

import { Container, Title, Result, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    nat: [],
    amt: [],
    inputNat: '',
    inputAmt: '',
    disabled: true,
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { nat, amt, inputNat, inputAmt, disabled } = this.state;

    this.setState({
      nat: [...nat, inputNat],
      amt: [...amt, inputAmt],
      disabled: false,
    });
  };

  handleNat = e => {
    this.setState({ inputNat: e.target.value });
  };

  handleAmt = e => {
    this.setState({ inputAmt: e.target.value });
  };

  render() {
    const { nat, amt, inputNat, inputAmt, disabled } = this.state;

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
        <Link to="/users">Detalhes</Link>

        <Result disabled={disabled}>
          {nat.map(nation => (
            <li key={nation}>
              <strong>{nat}</strong>
              <small>{amt[nat.indexOf(nation)]}</small>
              <Link to={`/repository/${encodeURIComponent(nat)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </Result>
      </>
    );
  }
}
