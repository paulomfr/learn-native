/**
 * Para lidar com as rotas foram instaladas as dependências
 * react-navigaton react-native-gesture-handler react-native-reanimated
 *
 * react-native-gesture-handler: Utilizada para lidar com os gestures do usuário;
 * alguns apps permitem arrastar a tela e com isso trocar a rota, essa lib é responsável
 * por lidar com isso.
 *
 * react-native-reanimated: Essa lib é responsável por lidar com algumas animações
 * quando ocorre a troca da rota.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Screens
 */
import Main from './screens/Main';
import Users from './screens/Users';

/**
 * O `createAppContainer` é como se fosse o `BrowserRouter` no react web
 * que contem as configurações para as nossas rotas funcionarem.
 *
 * O `createStackNavigator` contém alguns tipos de configações de rotas.
 */
const Stack = createStackNavigator();
const screenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7159c1'
  },
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Users" screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
