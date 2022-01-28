import styled from 'styled-components/native';

export const FakeContainer = styled.View`
  height: 150px;
`;

export const ProductContainer = styled.TouchableOpacity`
  width: 48%;
  height: 230px;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px;
  padding: 10px 10px;
`;

export const ProductText = styled.Text`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  text-align: left;
  color: #3D3D4D;
  margin-top: 20px;
`;

export const ProductCostText = styled.Text`
  font-size: 16px;
  font-family: 'Rubik-Regular';
  text-align: center;
  color: #33B670;
  margin-top: 20px;
`;

export const ProductAddText = styled.Text`
  font-size: 16px;
  font-family: 'Rubik-Regular';
  text-align: center;
  color: #C4C4C4;
  margin-top: 20px;
`;

export const ProductRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  position: absolute;
  bottom: -4;
  width: 100%;
  left: 10;
  right: 20;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 30;
  width: 30;
  z-index: 1000;
`;

