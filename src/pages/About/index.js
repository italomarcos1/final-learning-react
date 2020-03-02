import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../../assets/profile.jpeg';

import Header from '../../components/Header';

import { Container, Content } from './styles';

export default function About() {
  return (
    <Container>
      <Header />

      <Content>
        <img src={profile} alt="Italo Marcos" />
        <h1>Italo Marcos</h1>
        <div>
          <FaGithub size={60} color="#e6b32a" />
          <FaLinkedin size={60} color="#e6b32a" />
        </div>
      </Content>
    </Container>
  );
}
