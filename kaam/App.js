import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const App = () => {
  return (
        <ImageBackground
          source={{uri: 'loginbackground'}}
          style={{ flex: 1,
          resizeMode: "cover",
          justifyContent: "center" }}
        >
        <Image source={{uri: 'logo'}}
               style={styles.bottomView}
        />
        </ImageBackground>
  );
}
const styles = StyleSheet.create({

  bottomView: {
    width: win.width/4,
    height: win.width/4,
    position: 'absolute',
    top: win.height/10,
    left: win.width/2-win.width/8,
  },
});

export default App;
