/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  FlatList,
} from 'react-native';
import { format } from 'date-fns';
import FilledHearth from '../../assets/images/filledHearth';
import NotFilledHearth from '../../assets/images/notFilledHearth';
import * as C from '../../components/styles';
import * as S from './styles';
import { setCart, setFavorites } from '../../store/modules/quark/actions.js';

export default function Favorites() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.quark?.products as any);
  const favorites = useSelector(state => state.quark?.favorites as any);
  const cart = useSelector(state => state.quark?.cart as []);

  const handleIcon = (item: object) => {
    for (let i = 0; i < favorites.length; i += 1) {
      if (favorites[i].id === item?.id) {
        return true;
      }
    }
    return false;
  };

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <C.ContainerHeader>
        <C.TextHeader>Favoritos</C.TextHeader>
      </C.ContainerHeader>
      <C.Content>
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            handleIcon(item) && (
              <S.ProductContainer>
                <S.IconContainer
                  onPress={() => {
                    let newFavorites = [];
                    if (handleIcon(item)) {
                      newFavorites = favorites.filter((favorite: object) => {
                        return favorite.id !== item.id;
                      });
                    } else {
                      newFavorites.push({
                        id: item.id,
                        created_at: format(new Date(), 'MM/dd/yyyy'),
                      });
                      newFavorites = newFavorites.concat(favorites);
                    }
                    dispatch(setFavorites(newFavorites));
                  }}
                >
                  {handleIcon(item) ? <FilledHearth /> : <NotFilledHearth />}
                </S.IconContainer>
                <Image
                  style={{
                    width: 30,
                    alignSelf: 'center',
                    height: 120,
                    resizeMode: 'contain',
                  }}
                  source={{
                    uri: item.image_url,
                  }}
                />
                <S.ProductText>{item.name}</S.ProductText>
                <S.ProductRow>
                  <S.ProductCostText>R$ {item.price}</S.ProductCostText>
                  <S.IconContainer
                    style={{ width: 20 }}
                    onPress={() => handleAddToCart(item)}
                  >
                    <S.ProductAddText>+</S.ProductAddText>
                  </S.IconContainer>
                </S.ProductRow>
              </S.ProductContainer>
            )
          }
        />
      </C.Content>
    </KeyboardAvoidingView>
  );
}
