import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {

const handleLogoutButtonPress = () => {
// Function to be executed when logout button is pressed
console.log('Logout button pressed');
navigation.navigate('login'); // Navigate to login screen
}

return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>My Profile</Text>
</View>
<View style={styles.profileInfo}>
<View style={styles.profileItem}>
<Text style={styles.profileLabel}>Username:</Text>
<Text style={styles.profileValue}>@username</Text>
</View>
<View style={styles.profileItem}>
<Text style={styles.profileLabel}>Email:</Text>
<Text style={styles.profileValue}>johndoe@example.com</Text>
</View>
<View style={styles.profileItem}>
<Text style={styles.profileLabel}>Phone:</Text>
<Text style={styles.profileValue}>123-456-7890</Text>
</View>
</View>
<TouchableOpacity style={styles.logoutButton} onPress={handleLogoutButtonPress}>
<Text style={styles.logoutButtonText}>Log Out</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#8DBF80',
},
header: {
paddingTop: 50,
paddingBottom: 20,
alignItems: 'center',
},
headerTitle: {
color: '#fff',
fontSize: 36,
fontWeight: 'bold',
},
profileInfo: {
flex: 1,
backgroundColor: '#fff',
marginTop: 30,
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
paddingHorizontal: 20,
paddingVertical: 30,
},
profileItem: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 10,
},
profileLabel: {
color: '#4A4A4A',
fontSize: 18,
fontWeight: 'bold',
marginRight: 10,
},
profileValue: {
color: '#9B9B9B',
fontSize: 18,
},
logoutButton: {
backgroundColor: '#fff',
borderRadius: 30,
paddingVertical: 10,
paddingHorizontal: 20,
marginHorizontal: 20,
marginBottom: 20,
},
logoutButtonText: {
color: '#4A4A4A',
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});

export default ProfileScreen;