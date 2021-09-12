import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, { TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  Scroll,
  Transaction,
  Title,
  TransactionList,
  LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Welcome = () => {
  const data: DataListProps[]  = [
   {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de sites",
      amount: "R$ 12.500,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020"
  },
    {   
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 50,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "10/04/2020"
  },
  {
    id: '3',
    type: "negative",
    title: "Aluguel do apartamento",
    amount: "R$ 700,00",
    category: {
      name: 'Casa',
      icon: 'home'
    },
    date: "10/04/2020"
  },
  {
    id: '4',
    type: "negative",
    title: "Curso de ingles",
    amount: "R$ 232,00",
    category: {
      name: 'Curso',
      icon: 'book'
    },
    date: "10/04/2020"
  },
];

  return (
    <Container>  
      <Header> 
        <UserWrapper>
          <UserInfo> 
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/50254416?v=4'}} />

            <User> 
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Alexandre</UserName>
            </User>
          </UserInfo>
          
          <LogoutButton onPress={() => {}}> 
            <Icon name="power" />
          </LogoutButton>

        </UserWrapper>
      </Header>
      
      <Scroll >
        <HighlightCard 
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia  a 13 de abril"
        />
         
        <HighlightCard 
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
    
      </Scroll>
 
    <Transaction> 
      <Title>Listagem</Title>
     
      <TransactionList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>   <TransactionCard data={item} /> }
      />
   
    </Transaction>

    </Container>
  );
}

export default Welcome;