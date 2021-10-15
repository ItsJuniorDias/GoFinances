import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

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

interface HighlightProps {
  total: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
}

const Welcome = () => {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightCardData, setHighlightData] = useState<HighlightData>({} as HighlightData);

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps) => {
      
      if(item.type === 'positive') {
        entriesTotal += Number(item.amount);
      } else {
        expensiveTotal += Number(item.amount);
      }
 
      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
       
      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      }
    })

    setTransactions(transactionsFormatted)
    setHighlightData({
      entries: {
        total: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      expensives: {
        total: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      }
    })
  }



  // useEffect(() => {
  //   loadTransactions();
  // })

  useFocusEffect(useCallback(() => {
    loadTransactions()
  }, []));



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
          amount={highlightCardData?.entries?.total}
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount={highlightCardData?.expensives?.total}
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
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>   <TransactionCard data={item} /> }
      />
   
    </Transaction>

    </Container>
  );
}

export default Welcome;