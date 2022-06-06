import React, {useContext, useEffect} from 'react';
import {View, ImageBackground, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, StatusBar} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { onBoardingData } from '../../constants/mockData';
import { hp, wp } from '../../util/dimension';
import OnboardingView from './components/OnboardingView';
import { colors } from '../../constants/colors';
import Button from '../../components/Button';
import { getFromStorage } from '../../util/storageUtil';
import { login } from '../../context/action';
import { AppContext } from '../../context/AppContext';

function OnBoarding({navigation}) {
  const onboardingRef = React.useRef(null);

  const {dispatch} = useContext(AppContext);

  useEffect(() => {
    getFromStorage('userData')
    .then(res => {
      if(res) {
        dispatch(login(JSON.parse(res)));
      }
    })
  }, []);
  return (
    // <SafeAreaView style={styles.main}>
      <ImageBackground source={require('../../assets/onboardingImage.png')} style={styles.main}>
        
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Cars Fault
        </Text>
        <Text style={styles.title}>
          Expert System
        </Text>
        <Text
          style={{color: colors.secondary, fontSize: wp(16), fontWeight: 'bold'}}>
            Diagonise your car issue, from expert system
        </Text>
      </View>
      {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          // source={require('../../assets/logo.png')}
          source={require('../../assets/onBoardingImg.png')}
          style={{width: wp(300), height: hp(260), resizeMode: 'contain'}}/>
      </View> */}
      <View style={styles.button}>
        <Button
          title={'Get Started'}
          borderRadius={99999}
          onPress={() => navigation.navigate('Login')} />
        <View style={{marginTop: hp(10)}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{color: colors.secondary, fontSize: wp(16), fontWeight: 'bold'}}>
                Don't have an account, sign up here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    // </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  main: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(75),
    width: wp(375),
  },
  title:{
    fontSize: wp(35),
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    width: wp(375),
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: hp(60),
  }
})

export default OnBoarding;