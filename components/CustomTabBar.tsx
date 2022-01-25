import React from 'react';
import { Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import CartIcon from '../assets/images/cart';
import FavoriteIcon from '../assets/images/favorite';
import ListIcon from '../assets/images/list';

const TabArea = styled.View`
  height: 70px;
  background-color: #fff;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  margin-left: 3%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const ContainerNumber = styled.View`
  height: 22px;
  width: 22px;
  background-color: #878787;
  margin-left: -10px;
  margin-top: -20px;
  justify-content: center;
  align-items: center;
  border-radius: 100;
`;

const IconText = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  align-self: center;
  color: #fff;
  font-weight: 600;
  font-family: 'Rubik-Regular';
`;

export default ({ state, navigation }: { state: any; navigation: any }) => (
  <TabArea style={{ backgroundColor: '#332C66' }}>
    <TabItem onPress={() => navigation.navigate('Home')}>
      <Row>
        <ListIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="24"
          height="24"
        />
        <IconText style={{ opacity: state.index === 0 ? 1 : 0.5 }}>
          Listagem
        </IconText>
      </Row>
    </TabItem>
    <TabItem onPress={() => navigation.navigate('Cart')}>
      <Row>
        <CartIcon
          width={24}
          height={24}
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
        />
        <IconText style={{ opacity: state.index === 1 ? 1 : 0.5 }}>
          Carrinho
        </IconText>
      </Row>
    </TabItem>

    <TabItem onPress={() => navigation.navigate('Favorites')}>
      <Row>
        <FavoriteIcon
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          width="24"
          height="24"
        />
        <IconText style={{ opacity: state.index === 2 ? 1 : 0.5 }}>
          Favoritos
        </IconText>
      </Row>
    </TabItem>
  </TabArea>
);
