import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateAccountPage = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const navigation = useNavigation(); // Obtenha a instância de navegação

  const handleSignup = () => {
    // lógica de cadastro aqui
    navigation.navigate('Home'); // Navega para a página Home
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/soseguro_logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone com DDD"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true} // Mascarar a senha
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry={true} // Mascarar a confirmação da senha
        />
        <View style={styles.termsContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeToTerms(!agreeToTerms)}>
            {agreeToTerms && <View style={styles.checkmark} />}
          </TouchableOpacity>
          <Text style={styles.termsText}>Li e concordo com os termos e condições.</Text>
        </View>

        <TouchableOpacity style={[styles.button, !agreeToTerms && styles.buttonDisabled]} onPress={handleSignup} disabled={!agreeToTerms}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2DCD8', // alteração de cor de fundo
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '85%',
    height: '70%',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 31,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#C1DCD7',
    borderColor: '#000000', // alteração da cor da borda
    borderWidth: 1,
    borderRadius: 31,
    paddingHorizontal: 25,
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000000', // alteração da cor da borda
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#000000', // alteração da cor do checkmark
  },
  termsText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2C6859',
    borderRadius: 31,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC', // alteração da cor de fundo do botão desativado
  },
});

export default CreateAccountPage;
