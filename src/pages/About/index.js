import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../../assets/profile.jpeg';

import Header from '../../components/Header';

import { Container, Content } from './styles';

export default function About() {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <img src={profile} alt="Italo Marcos" />
          <h1>Italo Marcos</h1>
          <div>
            <a href="https://github.com/italomarcos1">
              <FaGithub size={60} color="#e6b32a" />
            </a>
            <a href="https://linkedin.com/in/italomarcos1">
              <FaLinkedin size={60} color="#e6b32a" />
            </a>
          </div>
        </Content>
      </Container>
    </>
  );
}
