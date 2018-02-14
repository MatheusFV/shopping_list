import React, { Component } from 'react'
import { View, Image } from 'react-native'
import axios from 'axios'
import AlbumCell from './AlbumCell'

class Msg extends Component {

  render(){
    return (
      <View style={imageStyle.container}>
        <Image
          source={{uri: 'https://static.mundodasmensagens.com/upload/textos/m/e/meu-coracao-e-totalmente-seu-e-as-vezes-parece-pequeno-demais-par-N2qbd-cxl.jpg'}}
          style={imageStyle.content}
        />
      </View>
    )
  }
}

const imageStyle = {
  container:{
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    flex: 1
  },
  content:{
    height:300,
  }
}

export default (Msg)
