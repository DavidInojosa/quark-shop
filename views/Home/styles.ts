import styled from 'styled-components/native';

export const CellInput = styled.TextInput`
flex: 1;
font-size: 16px;
color: #575757;
margin-left: 10px;
`;

export const CellInputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: #FFF;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 15px;
  margin-top: 84px;
  z-index: 100;
  align-self: center;
  position: absolute;
  width: 86%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px;
`;

export const BrandContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: -20px;
  margin-left: 7%;
`;

export const HorizontalContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  height: 130px;
  flex-direction: row;
  position: absolute;
  top: 210px;
  padding-left: 7%;
  z-index: 10;
`;

export const CategoryItem = styled.TouchableOpacity`
  height: 100%;
  border: 1px;
  width: 110px;
  margin-right: 24px;
  border-radius: 5px;
  padding-top: 14px;
  padding-bottom: 14px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFF;
`;

export const CategoryText = styled.Text`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  text-align: center;
  font-weight: 500;
  color: #000000;
`;

export const FakeContainer = styled.View`
  height: 150px;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 30;
  width: 30;
  z-index: 1000;
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
