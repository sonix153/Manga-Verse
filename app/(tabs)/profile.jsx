import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';  // Use next/router for Next.js navigation

const Profile = () => {
  // Sample data for the user profile and progress
  const user = {
    name: 'Carl Debson Monleon',
    email: 'carlmonleon@gmail.com',
    mangaRead: 80, // Number of manga the user has read
    totalMangaRequired: 100, // Number of manga required to reach the next rank
    likedMangas: [
      { title: 'Demon Slayer', image: require('../../assets/images/h1.jpg') },
      { title: 'Attack on Titan', image: require('../../assets/images/h2.jpg') },
      { title: 'Chansaw Man', image: require('../../assets/images/h3.jpg') },
      { title: 'Dragon Ball Super', image: require('../../assets/images/h4.jpg'), link: '/dbs' }, // Added link
      { title: 'Jujutsu Kaisen', image: require('../../assets/images/h5.jpg') },
    ], // Sample liked/bookmarked mangas with images
  };

  // Determine rank based on manga read
  const getRank = (mangaRead) => {
    if (mangaRead >= 100) return 'Manga Adept';
    if (mangaRead >= 50) return 'Manga Enthusiast';
    return 'Beginner';
  };

  const [numColumns, setNumColumns] = useState(2); // State for controlling number of columns

  // Using useRouter for navigation
  const router = useRouter();

  const navigateToManga = (link) => {
    router.push(link); // This will navigate to the `dbs.jsx` page
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          {/* Profile Picture */}
          <Image source={require('../../assets/icons/man.png')} style={styles.profileImage} />

          {/* User Information */}
          <View style={styles.userInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>

          {/* Rank and Progress */}
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>Rank: {getRank(user.mangaRead)}</Text>
            
            {/* Progress Bar (For visual purposes) */}
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>Read {user.mangaRead} of {user.totalMangaRequired} manga</Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.8}  // Static progress for visual effect
                color="#007BB5"
                style={styles.progressBar}
              />
              <Text style={styles.rankMessage}>Read {user.totalMangaRequired} to unlock "Manga Adept" rank!</Text>
            </View>
          </View>

          {/* Liked/Bookmarked Mangas */}
          <View style={styles.bookmarkedContainer}>
            <Text style={styles.bookmarkedTitle}>Liked/Bookmarked Mangas</Text>

            {/* FlatList for Timeline-like Grid */}
            <FlatList
              data={user.likedMangas}
              renderItem={({ item }) => (
                <View style={styles.mangaItem}>
                  <TouchableOpacity onPress={() => item.link && navigateToManga(item.link)}>
                    {/* Manga Cover Image */}
                    <Image source={item.image} style={styles.mangaImage} />
                    {/* Manga Title */}
                    <Text style={styles.mangaTitle}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns} // Two columns for the grid layout
              columnWrapperStyle={styles.columnWrapper} // Adds space between columns
              contentContainerStyle={styles.flatListContainer} // Adds padding to the entire FlatList
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Light cream background
  },
  scrollContainer: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular image
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  rankContainer: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007BB5', // Blue background for rank section
    borderRadius: 10,
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 5,
  },
  progressBar: {
    width: '90%',
    marginBottom: 10,
  },
  rankMessage: {
    fontSize: 14,
    color: '#FFF',
    fontStyle: 'italic',
  },
  bookmarkedContainer: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#f0f8ff', // Light blue background for the bookmarked section
    borderRadius: 10,
    padding: 15,
  },
  bookmarkedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  mangaItem: {
    marginBottom: 15,
    width: '48%', // Width for two columns
  },
  mangaImage: {
    width: '100%',
    height: 180, // Adjust height as necessary
    borderRadius: 8, // Rounded corners for images
  },
  mangaTitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
});
