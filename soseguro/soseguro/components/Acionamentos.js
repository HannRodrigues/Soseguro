import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';

const Acionamentos = () => {
  const [selectedFilter, setSelectedFilter] = useState('Em andamento');
  const [modalVisible, setModalVisible] = useState(false);

  const requests = [
    { id: '1', status: 'Em andamento', description: '243 - Aguardando retorno da seguradora' },
    { id: '2', status: 'Finalizado', description: '244 - Concluído com sucesso' },
    { id: '3', status: 'Cancelado', description: '245 - Cancelado pelo cliente' },
  ];

  const renderRequest = ({ item }) => (
    <View style={styles.requestCard}>
      <Text style={styles.requestText}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Últimas solicitações</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.filterText}>Filtrar</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Selecione um filtro</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => { setSelectedFilter('Em andamento'); setModalVisible(false); }}
              >
                <Text style={styles.modalButtonText}>Em andamento</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => { setSelectedFilter('Finalizado'); setModalVisible(false); }}
              >
                <Text style={styles.modalButtonText}>Finalizado</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => { setSelectedFilter('Cancelado'); setModalVisible(false); }}
              >
                <Text style={styles.modalButtonText}>Cancelado</Text>
              </Pressable>
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Text style={styles.sectionHeader}>{selectedFilter}</Text>
        <FlatList
          data={requests.filter(request => request.status === selectedFilter)}
          renderItem={renderRequest}
          keyExtractor={item => item.id}
        />
        {requests.filter(request => request.status === selectedFilter).length === 0 && (
          <Text style={styles.noRequestsText}>Você não possui solicitações no momento...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#007BFF',
  },
  sectionHeader: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    padding: 5,
    top: 10,
  },
  requestCard: {
    padding: 15,
    backgroundColor: '#A1CDC2',
    borderRadius: 31,
    marginBottom: 10,
  },
  requestText: {
    fontSize: 16,
  },
  noRequestsText: {
    fontSize: 16,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    padding: 10,
    marginBottom: 10,
     backgroundColor: 'rgba(166, 205, 206, 0.5)',
    borderRadius: 31,
  },
  modalButtonText: {
    color: 'black',
    fontSize: 16,
  },
  modalCloseButton: {
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Acionamentos;
