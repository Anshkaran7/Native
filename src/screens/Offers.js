import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Offers = () => {
  return (
    <SafeAreaView style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <Text style={{color:'black', fontSize:16}}>Offers</Text>
    </SafeAreaView>
  )
}

export default Offers