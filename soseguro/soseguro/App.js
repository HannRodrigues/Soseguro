import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Splashscreen from './components/Splashscreen';
import Loginpages from './components/Loginpages';
import Home from './components/Home';
import Seguro from './components/Seguro';
import Policia from './components/Policia';
import Ambulancia from './components/Ambulancia';
import BoletimDeOcorrencia from './components/BoletimDeOcorrencia';
import CreateAccountPage from './components/CreateAccountPage';
import Screencenter from './components/Screencenter';
import Acionamentos from './components/Acionamentos';
import VisualizarPerfil from './components/VisualizarPerfil';
import Profile from './components/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#fff', // Cor do cabeçalho
          },
          headerTintColor: '#5CC6BA', // Cor da seta de voltar
          headerTitleAlign: 'center', // Centraliza o título
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24, // Tamanho do nome da página
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="#5CC6BA" /> 
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Loginpages" component={Loginpages} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Seguro" component={Seguro} />
        <Stack.Screen name="Policia" component={Policia} />
        <Stack.Screen name="Ambulancia" component={Ambulancia} />
        <Stack.Screen name="BoletimDeOcorrencia" component={BoletimDeOcorrencia} />
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
        <Stack.Screen name="Screencenter" component={Screencenter} />
        <Stack.Screen name="Acionamentos" component={Acionamentos} />
        <Stack.Screen name="VisualizarPerfil" component={VisualizarPerfil} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
