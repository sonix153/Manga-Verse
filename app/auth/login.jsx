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
        'You are now logged in!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Redirect to home screen after closing the popup
              router.push('/home');
            },
          },
        ]
      );
    } else {
      Alert.alert('Error', 'Please enter your email and password.');
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert(
      'Success',
      'You are now logged in with Google!',
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
      <Text style={styles.title}>Login to ChromaShare</Text>

      {/* Use FormField component for email and password inputs */}
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

      <CustomButton title="Log In" onPress={handleLogin} />

      <TouchableOpacity 
        style={styles.googleButton} 
        onPress={handleGoogleSignIn}
      >
        <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.createAccountContainer} 
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.createAccountText}>Don't have an account? Create one</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDD0',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4B3D3D',
    borderRadius: 75,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#4B3D3D',
    fontSize: 16,
  },
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountText: {
    color: '#4B3D3D',
    fontSize: 14,
  },
});

export default LoginScreen;
