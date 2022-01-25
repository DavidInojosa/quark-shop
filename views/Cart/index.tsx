import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  View,
} from 'react-native';

import * as C from '../../components/styles';

export default function Cart() {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <C.ContainerHeader>
        <C.TextHeader>Carrinho</C.TextHeader>
      </C.ContainerHeader>
    </KeyboardAvoidingView>
  );
}
