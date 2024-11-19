// components/CustomButton.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA500', // Warm Orange primary color
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50, // Circular button
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
