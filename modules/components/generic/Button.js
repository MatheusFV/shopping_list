import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


const Button = (props) => {

  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.container}>
      <Text style={buttonStyle.content}> {props.text} </Text>
    </TouchableOpacity>
  )
}


const buttonStyle = {
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#3b70cc',
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    elevation: 1
  },
  content:{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
  }
}

export default (Button)
