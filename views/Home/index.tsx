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
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconQuark from '../../assets/images/iconQuark';
import NotFilledHearth from '../../assets/images/notFilledHearth';
import FilledHearth from '../../assets/images/filledHearth';
import * as C from '../../components/styles';
import * as S from './styles';
import {
  getCategories,
  getFavorites,
  getProducts,
  setCart,
  setFavorites,
} from '../../store/modules/quark/actions.js';

export default function Home() {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [search, setSearch] = useState('');
  const [productsFiltered, setProductsFiltered] = useState([]);
  const categories = useSelector(state => state.quark?.categories as []);
  const products = useSelector(state => state.quark?.products as []);
  const cart = useSelector(state => state.quark?.cart as []);
  const favorites = useSelector(state => state.quark?.favorites as []);
  const [category, setCategory] = useState(
    new Array(categories.length).fill(false),
  );

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getFavorites());
    dispatch(setCart([]));
  }, []);

  useEffect(() => {
    if (products !== []) {
      setProductsFiltered(products);
    }
  }, [products]);

  useEffect(() => {
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
      finalProductsArray.push(newProductsFromCategory);
    });
    let mergeArrays = [].concat(...finalProductsArray);
    if (mergeArrays.length === 0 && search === '') {
      mergeArrays = products;
    }
    setProductsFiltered(mergeArrays);
  }, [search, category]);

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

  const handleFavorite = (item: object) => {
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
  };

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
              <S.IconContainer onPress={() => handleFavorite(item)}>
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
          )}
        />
      </C.Content>
    </KeyboardAvoidingView>
  );
}
