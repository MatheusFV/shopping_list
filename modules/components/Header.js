import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const headerStyle = StyleSheet.create({
  container:{
    backgroundColor: '#3b70cc',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 25,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 1
  },
  content:{
    fontSize: 20,
    color: '#fff',
  }
})


const Header = (props) => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.content}> {props.text} </Text>
    </View>
  )
}

export default (Header)
