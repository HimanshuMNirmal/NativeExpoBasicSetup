import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View className='d-flex flex-1 items-center justify-center bg-white'>
      <Text className='text-blue-700 font-pblack'>Aora</Text>
      <StatusBar style='auto'/>
      <Link href='/Home' style={{color: 'blue'}}>Go To Home</Link>
    </View>
  )
}

export default index
