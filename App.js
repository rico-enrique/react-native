import React, { Component } from 'react';
import { Image, Text, View, TextInput, StyleSheet } from 'react-native'
import Laptop from './E210MA.jpg'

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 3,
        borderColor: 'red',
        marginTop: 20,
        marginLeft: 20,
      }}
      />

      <View style={{padding: 12, backgroundColor: '#F2F2F2', width: 212, borderRadius:8}}>
        <Image source={Laptop} style={{ width: 188, height: 107, borderRadius: 8 }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>Asus E210MA</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 14, color: '#F2994A' }}>Rp. 4.000.000,-</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>Sidoarjo</Text>
        <View style={{
          backgroundColor: '#6FCF97',
          paddingVertical: 6,
          borderRadius: 90,
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
          }}>BELI</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  },
});

const SampleComponent = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Milea />
      <Photo/>
      <Text>Mamank</Text>
      <Text>Ashiaap</Text>
      <TextInput style={{ borderWidth: 1 }} value={'Bissmillah '} />
      <BoxGreen />
      <Profile />
    </View>
  );
}

const Milea = () => {
  return <Text>Milea</Text>
}

const Photo = () => {
  return <Image
    source={{ uri: 'https://placeimg.com/100/100/tech' }}
    style={{ width: 100, height: 100 }}
  />
}

class BoxGreen extends Component {
  render() {
    return <Text> Ini Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return <View>
      <Image
        source={{ uri: 'https://placeimg.com/100/100/animals' }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{color: 'purple', fontSize: 24}}>Ini Kucing (60% pasti)</Text>
    </View>;
   
  }
}


export default App;