import React from 'react';
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
} from 'react-native';

const MissionScreen = ({ navigation }) => {

const handleBackButtonPress = () => {
// code to handle back button press
}

const handleStartMissionPress = (missionTitle) => {
// code to handle start mission button press
navigation.navigate('camera');
}

const handleFilterButtonPress = () => {
// code to handle filter button press
console.log('Filter button is pressed!');
}

return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
<Image
source={require('../assets/icons/arrow-left.png')}
style={styles.backButtonIcon}
/>
</TouchableOpacity>
<Text style={styles.headerTitle}>Missions</Text>
<TouchableOpacity style={styles.filterButton} onPress={handleFilterButtonPress}>
<Image
source={require('../assets/icons/filter.png')}
style={styles.filterButtonIcon}
/>
</TouchableOpacity>
</View>
<View style={styles.missionList}>
<View style={styles.missionItem}>
<Image
source={require('../assets/images/mission1.png')}
style={styles.missionItemImage}
/>
<View style={styles.missionItemTextContainer}>
<Text style={styles.missionItemTitle}>Plant a Tree</Text>
<Text style={styles.missionItemSubtitle}>
Help reduce your carbon footprint
</Text>
<Text style={styles.missionItemReward}>+1000 points</Text>
</View>
<TouchableOpacity style={styles.missionButton} onPress={() => handleStartMissionPress('Plant a Tree')}>
<Text style={styles.missionButtonText}>Start</Text>
</TouchableOpacity>
</View>
<View style={styles.missionItem}>
<Image
source={require('../assets/images/mission2.png')}
style={styles.missionItemImage}
/>
<View style={styles.missionItemTextContainer}>
<Text style={styles.missionItemTitle}>Water a Tree</Text>
<Text style={styles.missionItemSubtitle}>
Help protect marine life
</Text>
<Text style={styles.missionItemReward}>+500 points</Text>
</View>
<TouchableOpacity style={styles.missionButton} onPress={() => handleStartMissionPress('Water a Tree')}>
<Text style={styles.missionButtonText}>Start</Text>
</TouchableOpacity>
</View>
<View style={styles.missionItem}>
<Image
source={require('../assets/images/mission3.png')}
style={styles.missionItemImage}
/>
<View style={styles.missionItemTextContainer}>
<Text style={styles.missionItemTitle}>Fertalize a Tree</Text>
<Text style={styles.missionItemSubtitle}>
Help reduce greenhouse gas emissions
</Text>
<Text style={styles.missionItemReward}>+750 points</Text>
</View>
<TouchableOpacity style={styles.missionButton} onPress={() => handleStartMissionPress('Fertilize a Tree')}>
<Text style={styles.missionButtonText}>Start</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 50,
paddingBottom: 10,
borderBottomWidth: 1,
borderBottomColor: '#DDDDDD',
},
backButton: {
padding: 10,
},
backButtonIcon: {
height: 20,
width: 20,
resizeMode: 'contain',
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
flex: 1,
textAlign: 'center',
},
filterButton: {
padding: 10,
},
filterButtonIcon: {
height: 20,
width: 20,
resizeMode: 'contain',
},
missionList: {
paddingHorizontal: 20,
paddingTop: 20,
},
missionItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F6F6F6',
borderRadius: 10,
padding: 20,
marginBottom: 20,
},
missionItemImage: {
width: 80,
height: 80,
marginRight: 16,
},
missionItemTextContainer: {
flex: 1,
},
missionItemTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 4,
},
missionItemSubtitle: {
fontSize: 14,
color: '#8B8B8B',
marginBottom: 4,
},
missionItemReward: {
fontSize: 14,
fontWeight: 'bold',
},
missionButton: {
backgroundColor: '#8DBF80',
borderRadius: 10,
paddingVertical: 10,
paddingHorizontal: 20,
},
missionButtonText: {
color:'#FFFFFF',
fontWeight: 'bold',
fontSize: 16,
},
});

export default MissionScreen;