import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({ onPress, imageSource, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.viewContainer}>
        <ImageBackground 
          source={require('../assets/rectangle_menu.png')} 
          style={styles.imageBackground}
        >
          <Image 
            source={imageSource} 
            style={styles.image}
          />
        </ImageBackground>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ display: "flex", alignItems: "center", flexDirection: "row", backgroundColor: "#C2DCD8", }}>
        <TouchableOpacity onPress={() => navigation.navigate("Screencenter")}>
          <Ionicons
            name="ellipsis-vertical-sharp"
            size={49}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={{ display: "flex", alignItems: "center", width: "100%", top: 4, paddingRight: 100, paddingBottom: 10 }}>
          <Image source={require('../assets/soseguro_logo_small.png')} />
        </View>
      </View>

      <View style={{ display: "flex", backgroundColor: "#DEEDE9", flex: 1 }}>
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "column", gap: 150, borderRadius: 47, padding: 30, marginTop: 60, marginHorizontal: 30 }}>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <CustomButton
              onPress={() => navigation.navigate("Seguro")}
              imageSource={require('../assets/escudo-seguro_1.png')}
              label="Seguro"
            />
            <CustomButton
              onPress={() => navigation.navigate("Ambulancia")}
              imageSource={require('../assets/ambulancia_1.png')}
              label="Ambulância"
            />
          </View>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: 30 }}>
            <CustomButton
              onPress={() => navigation.navigate("Policia")}
              imageSource={require('../assets/sirene_1.png')}
              label="Polícia"
            />
            <CustomButton
              onPress={() => navigation.navigate("BoletimDeOcorrencia")}
              imageSource={require('../assets/documento_1.png')}
              label="B.O"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // Estilos opcionais para o TouchableOpacity
  },
  viewContainer: {
    height: 90, 
    width: 90, 
    display: "flex", 
    alignItems: "center"
  },
  imageBackground: {
    height: 90, 
    width: 90, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 5
  },
  image: {
    width: 75, 
    height: 75
  },
  text: {
    fontSize: 14, 
    fontWeight: "400", 
    color: "#717F7F"
  }
});

export default Home;
