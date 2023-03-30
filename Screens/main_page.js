import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MainPageScreen = ({ navigation }) => {

  const handleMenuButtonPress = () => {
    // Function to be executed when menu button is pressed
    console.log('Menu button pressed');
  }

  const handleNotificationButtonPress = () => {
    // Function to be executed when notification button is pressed
    navigation.navigate('notification');
  }

  const handleProfileButtonPress = () => {
    // Function to be executed when profile button is pressed
    navigation.navigate('profile');
  }

  const handleArrowButtonPress = () => {
    // Function to be executed when arrow button is pressed
    console.log('Arrow button pressed');
  }

  const handleMissionsButtonPress = () => {
    navigation.navigate('mission');
    console.log('Missions button pressed');
  }

  const handleRewardsButtonPress = () => {
    // Function to be executed when rewards button is pressed
    navigation.navigate('reward');
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuButtonPress}>
          <Image source={require('../assets/icons/menu.png')} style={styles.menuButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.menuTitle}>Go Forest</Text>
        <TouchableOpacity style={styles.menuButton} onPress={handleNotificationButtonPress}>
          <Image source={require('../assets/icons/notification.png')} style={styles.menuButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={handleProfileButtonPress}>
          <Image source={require('../assets/icons/profile.png')} style={styles.menuButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Go Forest</Text>
        <Text style={styles.headerSubtitle}>@username</Text>
        <View style={styles.headerIcons}>
          <View style={styles.headerIconContainer}>
            <Image source={require('../assets/icons/points.png')} style={styles.headerIcon} />
            <Text style={styles.headerIconText}>1000</Text>
          </View>
          <View style={styles.headerIconContainer}>
            <Image source={require('../assets/icons/experience.png')} style={styles.headerIcon} />
            <Text style={styles.headerIconText}>500</Text>
          </View>
          <View style={styles.headerIconContainer}>
            <Image source={require('../assets/icons/level.png')} style={styles.headerIcon} />
            <Text style={styles.headerIconText}>5</Text>
          </View>
        </View>
      </View>
      <View style={styles.dashboard}>
    <Text style={styles.dashboardTitle}>Dashboard</Text>
    <View style={styles.dashboardList}>
    <View style={styles.dashboardItem}>
    <Image source={require('../assets/images/plant.png')} style={styles.dashboardItemImage} />
    <View style={styles.dashboardItemTextContainer}>
    <Text style={styles.dashboardItemTitle}>Plant Name</Text>
    <Text style={styles.dashboardItemSubtitle}>Carbon Footprint: -15kg CO2</Text>
    <Text style={styles.dashboardItemSubtitle}>Climate Change: -10%</Text>
    </View>
    </View>
    <View style={styles.dashboardItem}>
    <Image source={require('../assets/images/plant.png')} style={styles.dashboardItemImage} />
    <View style={styles.dashboardItemTextContainer}>
    <Text style={styles.dashboardItemTitle}>Plant Name</Text>
    <Text style={styles.dashboardItemSubtitle}>Carbon Footprint: -15kg CO2</Text>
    <Text style={styles.dashboardItemSubtitle}>Climate Change: -10%</Text>
    </View>
    </View>
    <View style={styles.dashboardItem}>
    <Image source={require('../assets/images/plant.png')} style={styles.dashboardItemImage} />
    <View style={styles.dashboardItemTextContainer}>
    <Text style={styles.dashboardItemTitle}>Plant Name</Text>
    <Text style={styles.dashboardItemSubtitle}>Carbon Footprint: -15kg CO2</Text>
    <Text style={styles.dashboardItemSubtitle}>Climate Change: -10%</Text>
    </View>
    </View>
    </View>
    </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton} onPress={handleMissionsButtonPress}>
<Text style={styles.bottomBarButtonTitle}>Missions</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bottomBarButton} onPress={handleRewardsButtonPress}>
<Text style={styles.bottomBarButtonTitle}>Rewards</Text>
</TouchableOpacity>
</View>
</View>
);
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#8DBF80',
  },
  menuBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 50,
  },
  menuButton: {
  padding: 10,
  },
  menuButtonIcon: {
  height: 20,
  width: 20,
  resizeMode: 'contain',
  },
  menuTitle: {
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
  },
  header: {
  marginTop: 50,
  paddingHorizontal: 20,
  alignItems: 'center',
  },
  headerTitle: {
  color: '#fff',
  fontSize: 36,
  fontWeight: 'bold',
  marginBottom: 10,
  },
  headerSubtitle: {
  color: '#fff',
  fontSize: 18,
  marginBottom: 20,
  },
  headerIcons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: 40,
  },
  headerIconContainer: {
  alignItems: 'center',
  },
  headerIcon: {
  height: 30,
  width: 30,
  resizeMode: 'contain',
  marginBottom: 10,
  },
  headerIconText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
  },
  dashboard: {
  flex: 1,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30,
  },
  dashboardTitle: {
  color: '#4A4A4A',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  },
  dashboardList: {
  marginTop: 20,
  },
  dashboardItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
  },
  dashboardItemImage: {
  height: 80,
  width: 80,
  resizeMode: 'contain',
  marginRight: 20,
  },
  dashboardItemTextContainer: {
  flex: 1,
  },
  dashboardItemTitle: {
  color: '#4A4A4A',
  fontSize: 18,
  fontWeight: 'bold',
  },
  dashboardItemSubtitle: {
  color: '#9B9B9B',
  fontSize: 14,
  marginBottom: 5,
  },
  bottomBar: {
  flexDirection: 'row',
  backgroundColor: '#8DBF80',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 10,
  },
  bottomBarButton: {
  backgroundColor: '#fff',
  borderRadius: 30,
  paddingVertical: 10,
  paddingHorizontal: 20,
  },
  bottomBarButtonTitle: {
  color: '#4A4A4A',
  fontSize: 18,
  fontWeight: 'bold',
  },
  });


export default MainPageScreen; 