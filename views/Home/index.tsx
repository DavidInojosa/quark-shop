/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-sequences */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconQuark from '../../assets/images/iconQuark';
import NotFilledHearth from '../../assets/images/notFilledHearth';
import IconWine from '../../assets/images/wine';
import IconMeat from '../../assets/images/meat';
import IconFruit from '../../assets/images/fruits';

import * as C from '../../components/styles';
import * as S from './styles';
import {
  getCategories,
  getProducts,
} from '../../store/modules/quark/actions.js';

export default function Home() {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [search, setSearch] = useState('');
  const [productsFiltered, setProductsFiltered] = useState([]);
  const categories = useSelector(state => state.quark?.categories?.data as any);
  const products = useSelector(state => state.quark?.products?.data as any);
  const [category, setCategory] = useState(
    new Array(categories.length).fill(false),
  );
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products !== []) {
      setProductsFiltered(products);
    }
  }, [products]);

  useEffect(() => {
    console.tron.log('mudou', search, category);
    const newProducts = products.filter(productItem => {
      return productItem.name
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    const finalProductsArray: Array<number> = [];
    category.map((item, index) => {
      const newProductsFromCategory = newProducts.filter(
        productItemCategory => {
          return productItemCategory.category === index + 1 && item;
        },
      );
      console.tron.log('final', newProductsFromCategory);
      finalProductsArray.push(newProductsFromCategory);
    });
    let mergeArrays = [].concat(...finalProductsArray);
    if (mergeArrays.length === 0 && search === '') {
      mergeArrays = products;
    }
    setProductsFiltered(mergeArrays);
  }, [search, category]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <C.ContainerHeader>
        <S.BrandContainer>
          <IconQuark />
          <C.TextHeader style={{ marginLeft: 12 }}>QuarkShop</C.TextHeader>
        </S.BrandContainer>
      </C.ContainerHeader>
      <S.CellInputArea>
        <Icon
          name="search"
          size={24}
          color="#B7B7CC"
          style={{ alignSelf: 'center' }}
        />
        <S.CellInput
          placeholder="Procure por um produto!"
          placeholderTextColor="#B7B7CC"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setSearch}
          value={search}
        />
      </S.CellInputArea>
      <S.HorizontalContainer>
        {categories.map(
          (
            item: {
              image_url: any;
              title: string;
            },
            index: number,
          ) => (
            <S.CategoryItem
              style={{
                borderColor: category[index] ? '#F04571' : '#F0F2F3',
                borderWidth: 1.83673,
              }}
              onPress={() => {
                const newCategories = category.map((item, position) =>
                  position === index ? !item : item,
                );
                setCategory(newCategories);
              }}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={{
                  uri: item.image_url,
                }}
              />
              <S.CategoryText>{item.title}</S.CategoryText>
            </S.CategoryItem>
          ),
        )}
      </S.HorizontalContainer>
      <C.Content>
        <C.TextTopic style={{ marginTop: 26 }}>Categorias</C.TextTopic>
        <S.FakeContainer />
        <C.TextTopic style={{ marginTop: 26, marginBottom: 26 }}>
          Produtos
        </C.TextTopic>
        <FlatList
          data={productsFiltered}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <S.ProductContainer>
              <NotFilledHearth />
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
