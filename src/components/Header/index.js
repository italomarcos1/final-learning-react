import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <FaGlobeAmericas size={35} color="#888" />
          </Link>
          <h1>Application</h1>
        </nav>

        <aside>
          <Link to="/about">About the Creator</Link>
          <a href="https://github.com/italomarcos1/final-learning-react">
            <FaGithub size={35} color="#888" />
          </a>
        </aside>
      </Content>
    </Container>
  );
}
