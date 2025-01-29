import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Colors, images, SIZES} from '@/constants';
import { StatusBar } from 'expo-status-bar';
import { SvgUri } from 'react-native-svg';

export default function Home() {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden/>
      <View style={styles.container}>
        <SvgUri
          uri={images.secureLogin}
          style={styles.secureLogin}
        />

        <View>
          <Text>Enter Your Phone Number</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    backgroundColor: Colors.white,

  },
  container:{
    flex:1,
    backgroundColor: Colors.white,
    padding: 16,
    alignItems: 'center'
  },
  secureLogin:{
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    marginBottom: 16,
  }
})