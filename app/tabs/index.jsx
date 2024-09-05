import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


export default function App() {
  return (
    <View className="flex-1 justify-center bg-blue-300 items-center text-center">
      <View className="absolute top-10 left-0 right-0 p-4 items-center text-center">
      <Text className="text-5xl font-rbold to-slate-700">QuickBooks</Text>
      </View>
      <View className="top-10 left-0 right-0 p-4 items-center text-center">
      <Link href="/login" className="font-rbold text-2xl p-1">Log in</Link>
      <View className="top-10 left-0 right-0 p-4 items-center text-center"></View>
      <Link href="/signup" className="font-rbold text-2xl">Sign up</Link>
      </View>
    </View>

   
  );
}

    