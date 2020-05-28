import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, Submit } from './styles';

const Users = () => {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="Add user"
        />

        <Submit>
          <Icon name="add" size={20} color="#fff" />
        </Submit>
      </Form>
    </Container>
  )
}

export default Users
