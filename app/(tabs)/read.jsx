import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';

const Read = () => {
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
        {/* Continue Reading Section */}
        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/m1.jpg')} style={styles.image} />
            <Text style={styles.progressText}>40%</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/m2.jpg')} style={styles.image} />
            <Text style={styles.progressText}>60%</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/m3.jpg')} style={styles.image} />
            <Text style={styles.progressText}>75%</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/m4.jpg')} style={styles.image} />
            <Text style={styles.progressText}>25%</Text>
          </View>
        </ScrollView>

        {/* New Releases Section */}
        <Text style={styles.sectionTitle}>New Releases</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Image source={require('../../assets/images/h1.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h2.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h3.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h4.jpg')} style={styles.image} />
          <Image source={require('../../assets/images/h5.jpg')} style={styles.image} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Read;

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
    width: 90,
    height: 90,
    marginRight: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingLeft: 10,
  },
  imageContainer: {
    marginRight: 15,
    position: 'relative', // To position the progress text
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  progressText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 16, // Slightly larger for better visibility
    fontWeight: 'bold',
    color: '#FFF', // White text for contrast
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker semi-transparent background for better contrast
    paddingVertical: 8, // Increased padding for a more spacious look
    paddingHorizontal: 12, // Added horizontal padding
    borderRadius: 10, // Rounded corners for a softer look
    textAlign: 'center', // Center the text within the container
    minWidth: 60, // Ensures there is enough space for the text
    shadowColor: '#000', // Black shadow for better contrast
    shadowOffset: { width: 0, height: 2 }, // Slight shadow offset
    shadowOpacity: 0.6, // Moderate opacity for the shadow
    shadowRadius: 3, // Soft shadow blur
  },
  
});
