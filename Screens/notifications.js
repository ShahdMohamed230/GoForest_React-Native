import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const NotificationsScreen = () => {

// Dummy data for notifications
const notificationsData = [
{
id: '1',
title: 'New mission unlocked!',
message: 'Complete the "Plant a Tree" mission to earn points and help the environment!',
time: '2 hours ago'
},
{
id: '2',
title: 'Congratulations!',
message: 'You have earned 50 points for completing the "Reduce Plastic Use" mission!',
time: '4 hours ago'
},
{
id: '3',
title: 'New reward available!',
message: 'Redeem your points for a free eco-friendly water bottle!',
time: '1 day ago'
}
];

// Render method for individual notification item
const renderNotificationItem = ({ item }) => {
return (
<View style={styles.notificationItem}>
<View style={styles.notificationIconContainer}>
<Image source={require('../assets/icons/notification.png')} style={styles.notificationIcon} />
</View>
<View style={styles.notificationTextContainer}>
<Text style={styles.notificationTitle}>{item.title}</Text>
<Text style={styles.notificationMessage}>{item.message}</Text>
<Text style={styles.notificationTime}>{item.time}</Text>
</View>
</View>
);
};

return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Notifications</Text>
</View>
<FlatList
data={notificationsData}
renderItem={renderNotificationItem}
keyExtractor={item => item.id}
contentContainerStyle={styles.notificationsList}
showsVerticalScrollIndicator={false}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
backgroundColor: '#8DBF80',
paddingHorizontal: 20,
paddingVertical: 50,
alignItems: 'center',
},
headerTitle: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
notificationsList: {
paddingHorizontal: 20,
paddingBottom: 20,
},
notificationItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f2f2f2',
borderRadius: 10,
padding: 15,
marginBottom: 10,
},
notificationIconContainer: {
backgroundColor: '#8DBF80',
borderRadius: 25,
padding: 10,
marginRight: 10,
},
notificationIcon: {
height: 20,
width: 20,
resizeMode: 'contain',
},
notificationTextContainer: {
flex: 1,
},
notificationTitle: {
color: '#4A4A4A',
fontSize: 18,
fontWeight: 'bold',
},
notificationMessage: {
color: '#9B9B9B',
fontSize: 14,
marginBottom: 5,
},
notificationTime: {
color: '#9B9B9B',
fontSize: 12,
},
});

export default NotificationsScreen;