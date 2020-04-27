import React from 'react';
import { Text , StatusBar } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, Balance, BalanceConteiner, BalanceTitle, Container } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

function Home() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

            <BalanceConteiner>
              <BalanceTitle>Seu saldo</BalanceTitle>
              <Balance>R$ 0,00</Balance>
            </BalanceConteiner>
            
            <AntDesign name="gift" size={30} color="#10c86e" />
          </Header>

          <Suggestions />
          <Activities />
          <Tips />
          <Banner />
        </Container>
      </Wrapper>
    </>
  )
}

export default Home;