import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

const notificationsData = [
  { id: '1', friend: 'JJ Olatunji (KSI)', action: 'liked your photo', profileImage: require('../../assets/icons/p1.png') },
  { id: '2', friend: 'Elon Musk', action: 'commented on your post', profileImage: require('../../assets/icons/p2.png') },
  { id: '3', friend: 'Pete Davidson', action: 'started following you', profileImage: require('../../assets/icons/p3.png') },
  { id: '4', friend: 'Kevin Heart', action: 'liked your photo', profileImage: require('../../assets/icons/p4.png') },
  { id: '5', friend: 'Moe Lester', action: 'shared your post', profileImage: require('../../assets/icons/p5.png') },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.friendName}>{item.friend}</Text>
        <Text style={styles.actionText}>{item.action}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.notificationsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B3D3D', // Dark Brown title color
  },
  notificationsList: {
    paddingBottom: 60, // Space for the bottom
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray for separation
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4B3D3D', // Dark Brown for outline
  },
  notificationTextContainer: {
    marginLeft: 10,
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black for friend name
  },
  actionText: {
    fontSize: 14,
    color: '#666', // Gray for action text
  },
});

export default NotificationsScreen;
