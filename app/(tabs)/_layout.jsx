import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const TabIcon = ({ icon, focused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tabIconContainer}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? '#00BFFF' : '#A9A9A9', // Lighter blue for focused, gray for unfocused
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const TabLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ tabBarStyle: styles.tabBar }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/home.png')} // Adjust the path
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="read"
          options={{
            title: 'Read',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/read.png')} // Adjust the path
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notif"
          options={{
            title: 'Notifications',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/notif.png')} // Adjust the path
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/profile.png')} // Adjust the path
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Keeping a clean white background for better contrast
  },
  tabBar: {
    backgroundColor: '#E0FFFF', // Light cyan background for a fresh look
    height: 70, // Increased height for better touch targets
    borderTopWidth: 1,
    borderTopColor: '#A9A9A9', // Light gray for a clean, modern edge
    shadowColor: '#00BFFF', // Blue shadow for a cooler effect
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Increased elevation for a more prominent navbar
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 30, // Rounded corners for a more modern feel
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
