import React, { useState, useEffect } from 'react'
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { Container, AddUserForm, UsersList, User } from './styles';

const storageKey = 'github:userslist';

const Main = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAddUser = async () => {
    setIsLoading(true);

    const {
      data: { bio, name, login, avatar_url: avatar }
    } = await api.get(`/users/${user}`);

    setUsersList([
      ...usersList,
      {
        bio,
        name,
        login,
        avatar,
      }
    ]);

    Keyboard.dismiss();

    setIsLoading(false);
  };

  useEffect(() => {
    const loadUsersList = async () => {
      const serialized = await AsyncStorage.getItem(storageKey);

      if (serialized) {
        setUsersList(JSON.parse(serialized));
      }
    };

    loadUsersList();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(storageKey, JSON.stringify(usersList));
  }, [usersList]);

  return (
    <Container>
      <AddUserForm>
        <AddUserForm.Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Add user"
          returnKeyType="send"
          onChangeText={text => setUser(text)}
          onSubmitEditing={() => onAddUser()}
        />

        <AddUserForm.Submit isLoading={isLoading} onPress={() => onAddUser()}>
          {isLoading
            ? <ActivityIndicator color="#fff" />
            : <Icon name="add" size={20} color="#fff" />
          }
        </AddUserForm.Submit>
      </AddUserForm>

      <UsersList
        data={usersList}
        keyExtractor={item => item.login}
        renderItem={({ item }) => (
          <User onPress={() => navigation.navigate('User', { user: item })}>
            <User.Avatar source={{ uri: item.avatar }} />
            <User.Content>
              <User.Name>{item.name}</User.Name>
              <User.Bio>{item.bio}</User.Bio>
              <User.CtaText>See profile</User.CtaText>
            </User.Content>
          </User>
        )}
      />
    </Container>
  )
}

export default Main
