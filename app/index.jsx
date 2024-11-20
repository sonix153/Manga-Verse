import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logos.png')} style={styles.logo} />
      
      <Text style={styles.title}>MangaVerse</Text>
      <Text style={styles.slogan}>Your portal to read manga on the go!</Text>
      <Text style={styles.welcomeText}>Welcome!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('auth/login')}
        >
          <Text style={styles.buttonText}>Start Reading</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
    paddingBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#000000', // Black outline
    borderRadius: 100,
    padding: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333', // Dark gray for the title
    marginTop: -20,
  },
  slogan: {
    fontSize: 16,
    color: '#666666', // Lighter gray for the slogan
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444444', // Medium gray for welcome text
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50', // Green for "Start Reading"
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: '#FFFFFF', // White text for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#2196F3', // Blue for "Create Account"
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  createAccountText: {
    color: '#FFFFFF', // White text for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IndexScreen;
