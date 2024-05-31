import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const BoletimDeOcorrencia = () => {
  const handlePress = () => {
    Linking.openURL('https://delegaciavirtual.sids.mg.gov.br/sxgn/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Deseja fazer um Boletim de ocorrência? clique no botão abaixo...</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Fazer Boletim de Ocorrência</Text>
      </TouchableOpacity>
      <Text style={styles.redirectText}>Você será redirecionado para uma página da Web</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  promptText: {
    top: 20,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    top: 20,
    backgroundColor: '#A1CDC2',
    borderRadius: 31,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  redirectText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    top: 10,
  },
});

export default BoletimDeOcorrencia;
