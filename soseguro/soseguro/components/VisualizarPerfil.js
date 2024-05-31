import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function VisualizarPerfil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Olá, Gilberto!</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.alterPhoto}>Alterar foto</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value="Gilberto Rodrigues Campos Da Silva" editable={false} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} value="156258632-45" editable={false} />
        <Text style={styles.label}>Seguro</Text>
        <TextInput style={styles.input} value="Pier Seguradora" editable={false} />
        <Text style={styles.label}>Placa do veículo</Text>
        <TextInput style={styles.input} value="GTV-5478" editable={false} />
        <Text style={styles.label}>CNH</Text>
        <TextInput style={styles.input} value="515165699595" editable={false} />
        <Text style={styles.label}>Endereço</Text>
        <TextInput style={styles.input} value="AV Andradas, Belo Horizonte" editable={false} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  alterPhoto: {
    marginTop: 10,
    color: '#007BFF',
  },
  infoContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#A1CDC2',
    padding: 10,
    borderRadius: 31,
    marginBottom: 15,
    fontSize: 16,
  },
});
