import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logos.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to ChromaShare!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('auth/login')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.createAccountButton} 
          onPress={() => router.push('auth/signup')}
        >
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Space between items
    alignItems: 'center',
    backgroundColor: '#FFFDD0', // Cream background color
    paddingBottom: 40, // Add bottom padding
  },
  logo: {
    width: 150,
    height: 150,
    marginVertical: 20,
    borderWidth: 2, // Add outline
    borderColor: '#4B3D3D', // Dark Brown color for outline
    borderRadius: 75, // Make the outline circular
    padding: 5, // Space between logo and outline
  },
  welcomeText: {
    bottom:200,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown text color
    marginBottom: 20,
    textAlign: 'center', // Center the text
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons side by side
    justifyContent: 'space-between',
    width: '80%', // Width of the container
  },
  button: {
    backgroundColor: '#FFA500', // Warm Orange primary color
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50, // Circular button
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, // Space between buttons
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: '#FFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#FF6F61', // Coral color for the create account button
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50, // Circular button
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10, // Space between buttons
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  createAccountText: {
    color: '#FFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IndexScreen;
