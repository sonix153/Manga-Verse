import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from 'react-native';

const KSIChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: '1', sender: 'KSI', text: 'Muskwela ka karon bai?', isSent: false },
    { id: '2', sender: 'You', text: 'Oo, ngano man?', isSent: true },
    { id: '3', sender: 'KSI', text: 'Ako dili', isSent: false },
    { id: '4', sender: 'You', text: 'Kinsa?', isSent: true },
    { id: '5', sender: 'KSI', text: 'Ako, kinsa ba diay?', isSent: false },
    { id: '6', sender: 'You', text: 'Kinsa nangutana', isSent: true },
    { id: '7', sender: 'KSI', image: require('../assets/icons/p7.png'), isSent: false }, // KSI sends an image
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: String(chatMessages.length + 1),
        sender: 'You',
        text: message,
        isSent: true,
      };
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer(item.isSent)}>
      {!item.isSent && <Image source={require('../assets/icons/p1.png')} style={styles.profilePicture} />}
      {item.image ? ( // Check if the message is an image
        <Image source={item.image} style={styles.imageMessage} />
      ) : (
        <View style={item.isSent ? styles.sentMessage : styles.receivedMessage}>
          <Text style={item.isSent ? styles.sentText : styles.receivedText}>{item.text}</Text>
        </View>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../assets/icons/p1.png')} style={styles.profilePicture} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerName}>KSI</Text>
            <Text style={styles.headerStatus}>Online</Text>
          </View>
        </View>
      </View>

      {/* Messages Section */}
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
  },
  header: {
    backgroundColor: '#4B3D3D', // Dark Brown for header background
    padding: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFF', // White for outline
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // White text color for header
  },
  headerStatus: {
    fontSize: 14,
    color: '#FFF', // White text color for header
  },
  messagesContainer: {
    paddingBottom: 60, // Space for the input area
    backgroundColor: '#FFFDD0', // Maintain cream background for messages
  },
  messageContainer: (isSent) => ({
    flexDirection: 'row', // Align profile picture and message
    alignItems: 'flex-end', // Align items at the bottom
    padding: 10,
    marginVertical: 5,
    maxWidth: '75%',
    alignSelf: isSent ? 'flex-end' : 'flex-start', // Align messages to the right for sent and left for received
  }),
  sentMessage: {
    backgroundColor: '#D1E7DD', // Light green for sent messages
    borderRadius: 10,
    padding: 10,
    marginLeft: 10, // Space between profile picture and message
  },
  receivedMessage: {
    backgroundColor: '#F8D7DA', // Light pink for received messages
    borderRadius: 10,
    padding: 10,
    marginLeft: 10, // Space between profile picture and message
  },
  sentText: {
    color: '#000',
  },
  receivedText: {
    color: '#000',
  },
  imageMessage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#4B3D3D', // Dark Brown for the border
    padding: 10,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4B3D3D', // Dark Brown for the outline
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4B3D3D', // Dark Brown for the send button
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default KSIChatScreen;
