import React, {useContext} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../util/dimension';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppContext } from '../../context/AppContext';
import ActionCards from './components/ActionCards';
import { generateColor } from '../../util/randomColor';
import ImageView from '../../components/ImageView';
import { deleteFromStorage } from '../../util/storageUtil';
import { logout } from '../../context/action';

function AdminHome ({navigation}) {
  const {state, dispatch} = useContext(AppContext);

  const handleLogOut = () => {
    deleteFromStorage('userData')
      .then((response) => {
        dispatch(logout())
        // dispatch(resetState())
      })
  }

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          {/* <ImageView
            image={{uri: 'https://randomuser.me/api/portraits/women/8.jpg'}}
            width={wp(55)}
            height={wp(55)}
            /> */}
          <View style={styles.userInfoContainer}>
            <Text style={styles.name}>{state.user.firstName} {state.user.lastName}</Text>
            {/* <Text style={styles.description}>{state.user.role}</Text> */}
          </View>
          <TouchableOpacity onPress={handleLogOut}>
            <View  style={styles.iconContainer}>
              <Ionicons name={'log-out-outline'} size={wp(20)} color={colors.secondaryDarker} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            Total number of diagnosis done
          </Text>
          <Text style={styles.infoValue}>
            15
          </Text>
        </View>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Actions</Text>
        </View>
        <View style={{
          paddingBottom: hp(20),
          // flexWrap: 'wrap',
          // flexDirection: 'row',
          // justifyContent: 'space-between'
        }}>
          <ActionCards
            marginTop={hp(15)}
            onPress={() => navigation.navigate('Daignose')}
            title={'New Diagonosis'}
            value={'New diagnosis'}
            iconName={'settings-outline'}
          />
          {/* <ActionCards
            color={colors.secondaryDarker}
            marginTop={hp(15)}
            onPress={() => navigation.navigate('StudentList')}
            title={'Students'}
            value={40}
          /> */}
          <ActionCards
            color={'#3d164d'}
            marginTop={hp(15)}
            onPress={() => navigation.navigate('PreviousDiagnosis')}
            title={'Previous Diagnosis'}
            value={15}
          />
          {/* <ActionCards
            color={'#a14556'}
            marginTop={hp(20)}
            onPress={() => navigation.navigate('TeacherList')}
            title={'Teachers'}
            value={40}
          />
          <ActionCards
            color={'#2a6aec'}
            marginTop={hp(20)}
            onPress={() => navigation.navigate('SubjectByClassesList')}
            title={'Subjects'}
            value={40}
          /> */}
          {/* <ActionCards
            color={generateColor()}
            marginTop={hp(25)}
            title={'Payments'}
            value={40}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: wp(20),
  },
  header: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flex: 1,
    // marginLeft: wp(10)
  },
  name: {
    fontSize: wp(20),
    fontWeight: '500',
    color: colors.primary
  },
  description: {
    fontSize: wp(16),
    textTransform: 'capitalize',
    fontWeight: '300',
    color: colors.secondaryDarker
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(35),
    height: wp(35),
    borderRadius: 7,
    backgroundColor: colors.secondaryLighter + '30',
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: hp(20),
    paddingVertical: hp(22),
    borderRadius: wp(10),
    backgroundColor: colors.primary + '10',
  },
  infoTitle: {
    fontSize: wp(16),
    fontWeight: '300',
    color: colors.secondary,
  },
  infoValue: {
    fontSize: wp(35),
    fontWeight: '700',
    marginTop: hp(10),
    color: colors.primary,
  },
  sectionTitleContainer: {
    marginTop: hp(25),
  },
  sectionTitle: {
    fontSize: wp(22),
    fontWeight: '700',
    color: colors.primary
  },
})

export default AdminHome;