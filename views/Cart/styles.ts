import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 120px;
  background-color: #332C66;
  align-items: center;
  justify-content: center;
`;

export const TextHeader = styled.Text`
  font-size: 22px;
  font-family: 'Rubik-Regular';
  text-align: center;
  color: #fff;
`;

export const ProductContainer = styled.TouchableOpacity`
  width: 100%;
  height: 124px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px;
  padding: 10px 10px;
  flex-direction: row;
`;

export const ProductTextContainer = styled.View`
  flex-direction: column;
  padding: 6px 0px;
`;

export const PriceTextContainer = styled.View`
  flex-direction: row;
`;

export const ProductText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  text-align: left;
  color: #3D3D4D;
`;

export const PriceProductText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
  text-align: left;
  color: #A0A0B3;
`;

export const QuantityProductText = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #332C66;
  font-weight: bold;
  margin-right: 6px;
`;

export const TotalPriceProductText = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #33B670;
  font-weight: bold;
`;

export const TotalCostText = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #018ACD;
  font-weight: bold;
  margin-right: 6px;
`;

export const ButtonsContainer = styled.View`
  width: 56px;
  right: 20;
  top: 16;
  bottom: 16;
  position: absolute;
`;

export const ButtonActions = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: #F0457110;
  justify-content: center;
`;

export const IconsText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #F04571;
  font-weight: bold;
`;
