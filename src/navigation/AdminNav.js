import React from 'react';
import {Platform, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AdminHome,
  AdminList,
  StudentList,
  TeacherList,
} from '../screens';
import { colors } from '../constants/colors';


const AdminStack = createStackNavigator();

export default function AdminNav() {
  return (
    <AdminStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.mainBg
        }
      }}>
        <AdminStack.Screen component={AdminHome} name={'AdminHome'} />
    </AdminStack.Navigator>
  );
}
