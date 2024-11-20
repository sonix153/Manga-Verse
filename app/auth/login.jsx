import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FormField from '../components/formfield'; // Import the FormField component
import CustomButton from '../components/custombutton'; // Import the CustomButton

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert(
        'Success',
        'Welcome to MangaVerse!',
        [
          {
            text: 'OK',
            onPress: () => {
              router.push('/home'); // Redirect to home screen
            },
          },
        ]
      );
    } else {
      Alert.alert('Error', 'Please fill in both fields.');
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert(
      'Success',
      'Logged in with Google!',
      [
        {
          text: 'OK',
          onPress: () => {
            router.push('/home');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/logos.png')} style={styles.logo} />
      <Text style={styles.title}>Login to MangaVerse</Text>

      {/* Form Fields */}
      <FormField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <FormField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Login Button */}
      <CustomButton title="Log In" onPress={handleLogin} />

      {/* Google Sign-In */}
      <TouchableOpacity 
        style={styles.googleButton} 
        onPress={handleGoogleSignIn}
      >
        <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity 
        style={styles.createAccountContainer} 
        onPress={() => router.push('auth/signup')}
      >
        <Text style={styles.createAccountText}>Don't have an account? Create one!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background for consistency
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000000', // Black border for a consistent look
    borderRadius: 75,
    padding: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333', // Dark gray title text
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#2196F3', // Blue for Google sign-in button
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
  },
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountText: {
    color: '#8B0000', // Dark red text for consistency
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
