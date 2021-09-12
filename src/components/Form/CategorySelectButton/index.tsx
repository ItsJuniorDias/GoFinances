import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Category,
  Icon,
} from './styles';

interface Prosp {
  title: string;
  onPress: () => void;
}

const CategorySelectButton = ({ title, onPress }: Prosp) => {
  return (
    <Container onPress={onPress}> 
       <Category> 
         {title}
       </Category>
       <Icon name="chevron-down" />
    </Container>
  );
}

export default CategorySelectButton;