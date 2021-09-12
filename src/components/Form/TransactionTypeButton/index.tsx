import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
   Container, 
   Title, 
   Icon 
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down'; 
  title: string;
  isActive: boolean;
}

const TransactionTypeButton = ({ type, title, isActive,...rest }: Props) => {

  return (
    <Container 
     type={type}
     isActive={isActive}
     activeOpacity={0.5}
     {...rest} 
    > 
      <Icon 
       name={icons[type]} 
       type={type}
       />
      <Title> 
        {title}
      </Title>
    </Container>
  );
}

export default TransactionTypeButton;