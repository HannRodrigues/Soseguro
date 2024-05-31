import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatComicons from 'react-native-vector-icons/MaterialCommunityIcons';

function Screencenter() {
  const navigation = useNavigation();

  const handleGoToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleGoToVisualizarPerfil = () => {
    navigation.navigate('VisualizarPerfil');
  };

  const handleGoToAcionamentos = () => {
    navigation.navigate('Acionamentos');
  };

  const handleGoToLogin = () => {
    navigation.navigate('Loginpages');
  };

  const handleMenuClick = () => {
    Alert.alert('Menu clicado');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/soseguro_logo.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.transparentRectangle}>
        <View style={styles.closeMenu}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="ellipsis-vertical-sharp"
              size={49}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuContainer} onPress={handleMenuClick}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="person-circle-outline"
              size={70}
              color={'#717F7F'}
            />
            <TouchableOpacity onPress={handleGoToVisualizarPerfil}>
              <Text style={styles.welcomeText}>Olá, Gilberto!</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={handleGoToProfile}
            style={styles.touchableContainer}>
            <MatComicons
              name="account-edit-outline"
              size={32}
              color={'black'}
            />
            <Text style={styles.buttonText}>Meu Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoToAcionamentos}
            style={styles.touchableContainer}>
            <Ionicons name="timer-outline" size={32} color={'black'} />
            <Text style={styles.text}>Acionamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoToLogin}
            style={styles.touchableContainer}>
            <Ionicons name="exit-outline" size={32} color={'black'} />
            <Text style={styles.textExit}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.botton}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="settings-outline" size={42} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="help-circle-outline" size={42} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F5F4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentRectangle: {
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(166, 205, 206, 0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 11,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  textExit: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  botton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
  },
  closeMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    paddingVertical: 18,
  },
  welcomeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18.75,
  },
});

export default Screencenter;
