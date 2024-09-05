import { View, Text,  } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={tw`flex-1 bg-blue-300 rounded-lg p-6 shadow-lg`}>
      <View style={tw`flex-1 justify-center items-center mb-6`}>
        <Text style={tw`text-3xl font-extrabold text-white`}>Profile</Text>
      </View>
      <View style={tw`flex flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold text-blue-100`}>Name:</Text>
        <Text style={tw`text-lg font-semibold text-white`}>John Louise Bergabena</Text>
      </View>
      <View style={tw`flex flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold text-blue-100`}>Year:</Text>
        <Text style={tw`text-lg font-semibold text-white`}>3rd Year</Text>
      </View>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Text style={tw`text-lg font-semibold text-blue-100`}>Course:</Text>
        <Text style={tw`text-lg font-semibold text-white`}>BSIT</Text>
      </View>
    </View>
  )
}

export default profile