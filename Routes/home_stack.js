import CalendarScreen from '../Screens/calendar.js';
import CameraScreen from '../Screens/camera.js';
import MainPageScreen from '../Screens/main_page.js';
import MapScreen from '../Screens/map.js';
import MissionScreen from '../Screens/mission.js';
import RegisterLoginScreen from '../Screens/register_login.js';
import RewardScreen from '../Screens/reward.js';
import notificationsData from '../Screens/notifications.js';
import ProfileScreen from '../Screens/profile.js';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen
name="signing"
component={RegisterLoginScreen}
/>
<Stack.Screen
name="reward"
component={RewardScreen}
/>
<Stack.Screen
name="notification"
component={notificationsData}
/>
<Stack.Screen
name="main"
component={MainPageScreen}
/>
<Stack.Screen
name="calendar"
component={CalendarScreen}
/>
<Stack.Screen
name="camera"
component={CameraScreen}
/>
<Stack.Screen
name="map"
component={MapScreen}
/>
<Stack.Screen
name="profile"
component={ProfileScreen}
/>
<Stack.Screen
name="mission"
component={MissionScreen}
/>
</Stack.Navigator>
</NavigationContainer>
);
}