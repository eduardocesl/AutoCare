import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '../components/navigation/TabBarIcon';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import Motoristas from './screens/Motoristas';
import Veiculos from './screens/Veiculos';
import Configuracoes from './screens/Configuracoes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Não editar Este Arquivo

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Motoristas" 
        component={Motoristas} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Veiculos" 
        component={Veiculos} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="car-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Configurações" 
        component={Configuracoes} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}