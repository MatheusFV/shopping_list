import React from 'react'
import { StyleSheet, Text, View, Image, Linking } from 'react-native'
import Card from './generic/Card'
import CardItem from './generic/CardItem'
import Button from './generic/Button'

const AlbumCell = ( {album} ) => {

  const { title, artist, thumbnail_image, image, url } = album

  return (
    <Card>
      <CardItem>
        <View style={thumbStyle.container}>
          <Image
            source={{uri: thumbnail_image}}
            style={thumbStyle.content}
          />
        </View>
        <View style={textStyle.container}>
          <Text style={textStyle.title}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <View style={imageStyle.container}>
          <Image
            source={{uri: image}}
            style={imageStyle.content}
          />
        </View>
      </CardItem>

      <CardItem>
        <Button text={'Buy Now'} onPress={() => Linking.openURL(url)}></Button>
      </CardItem>
    </Card>
  )
}

const textStyle = {
  container:{
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  title:{
    fontSize: 18
  }
}

const thumbStyle = {
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  content: {
    height: 50,
    width: 50,
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

export default (AlbumCell)
