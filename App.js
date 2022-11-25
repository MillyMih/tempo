import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
import Itanhaem from './components/Itanhaem';
import Peruibe from './components/Peruibe';
import Iguape from './components/Iguape';
import Ilha_Comprida from './components/Ilha_Comprida';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongaguá" component={Mongagua} />
        <Stack.Screen name="Itanhaém" component={Itanhaem} />
        <Stack.Screen name="Peruíbe" component={Peruibe} />
        <Stack.Screen name="Iguape" component={Iguape} />
        <Stack.Screen name="Ilha Comprida" component={Ilha_Comprida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}