import { View, Text } from 'react-native'
import React from 'react'
import { LocalSvg } from 'react-native-svg';

// const { width : SCREEN_WIDTH } = Dimensions.get('window');



const Loading = () => {
  return (
    <View style={{display:'flex', flex:1, alignItems:'center', justifyContent:'center'}}>
            <LocalSvg height={200} asset={require("../../assets/searchpage.svg")}  />

    </View>
  )
}

export default Loading