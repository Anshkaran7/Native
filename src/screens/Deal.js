import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Deal = () => {
  return (
    <SafeAreaView style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
      <Text style={{color:'black', fontSize:16}}>Deals</Text>
    </SafeAreaView>
  )
}

export default Deal