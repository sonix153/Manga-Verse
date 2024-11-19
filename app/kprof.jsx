import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const KProfileScreen = () => {
  const router = useRouter(); // Initialize router

  // Sample data for KSI's profile
  const profileData = {
    name: 'KSI',
    profileImage: require('../assets/icons/p1.png'), // Profile picture
    followers: 50, // Example number of followers
    following: 567, // Example number of following
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>{profileData.name}</Text>
        <Text style={styles.subtitle}>This user has not posted.</Text>
      </View>

      {/* Follow Counts */}
      <View style={styles.followCounts}>
        <Text style={styles.followersText}>{profileData.followers} Followers</Text>
        <Text style={styles.followingText}>{profileData.following} Following</Text>
      </View>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Message Button */}
        <TouchableOpacity style={styles.messageButton} onPress={() => router.push('/KSI')}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        {/* Follow Button */}
        <TouchableOpacity style={styles.followButton} onPress={() => console.log('Follow button pressed')}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* No Posts Section */}
      <View style={styles.noPostsContainer}>
        <Text style={styles.noPostsText}>This user has not posted any pictures on their timeline.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFDD0', // Cream background color
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4B3D3D', // Dark Brown for outline
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown for username
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Gray for subtitle
    marginTop: 5,
    fontStyle: 'italic', // Italic style for subtitle
  },
  followCounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  followersText: {
    fontSize: 18,
    color: '#4B3D3D', // Dark Brown for followers count
  },
  followingText: {
    fontSize: 18,
    color: '#4B3D3D', // Dark Brown for following count
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20, // Spacing between buttons and no posts text
  },
  messageButton: {
    backgroundColor: '#007BB5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    flex: 1, // Take equal space
    marginRight: 10, // Space between buttons
  },
  followButton: {
    backgroundColor: '#28a745', // Green color for Follow button
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    flex: 1, // Take equal space
  },
  noPostsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  noPostsText: {
    fontSize: 16,
    color: '#666', // Gray for no posts text
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default KProfileScreen;
