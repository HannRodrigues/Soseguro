import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity, Modal, Alert, Platform, PermissionsAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícones de seta
import * as ImagePicker from 'expo-image-picker'; // Para trabalhar com a câmera

export default function Seguro() {
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [otherDescription, setOtherDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const insuranceOptions = ['Sinistro', 'Reboque', 'Troca de Pneu', 'Vidros', 'Outro'];

  useEffect(() => {
    // Verificar e solicitar permissão de câmera ao carregar o componente
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
  }, []);

  useEffect(() => {
    // Validar o formulário sempre que um dos campos for atualizado
    validateForm();
  }, [name, phone, address, selectedInsurance]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permissão para usar a câmera',
          message: 'Este aplicativo precisa da permissão da câmera para anexar fotos.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida');
      } else {
        console.log('Permissão negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleBackPress = () => {
    // Lógica para voltar à tela anterior (navegação)
    console.log("Botão de voltar pressionado");
  };

  const handleSelectInsurance = (option) => {
    setSelectedInsurance(option);
    if (option !== 'Outro') {
      setOtherDescription('');
    }
    setModalVisible(false);
  };

  const handleAttachDocument = () => {
    // Lógica para anexar documento
    Alert.alert('Anexar Documento', 'Implementação em andamento!');
  };

  const handleAttachPhoto = async () => {
    // Lógica para anexar foto
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      // Aqui você pode fazer algo com a foto, como exibi-la na interface do usuário ou enviá-la para um servidor.
    }
  };

  const handleConfirm = () => {
    // Lógica para confirmar o acionamento do seguro e enviar os dados
    Alert.alert('Acionar Seguro', 'Acionamento Concluído!');
  };

  const handleCancel = () => {
    // Lógica para cancelar o acionamento do seguro e voltar à tela anterior
    console.log("Acionamento do seguro cancelado");
  };

  const validateForm = () => {
    if (name.trim() !== '' && phone.trim() !== '' && address.trim() !== '' && selectedInsurance !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Endereço:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua localização atual"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <TouchableOpacity
          style={styles.selectContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.subHeader}>Tipo de Cobertura:</Text>
          <Text style={styles.selectedOption}>{selectedInsurance || 'Selecione uma opção'}</Text>
          <Ionicons name="chevron-down" size={24} color="#1E90FF" />
        </TouchableOpacity>
        {selectedInsurance === 'Outro' && (
          <View style={styles.inputContainer}>
            <Text style={styles.subHeader}>Descrição do Seguro:</Text>
            <TextInput
              style={styles.input}
              placeholder="Descreva o atual caso"
              value={otherDescription}
              onChangeText={setOtherDescription}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.attachButton}
          onPress={handleAttachDocument}
        >
          <Text style={styles.attachButtonText}>Anexar Boletim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.attachButton}
          onPress={handleAttachPhoto}
        >
          <Text style={styles.attachButtonText}>Anexar Foto</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isFormValid ? '#5BEC6A' : '#ccc' }]}
            onPress={isFormValid ? handleConfirm : null}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Acionar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FF6347' }]}
            onPress={handleCancel}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {insuranceOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.modalOption}
                onPress={() => handleSelectInsurance(option)}
              >
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'grey',
   
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#C1DCD7',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 31,
    paddingHorizontal: 10,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  selectedOption: {
    color: '#1E90FF',
  },
  attachButton: {
    backgroundColor: '#2C6859',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 31,
    marginTop: 20,
  },
  attachButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 18,
  },
});
