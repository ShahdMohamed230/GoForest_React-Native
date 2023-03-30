import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const RewardScreen = ({ navigation }) => {

const handleBackButtonPress = () => {
navigation.goBack();
}

const rewards = [
{
id: 'coupon1',
title: '10% off at Local Farmers Market',
description: 'Use this coupon to get 10% off your purchase at the Local Farmers Market.',
image: require('../assets/images/farmers-market.png'),
},
{
id: 'voucher1',
title: '$5 voucher for Eco-Friendly Store',
description: 'Use this voucher to get $5 off your purchase at the Eco-Friendly Store.',
image: require('../assets/images/eco-store.png'),
},
{
id: 'voucher2',
title: '$10 voucher for Sustainable Clothing Store',
description: 'Use this voucher to get $10 off your purchase at the Sustainable Clothing Store.',
image: require('../assets/images/clothing-store.png'),
},
];

const renderItem = ({ item }) => {
return (
<View style={styles.rewardItem}>
<Image source={item.image} style={styles.rewardItemImage} />
<View style={styles.rewardItemTextContainer}>
<Text style={styles.rewardItemTitle}>{item.title}</Text>
<Text style={styles.rewardItemDescription}>{item.description}</Text>
</View>
</View>
);
}

return (
<View style={styles.container}>
<View style={styles.menuBar}>
<TouchableOpacity style={styles.menuButton} onPress={handleBackButtonPress}>
<Image source={require('../assets/icons/arrow-left.png')} style={styles.menuButtonIcon} />
</TouchableOpacity>
<Text style={styles.menuTitle}>Rewards</Text>
<View style={styles.menuButton}></View>
<View style={styles.menuButton}></View>
<View style={styles.menuButton}></View>
</View>
<View style={styles.rewardList}>
<FlatList
data={rewards}
renderItem={renderItem}
keyExtractor={item => item.id}
contentContainerStyle={styles.rewardListContent}
/>
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
rewardList: {
flex: 1,
backgroundColor: '#fff',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
paddingHorizontal: 20,
paddingVertical: 30,
},
rewardListContent: {
paddingBottom: 50,
},
rewardItem: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 10,
},
rewardItemImage: {
height: 80,
width: 80,
resizeMode: 'contain',
marginRight: 20,
},
rewardItemTextContainer: {
flex: 1,
},
rewardItemTitle: {
color: '#4A4A4A',
fontSize: 18,
fontWeight: 'bold',
},
rewardItemDescription: {
color: '#9B9B9B',
fontSize: 14,
marginBottom: 5,
},
});

export default RewardScreen;