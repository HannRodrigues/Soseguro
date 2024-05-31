import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking, Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Ambulancia = () => {
  const [mensagemPersonalizada, setMensagemPersonalizada] = useState('');

  const solicitarPermissãoLocalização = async () => {
    if (Platform.OS === 'android') {
      try {
        const concedido = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Localização',
            message: 'Este aplicativo precisa acessar sua localização.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        return concedido === PermissionsAndroid.RESULTS.GRANTED;
      } catch (erro) {
        console.warn(erro);
        return false;
      }
    } else {
      return true;
    }
  };

  const handleEnviarLocalização = async () => {
    const temPermissão = await solicitarPermissãoLocalização();
    if (!temPermissão) {
      Alert.alert('Permissão de localização negada');
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mensagem = `Olá, aconteceu um acidente nesse endereço, envie uma ambulância. Minha localização é: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        const telefone = '31995116880';
        const url = `sms:${telefone}?body=${encodeURIComponent(mensagem)}`;
        Linking.openURL(url);
      },
      (error) => {
        Alert.alert('Erro ao obter localização', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleEnviarMensagem = () => {
    const telefone = '31995116880';
    const url = `sms:${telefone}?body=${encodeURIComponent(mensagemPersonalizada)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.promptText}>Solicitar ambulância</Text>
        <TouchableOpacity style={styles.botão} onPress={handleEnviarLocalização}>
          <Text style={styles.buttonText}>Enviar localização em tempo real</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.promptText}>Enviar mensagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem aqui"
          value={mensagemPersonalizada}
          onChangeText={setMensagemPersonalizada}
        />
        <TouchableOpacity style={styles.botão} onPress={handleEnviarMensagem}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 30,
  },
  promptText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botão: {
    padding: 15,
    backgroundColor: '#A1CDC2',
    borderRadius: 31,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A1CDC2',
    borderRadius: 31,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Ambulancia;
