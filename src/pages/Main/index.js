import React from 'react';
import api from '../../services/api';

import { Container, Title, Form, SubmitButton } from './styles';

export default class Main extends React.Component {
  state = {
    nat: '',
    amt: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { nat, amt } = this.state;

    const response = await api.get(`/?results=${amt}&nat=${nat}&noinfo`);

    const [...people] = response.data.results;
  };

  handleNat = e => {
    this.setState({ nat: e.target.value });
  };

  handleAmt = e => {
    this.setState({ amt: e.target.value });
  };

  render() {
    const { nat, amt } = this.state;

    return (
      <>
        <Container>
          <Title>Type in your country abbr.</Title>

          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={nat}
              placeholder="Type in your country"
              onChange={this.handleNat}
            />
            <input
              type="text"
              value={amt}
              placeholder="Type in the amount of people"
              onChange={this.handleAmt}
            />
            <SubmitButton>Find Related!</SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}
