import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createUserResquest } from '../../store/modules/user/actions';

import { Container, Image, Form, FormInput, SubmitButton } from './styles';
import BackgroundSign from '../../components/Background/BackgroundSign';
import logo from '../../assets/logo.png';

export default function SignUp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addressRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleCreate() {
    dispatch(createUserResquest(name, address, email, password));
    setName('');
    setAddress('');
    setEmail('');
    setPassword('');
  }

  return (
    <BackgroundSign>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="account-outline"
            autoCorrect={false}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => addressRef.current.focus()}
          />
          <FormInput
            icon="map-search-outline"
            value={address}
            onChangeText={setAddress}
            placeholder="Digite seu endereço"
            ref={addressRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="email-outline"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleCreate}
          />
          {
            <SubmitButton loading={loading} onPress={handleCreate}>
              Criar Conta
            </SubmitButton>
          }
        </Form>
      </Container>
    </BackgroundSign>
  );
}
