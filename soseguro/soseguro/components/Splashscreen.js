import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const Splashscreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false); // Set loading to false after timeout
      setTimeout(() => {
        navigation.replace('Loginpages'); // Replace with Loginpages screen
      }, 2500); // Add a 2,5 seconds delay for a smoother transition
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timerId); // Cleanup on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000FF" />
      ) : (
        <Image
          source={require('../assets/soseguro_logo.png')} // Assuming image in 'assets' folder
          style={styles.backgroundImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DCD8', // Set background color here
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default Splashscreen;
