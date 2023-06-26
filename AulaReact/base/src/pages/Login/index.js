import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo> Bem-vindo ao site base</Paragrafo>
      <a href="">Meu primeiro site react</a>
    </Container>
  );
}
