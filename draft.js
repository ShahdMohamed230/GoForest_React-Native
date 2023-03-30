    import React from 'react';
    import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

    const HomePage = () => {
    return (
    <View style={styles.container}>
    <View style={styles.menuBar}>
    <TouchableOpacity style={styles.menuButton}>
    <Image source={require('../assets/icons/menu.png')} style={styles.menuButtonIcon} />
    </TouchableOpacity>
    <Text style={styles.menuTitle}>Go Forest</Text>
    <TouchableOpacity style={styles.menuButton}>
    <Image source={require('../assets/icons/notification.png')} style={styles.menuButtonIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuButton}>
    <Image source={require('../assets/icons/profile.png')} style={styles.menuButtonIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuButton}>
    <Image source={require('../assets/icons/arrow-right.png')} style={styles.menuButtonIcon} />
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
    
    <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarButton}>
    <Text style={styles.bottomBarButtonTitle}>Missions</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarButton}>
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

    export default HomePage;