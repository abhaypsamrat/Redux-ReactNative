import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Setting from './src/screen/Setting';
import Login from './src/screen/Login';

// Import Icons from React Native Vector Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Login') {
            iconName = 'login';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeTabs"
          component={BottomTabNavigator}
          options={{title: 'Welcome'}}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
