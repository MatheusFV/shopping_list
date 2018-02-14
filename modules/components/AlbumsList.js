import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumCell from './AlbumCell'

class AlbumList extends Component {

  state = { albums: [] , loading: true}

  renderAlbums(){
    return this.state.albums.map(album => <AlbumCell key={album.title} album={album}/>)
  }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      this.setState({albums: response.data, loading: false})
    })
  }

  render(){
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default (AlbumList)
