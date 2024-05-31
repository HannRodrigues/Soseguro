import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Modal, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [showInsuranceOptions, setShowInsuranceOptions] = useState(false);
  const [showDocumentPicker, setShowDocumentPicker] = useState(false);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [documents, setDocuments] = useState([]);
  const insuranceOptions = ['Neo', 'Pier', 'Allianz', 'Bradesco', 'Porto Seguro', 'Itaú'];

  const handleSelectInsurance = (option) => {
    setSelectedInsurance(option);
    setShowInsuranceOptions(false);
  };

  const handleAttachDocuments = () => {
    // No Snack Expo, não podemos usar react-native-document-picker
    alert('Functionality not supported in Snack Expo');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
          <Image source={require('../assets/profile.png')} style={{ height: 120, width: 120 }} />
          <TouchableOpacity>
            <Text style={styles.welcomeText}>Adicionar foto/ alterar</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 20, gap: 15 }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 15, gap: 15 }}>
            <TextInput
              placeholder="Gilberto Rodrigues Campos Da Silva"
              placeholderTextColor={'#717F7F'}
              textAlign="center"
              style={styles.input}
            />
            <TextInput
              placeholder="Endereço"
              placeholderTextColor={'#717F7F'}
              textAlign="center"
              style={styles.input}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 15, gap: 15 }}>
            <TextInput
              placeholder="               CPF                  "
              placeholderTextColor={'#717F7F'}
              textAlign="center"
              style={styles.input}
            />
            <TextInput
              placeholder="                 RG                     "
              placeholderTextColor={'#717F7F'}
              textAlign="center"
              style={styles.input}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 15, gap: 15 }}>
            <TextInput
              placeholder="                  CNH                "
              placeholderTextColor={'#717F7F'}
              textAlign="center"
              style={styles.input}
            />
          </View>
        </View>

        <View style={{ padding: 10, paddingTop: 30, gap: 10 }}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setShowDocumentPicker(true)}
          >
            <Text style={styles.optionButtonText}>Anexar Documentos</Text>
            <Ionicons name="chevron-down-outline" size={25} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setShowInsuranceOptions(true)}
          >
            <Text style={styles.optionButtonText}>Linkar Seu Seguro</Text>
            <Ionicons name="chevron-down-outline" size={25} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 10, paddingTop: 15, gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => { }}>
            <Text style={styles.buttonText}>SALVAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => { }}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '400', color: '#717F7F' }}>Adicionar outro usuário</Text>
          </TouchableOpacity>
        </View>

        {/* Modal para opções de seguro */}
        <Modal visible={showInsuranceOptions} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Escolha seu Seguro</Text>
            {insuranceOptions.map(option => (
              <TouchableOpacity key={option} style={styles.modalItem} onPress={() => handleSelectInsurance(option)}>
                <Text style={styles.modalItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowInsuranceOptions(false)}>
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Modal para anexar documentos */}
        <Modal visible={showDocumentPicker} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Anexar Documentos</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleAttachDocuments}>
              <Text style={styles.modalButtonText}>Escolher Documentos</Text>
            </TouchableOpacity>
            {documents.map((doc, index) => (
              <View key={index} style={styles.documentItem}>
                <Text style={styles.documentItemText}>{doc}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowDocumentPicker(false)}>
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    color: '#717F7F',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18.75,
  },
  input: {
    backgroundColor: '#A1CDC2',
    borderRadius: 31,
    padding: 10,
    color: 'black',
  },
  button: {
    flex: 0.5,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  saveButton: {
    backgroundColor: '#5BEC6A',
  },
  cancelButton: {
    backgroundColor: '#FF0606',
  },
  buttonText: {
    color: 'white',
        fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#A1CDC2',
    width: '100%',
    height: 50,
    borderRadius: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  optionButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#717F7F',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 18,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#A1CDC2',
    borderRadius: 31,
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: '#717F7F',
  },
  documentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  documentItemText: {
    fontSize: 16,
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#A1CDC2',
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 18,
    color: '#717F7F',
  },
});

export default Profile;

   
