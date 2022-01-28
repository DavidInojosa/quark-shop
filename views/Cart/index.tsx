/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';

import * as C from '../../components/styles';
import * as S from './styles';
import { setCart } from '../../store/modules/quark/actions.js';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.quark?.cart as any);
  const [totalCost, setTotalCost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let newTotalCost = 0;
    cart.map(item => {
      newTotalCost =
        parseInt(item.quantity, 10) * parseInt(item.price, 10) + newTotalCost;
    });
    setTotalCost(newTotalCost.toFixed(2));
  }, [cart]);

  useEffect(() => {
    let newTotalQuantity = 0;
    cart.map(item => {
      newTotalQuantity = parseFloat(item.quantity) + newTotalQuantity;
    });
    setTotalQuantity(newTotalQuantity.toFixed(0));
  }, [cart]);

  const handleAddToCart = (item: object) => {
    let newCart = [];
    if (cart.length === 0) {
      newCart.push({
        ...(item as object),
        quantity: 1,
      });
    } else {
      newCart = [];
      let isInCart = false;
      for (let j = 0; j < cart.length; j += 1) {
        if (cart[j].id === item.id) {
          const quantityAux = cart[j].quantity;
          newCart.push({
            ...(cart[j] as object),
            quantity: quantityAux + 1,
          });
          isInCart = true;
        } else {
          newCart.push(cart[j]);
        }
      }
      if (!isInCart) {
        newCart.push({ ...(item as object), quantity: 1 });
      }
    }

    dispatch(setCart(newCart));
  };

  const handleSubToCart = (item: object) => {
    let newCart = [];
    if (cart.length === 0) {
      newCart.push({
        ...(item as object),
        quantity: 1,
      });
    } else {
      newCart = [];
      let isInCart = false;
      for (let j = 0; j < cart.length; j += 1) {
        if (cart[j].id === item.id && item.quantity !== 0) {
          const quantityAux = cart[j].quantity;
          newCart.push({
            ...(cart[j] as object),
            quantity: quantityAux - 1,
          });
          isInCart = true;
        } else {
          newCart.push(cart[j]);
        }
      }
    }

    dispatch(setCart(newCart));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <C.ContainerHeader>
        <C.TextHeader>Carrinho</C.TextHeader>
      </C.ContainerHeader>
      <C.Content>
        <FlatList
          data={cart}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <S.ProductContainer>
              <Image
                style={{
                  width: 20,
                  alignSelf: 'center',
                  height: 80,
                  resizeMode: 'contain',
                  marginLeft: 40,
                }}
                source={{
                  uri: item.image_url,
                }}
              />
              <S.ProductTextContainer
                style={{
                  justifyContent: 'space-between',
                  marginLeft: 40,
                  maxWidth: 140,
                }}
              >
                <S.ProductTextContainer>
                  <S.ProductText>{item.name}</S.ProductText>
                  <S.PriceProductText style={{ marginTop: 4 }}>
                    R$ {item.price}0
                  </S.PriceProductText>
                </S.ProductTextContainer>
                <S.PriceTextContainer>
                  <S.QuantityProductText>
                    {item.quantity}x
                  </S.QuantityProductText>
                  <S.TotalPriceProductText>
                    R$ {parseFloat(item.price) * parseFloat(item.quantity)}0
                  </S.TotalPriceProductText>
                </S.PriceTextContainer>
              </S.ProductTextContainer>
              <S.ButtonsContainer>
                <S.ButtonActions onPress={() => handleAddToCart(item)}>
                  <S.IconsText>+</S.IconsText>
                </S.ButtonActions>
                <S.ButtonActions onPress={() => handleSubToCart(item)}>
                  <S.IconsText>-</S.IconsText>
                </S.ButtonActions>
              </S.ButtonsContainer>
            </S.ProductContainer>
          )}
        />
        <S.ProductTextContainer
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <S.PriceTextContainer>
            <S.QuantityProductText style={{ fontSize: 16 }}>
              Total:{' '}
            </S.QuantityProductText>
            <S.TotalCostText style={{ fontSize: 16 }}>
              R$ {parseFloat(totalCost).toFixed(2)}
            </S.TotalCostText>
          </S.PriceTextContainer>
          <S.PriceProductText style={{ marginTop: 4 }}>
            {totalQuantity} itens
          </S.PriceProductText>
        </S.ProductTextContainer>
      </C.Content>
    </KeyboardAvoidingView>
  );
}
