import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CalendarScreen from '../Screens/calendar.js';
import CameraScreen from '../Screens/camera.js';
import MainPageScreen from '../Screens/main_page.js';
import MapScreen from '../Screens/map.js';
import MissionScreen from '../Screens/mission.js';
import RegisterLoginScreen from '../Screens/register_login.js';
import RewardScreen from '../Screens/reward.js';
import notificationsData from '../Screens/notifications.js';
import ProfileScreen from '../Screens/profile.js';

const Drawer = createDrawerNavigator();

const Slidemenu = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen
                name="signing"
                component={RegisterLoginScreen}
            />
            <Drawer.Screen
                name="reward"
                component={RewardScreen}
            />
            <Drawer.Screen
                name="notification"
                component={notificationsData}
            />
            <Drawer.Screen
                name="main"
                component={MainPageScreen}
            />
            <Drawer.Screen
                name="calendar"
                component={CalendarScreen}
            />
            <Drawer.Screen
                name="camera"
                component={CameraScreen}
            />
            <Drawer.Screen
                name="map"
                component={MapScreen}
            />
            <Drawer.Screen
                name="profile"
                component={ProfileScreen}
            />
            <Drawer.Screen
                name="mission"
                component={MissionScreen}
            />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Slidemenu;