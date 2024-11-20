import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const Notif = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Manga Notifications</Text>
      </View>

      {/* Notification List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Notification Items */}
        <View style={styles.notification}>
          <View style={styles.unreadIndicator} />
          <Text style={styles.notificationText}>
            <Text style={styles.boldText}>Continue reading "Naruto"</Text> - Your next chapter is waiting!
          </Text>
        </View>
        <View style={styles.notification}>
          <View style={styles.unreadIndicator} />
          <Text style={styles.notificationText}>
            <Text style={styles.boldText}>A new chapter has released for "One Punch Man"!</Text> Check it out now!
          </Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            <Text style={styles.boldText}> "Attack on Titan"</Text> is updated with an exciting new chapter! Don't miss it!
          </Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            <Text style={styles.boldText}> "Demon Slayer"</Text> is back with an all-new thrilling chapter!
          </Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Your bookmarked manga <Text style={styles.boldText}> "My Hero Academia"</Text> has a new chapter!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Light cream background for readability
  },
  topBar: {
    backgroundColor: '#007BB5', // Blue color for the top bar
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  notification: {
    backgroundColor: '#FFF', // White background for notifications
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow effect
    flexDirection: 'row', // Align the indicator and text horizontally
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF0000', // Red dot to indicate unread
    marginRight: 10, // Space between the dot and the text
  },
});
