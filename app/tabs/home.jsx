import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center bg-sky-500 items-center text-center">
      <View className="absolute top-0 left-0 right-0 p-4 items-center text-center">
      <Text className="text-2xl font-rbold to-slate-700">Welcome</Text>
      <Text className="text-1xl font-rbold to-slate-700">to</Text>
      <Text className="text-3xl font-rbold to-slate-700">QuickBooks</Text>
      </View>
      <Link href="/profile" className="font-medium text-3xl">Profile</Link>
      <Link href="/books" className="font-medium text-3xl">Browse Books</Link>
    </View>

   
  );
}

    