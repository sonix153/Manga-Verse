import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FormField from '../components/formfield'; // Import the FormField component
import CustomButton from '../components/custombutton'; // Import the CustomButton

const SignupScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        Alert.alert(
          'Success',
          'You have successfully registered!',
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
        Alert.alert('Error', 'Passwords do not match.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const handleGoogleSignUp = () => {
    Alert.alert(
      'Success',
      'You have successfully registered with Google!',
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
      <Text style={styles.title}>Create an Account</Text>

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
      <FormField
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      {/* Sign Up Button */}
      <CustomButton title="Sign Up" onPress={handleSignUp} />

      {/* Google Sign-Up */}
      <TouchableOpacity 
        style={styles.googleButton} 
        onPress={handleGoogleSignUp}
      >
        <Image source={require('../../assets/icons/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Register with Google</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <TouchableOpacity 
        style={styles.createAccountContainer} 
        onPress={() => router.push('auth/login')}
      >
        <Text style={styles.createAccountText}>Already have an account? Log in</Text>
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
    borderColor: '#000000', // Black border for consistency
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

export default SignupScreen;
