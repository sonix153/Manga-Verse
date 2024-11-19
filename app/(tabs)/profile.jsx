import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

const postsData = [
  { id: '1', image: require('../../assets/icons/post1.png') },
  { id: '2', image: require('../../assets/icons/post2.png') },
  { id: '3', image: require('../../assets/icons/post3.png') },
  { id: '4', image: require('../../assets/icons/post4.png') },
  { id: '5', image: require('../../assets/icons/post5.png') },
  { id: '6', image: require('../../assets/icons/post6.png') },
  // Add more posts if needed
];

const followersData = [
  { id: '1', image: require('../../assets/icons/p1.png'), name: 'KSI' },
  { id: '2', image: require('../../assets/icons/p2.png'), name: 'Elon Musk' },
  { id: '3', image: require('../../assets/icons/p3.png'), name: 'Pete Davidson' },
];

const followingData = [
  { id: '1', image: require('../../assets/icons/p4.png'), name: 'Kevin Hart' },
  { id: '2', image: require('../../assets/icons/p5.png'), name: 'Moe Lester' },
  { id: '3', image: require('../../assets/icons/p6.png'), name: 'Megan Fox' },
];

const ProfileScreen = () => {
  const [isFollowersModalVisible, setFollowersModalVisible] = useState(false);
  const [isFollowingModalVisible, setFollowingModalVisible] = useState(false);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item.image} style={styles.postImage} />
    </View>
  );

  const renderProfile = ({ item }) => (
    <View style={styles.profileItem}>
      <Image source={item.image} style={styles.profileImage} />
      <Text style={styles.profileName}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/icons/man.png')} style={styles.profilePicture} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Alfred Barreda</Text>
          <Text style={styles.userBio}>Student | Gwapo</Text>
          <View style={styles.followInfo}>
            <TouchableOpacity style={styles.followButton} onPress={() => setFollowersModalVisible(true)}>
              <Text style={styles.followButtonText}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followButton} onPress={() => setFollowingModalVisible(true)}>
              <Text style={styles.followButtonText}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Posts Section */}
      <Text style={styles.postsTitle}>Posts</Text>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        numColumns={3}
        contentContainerStyle={styles.postsContainer}
      />

      {/* Followers Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFollowersModalVisible}
        onRequestClose={() => setFollowersModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Followers</Text>
            <FlatList
              data={followersData}
              keyExtractor={(item) => item.id}
              renderItem={renderProfile}
              contentContainerStyle={styles.modalList}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setFollowersModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Following Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFollowingModalVisible}
        onRequestClose={() => setFollowingModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Following</Text>
            <FlatList
              data={followingData}
              keyExtractor={(item) => item.id}
              renderItem={renderProfile}
              contentContainerStyle={styles.modalList}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setFollowingModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray for separation
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4B3D3D', // Dark Brown for outline
    marginBottom: 10,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown for username
  },
  userBio: {
    fontSize: 16,
    color: '#666', // Gray for bio
    textAlign: 'center',
    marginBottom: 10,
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 15,
    right:15,
  },
  followButton: {
    backgroundColor: '#4B3D3D', // Dark Brown for buttons
    borderRadius: 5,
    padding: 10,
  },
  followButtonText: {
    color: '#FFF', // White text for buttons
    fontWeight: 'bold',
  },
  postsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown for title
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  postsContainer: {
    padding: 5, // Padding around the posts
  },
  postContainer: {
    flex: 1,
    margin: 2, // Small margin between posts
  },
  postImage: {
    width: '100%',
    height: 120, // Adjust height as needed
    borderRadius: 5,
    borderColor: '#ddd', // Light gray border
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2, // Elevation for Android
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown for title
    marginBottom: 15,
    textAlign: 'center',
  },
  modalList: {
    paddingBottom: 20,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#4B3D3D',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#4B3D3D',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
