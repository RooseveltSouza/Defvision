import React, { useState, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { Formik, useFormik, Field } from 'formik';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  ButtonSignUp,
  ButtonTextSignUp,
} from './styles';

import BackgroundSign from '../../components/Background/BackgroundSign';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail invalido.')
    .required('E-mail obrigatório.'),
  password: Yup.string()
    .min(8, 'No minimo 8 caracteres')
    .required('Informe a senha'),
});

export default function Login() {
  const [error, setError] = useState(true);

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const passwordRef = useRef();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      if (email === '' || password === '') {
        return;
      }
      dispatch(signInRequest(email, password));
    },
    validationSchema: schema,
  });

  return (
    <BackgroundSign>
      <Container>
        <Image source={logo} />

        <Form>
          <Formik
            initialValues={formik.initialValues}
            onSubmit={formik.handleSubmit}
            validationSchema={schema}>
            <>
              {/* <View style={{ height: 50 }}>
              <Text>Test</Text>
            </View> */}
              <FormInput
                icon="email-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Sua senha secreta"
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={formik.handleSubmit}
              />
            </>
          </Formik>
          <SubmitButton loading={loading} onPress={formik.handleSubmit}>
            Entrar
          </SubmitButton>

          <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
            <ButtonTextSignUp>Não possui conta? Criar conta</ButtonTextSignUp>
          </ButtonSignUp>
        </Form>
      </Container>
    </BackgroundSign>
  );
}
