import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AssesmentScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SplashScreen,
} from '../Screens';
import {COLORS} from '../Assets';
import HistoryScreen from '../Screens/HistoryScreen/HistoryScreen';
import QRCodeScreen from '../Screens/QRCodeScreen/QRCodeScreen';
import IonIcon from '../Components/IonIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? size + 5 : size;
          } else if (route.name === 'History') {
            iconName = focused ? 'stopwatch' : 'stopwatch-outline';
            size = focused ? size + 5 : size;
          } else if (route.name === 'QrCode') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
            size = focused ? size + 5 : size;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? size + 5 : size;
          }

          return <IonIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 14,
        },
        tabBarStyle: {
          padding: 5,
          height: 60,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="QrCode" component={QRCodeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          statusBarStyle: 'light',
          statusBarColor: COLORS.primary,
        }}
      />
      <Stack.Screen
        name="Assesment"
        component={AssesmentScreen}
        options={{
          headerShown: false,
          statusBarStyle: 'dark',
          statusBarColor: COLORS.backgroundWhite,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          statusBarStyle: 'light',
          statusBarColor: COLORS.primary,
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
          statusBarStyle: 'dark',
          statusBarColor: COLORS.backgroundWhite,
          contentStyle: {
            backgroundColor: COLORS.backgroundWhite,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
