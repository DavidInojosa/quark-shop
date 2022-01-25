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
import FilledHearth from '../../assets/images/filledHearth';
import * as C from '../../components/styles';
import * as S from './styles';

export default function Favorites() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.quark?.products?.data as any);

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
          renderItem={({ item }) => (
            <S.ProductContainer>
              <FilledHearth />
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
                <S.ProductAddText>+</S.ProductAddText>
              </S.ProductRow>
            </S.ProductContainer>
          )}
        />
      </C.Content>
    </KeyboardAvoidingView>
  );
}
