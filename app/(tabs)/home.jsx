import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require('../../assets/icons/logos.png')} // Logo image
          style={styles.logo}
        />
        <Text style={styles.title}>MangaVerse</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome, Carl Debson!</Text>

        {/* Discover Section */}
        <Text style={styles.sectionTitle}>Discover</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Image source={require('../../assets/images/m1.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m2.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m3.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m4.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m5.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m6.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m7.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/m8.jpg')} style={styles.image} />
        </ScrollView>

        {/* What's Hot Section */}
        <Text style={styles.sectionTitle}>What's Hot</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Image source={require('../../assets/images/h1.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h2.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h3.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h4.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h5.jpg')} style={styles.image} />
        </ScrollView>

        {/* New Releases Section */}
        <Text style={styles.sectionTitle}>New Releases</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Image source={require('../../assets/images/n1.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/n2.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/n3.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/n4.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/n5.jpg')} style={styles.image} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background
  },
  topBar: {
    backgroundColor: '#007BB5', // Blue color for the top bar
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'flex-start', // Align items to the left (logo first, then title)
  },
  
  logo: {
    width: 120, // Increased size for the logo
    height: 120, // Increased size for the logo
    marginRight: 15, // Space between logo and title
  },
  
  title: {
    fontSize: 32, // Slightly bigger font size for more emphasis
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10, // Adds a little space between the logo and the title
    letterSpacing: 1, // Adds space between letters for a cleaner look
    textTransform: 'uppercase', // Makes the title uppercase for emphasis
  },
  
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Light gray background for scrollable sections
    borderRadius: 10,
    paddingLeft: 10,
  },
  image: {
    width: 150,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
});
