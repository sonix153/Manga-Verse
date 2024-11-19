import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Sample data for online friends
const onlineFriends = [
  { id: '1', name: 'KSI', image: require('../../assets/icons/p1.png') },
  { id: '2', name: 'Elon', image: require('../../assets/icons/p2.png') },
  { id: '3', name: 'Pete', image: require('../../assets/icons/p3.png') },
  { id: '4', name: 'Kevin', image: require('../../assets/icons/p4.png') },
  { id: '5', name: 'The Me..', image: require('../../assets/icons/p5.png') },
  { id: '6', name: 'Megan', image: require('../../assets/icons/p6.png') },
];

// Sample data for messages with corresponding images
const messages = [
  { id: '1', friendName: 'KSI', message: 'From the Screen to the Ring, to the Pen to the KING...', image: require('../../assets/icons/p1.png'), unread: true },
  { id: '2', friendName: 'Elon Musk', message: 'Tagaan tika ug kwarta mego...', image: require('../../assets/icons/p2.png'), unread: false },
  { id: '3', friendName: 'Pete Davidson', message: 'HAHAHAHAHHAHAHAH...', image: require('../../assets/icons/p3.png'), unread: true },
  { id: '4', friendName: 'Kevin Hart', message: 'Naaah, dili man mi amego ni Didd...', image: require('../../assets/icons/p4.png'), unread: false },
  { id: '5', friendName: 'Homelander', message: 'Gara man ka part, sumbagay ta o...', image: require('../../assets/icons/p5.png'), unread: true },
  { id: '6', friendName: 'Megan Fox', message: 'Hi gwapo<3...', image: require('../../assets/icons/p6.png'), unread: false },
];

const ChatScreen = () => {
  const router = useRouter();

  const handleChatPress = (friendName) => {
    if (friendName === 'KSI') {
      router.push('/KSI'); // Navigate to KSI's chat screen
    } else {
      console.log(`Navigate to chat with ${friendName}`);
      // You can implement navigation for other friends here if needed
    }
  };

  return (
    <View style={styles.container}>
      {/* Online Friends Section */}
      <View style={styles.onlineFriendsContainer}>
        <Text style={styles.onlineFriendsTitle}>Online Friends</Text>
        <FlatList
          data={onlineFriends}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.friendContainer}>
              <Image source={item.image} style={styles.friendImage} />
              <View style={styles.onlineIndicator} />
              <Text style={styles.friendName}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Messages Section */}
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleChatPress(item.friendName)} style={styles.messageContainer}>
              <View style={styles.profileContainer}>
                <Image source={item.image} style={styles.profileImage} />
                <View style={styles.unreadIndicator(item.unread)} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.friendMessage}>{item.friendName}: </Text>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
    padding: 10,
  },
  onlineFriendsContainer: {
    marginBottom: 20,
  },
  onlineFriendsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown text color
    marginBottom: 10,
  },
  friendContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4B3D3D', // Dark Brown for outline
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 14,
    height: 14,
    borderRadius: 6,
    backgroundColor: 'green', // Green for online status
    borderWidth: 2,
    borderColor: '#FFF', // White for outline
    top:35,
  },
  friendName: {
    marginTop: 5,
    fontSize: 14,
    color: '#4B3D3D', // Dark Brown text color
  },
  messagesContainer: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#4B3D3D',
    borderWidth: 1,
  },
  profileContainer: {
    position: 'relative',
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
        borderColor: 'green', // Dark Brown for outline
  },
  unreadIndicator: (unread) => ({
    position: 'absolute',
    right: -2,
    top: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: unread ? 'red' : 'transparent', // Red for unread messages, transparent if read
  }),
  textContainer: {
    flex: 1,
  },
  friendMessage: {
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown text color
  },
  messageText: {
    color: '#4B3D3D', // Dark Brown text color
  },
});

export default ChatScreen;
