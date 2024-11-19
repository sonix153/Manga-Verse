import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const postsData = [
  {
    id: '1',
    profileImage: require('../../assets/icons/p1.png'),
    postImage: require('../../assets/icons/post1.png'),
    name: 'KSI',
    caption: 'Sheeshable man ang dagat mga badi',
  },
  {
    id: '2',
    profileImage: require('../../assets/icons/p2.png'),
    postImage: require('../../assets/icons/post2.png'),
    name: 'Elon Musk',
    caption: 'Mangita mo nako, naa rakos bukid nangluod',
  },
  {
    id: '3',
    profileImage: require('../../assets/icons/p3.png'),
    postImage: require('../../assets/icons/post3.png'),
    name: 'Pete Davidson',
    caption: 'Enjoy the beach sa ba ginagmay dinagko',
  },
  {
    id: '4',
    profileImage: require('../../assets/icons/p4.png'),
    postImage: require('../../assets/icons/post3.png'),
    name: 'Kevin Hart',
    caption: 'suon suon man nuon si Pete nako ug post',
  },
  {
    id: '5',
    profileImage: require('../../assets/icons/p5.png'),
    postImage: require('../../assets/icons/post4.png'),
    name: 'Homie Landers',
    caption: 'Tago tago sako sa bukids para cool kids',
  },
];

const HomeScreen = () => {
  const router = useRouter(); // Initialize router

  const handleProfilePress = (name) => {
    if (name === 'KSI') {
      router.push('/kprof'); // Navigate to kprof.jsx using expo-router
    }
    // Additional conditions can be added for other profiles if necessary
  };
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => handleProfilePress(item.name)}>
        <Image source={item.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>{item.name}</Text>
      </View>
      <Text style={styles.caption}>{item.caption}</Text>
      <Image source={item.postImage} style={styles.postImage} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton}>
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/icons/logos.png')} style={styles.logo} />
        <Text style={styles.welcomeMessage}>Welcome to Chromashare, Alfred</Text>
      </View>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.postsContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFDD0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray for separation
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3D3D', // Dark Brown for welcome message
    textAlign: 'center',
  },
  postsContainer: {
    padding: 10,
  },
  postContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Slightly increased elevation for a more prominent shadow
    padding: 15,
    shadowColor: '#000', // Added shadow for better depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: '#4B3D3D',
    fontSize: 16, // Slightly increased font size
  },
  caption: {
    fontSize: 15,
    color: '#333', // Darker color for better readability
    marginBottom: 5,
    fontStyle: 'italic', // Italic style for captions
  },
  postImage: {
    width: '100%',
    height: 250, // Adjusted height for better aspect ratio
    borderRadius: 10,
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeButton: {
    backgroundColor: '#007BB5',
    borderRadius: 5,
    padding: 10,
    elevation: 1,
  },
  commentButton: {
    backgroundColor: '#4B3D3D',
    borderRadius: 5,
    padding: 10,
    elevation: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
