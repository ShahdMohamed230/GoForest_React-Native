import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
} from 'react-native';

import { LocaleConfig } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'en';

const CalendarScreen = () => {
const [markedDates, setMarkedDates] = useState({
'2023-03-01': { marked: true, dotColor: '#50C878' },
'2023-03-02': { marked: true, dotColor: '#50C878' },
'2023-03-03': { marked: true, dotColor: '#50C878' },
'2023-03-04': { marked: true, dotColor: '#50C878' },
'2023-03-05': { marked: true, dotColor: '#50C878' },
'2023-03-06': { marked: true, dotColor: '#50C878' },
'2023-03-07': { marked: true, dotColor: '#50C878' },
'2023-03-08': { marked: true, dotColor: '#50C878' },
'2023-03-09': { marked: true, dotColor: '#50C878' },
'2023-03-10': { marked: true, dotColor: '#50C878' },
'2023-03-11': { marked: true, dotColor: '#50C878' },
'2023-03-12': { marked: true, dotColor: '#50C878' },
'2023-03-13': { marked: true, dotColor: '#50C878' },
'2023-03-14': { marked: true, dotColor: '#50C878' },
'2023-03-15': { marked: true, dotColor: '#50C878' },
'2023-03-16': { marked: true, dotColor: '#50C878' },
'2023-03-17': { marked: true, dotColor: '#50C878' },
'2023-03-18': { marked: true, dotColor: '#50C878' },
'2023-03-19': { marked: true, dotColor: '#50C878' },
'2023-03-20': { marked: true, dotColor: '#50C878' },
'2023-03-21': { marked: true, dotColor: '#50C878' },
'2023-03-22': { marked: true, dotColor: '#50C878' },
'2023-03-23': { marked: true, dotColor: '#50C878' },
'2023-03-24': { marked: true, dotColor: '#50C878' },
'2023-03-25': { marked: true, dotColor: '#50C878' },
'2023-03-26': { marked: true, dotColor: '#50C878' },
'2023-03-27': { marked: true, dotColor: '#50C878' },
'2023-03-28': { marked: true, dotColor: '#50C878' },
});

const handleDayPress = (day) => {
// Do something with the selected day, e.g. show the completed tasks for that day
console.log(day);
};

return (
<View style={styles.container}>
<Calendar
markedDates={markedDates}
onDayPress={handleDayPress}
style={styles.calendar}
theme={{
calendarBackground: '#FFFFFF',
textSectionTitleColor: '#000000',
selectedDayBackgroundColor: '#50C878',
selectedDayTextColor: '#FFFFFF',
todayTextColor: '#50C878',
dayTextColor: '#000000',
dotColor: '#50C878',
selectedDotColor: '#FFFFFF',
arrowColor: '#50C878',
monthTextColor: '#000000',
textMonthFontWeight: 'bold',
textDayFontSize: 16,
textMonthFontSize: 20,
}}
/>
<View style={styles.statsContainer}>
<Text style={styles.statsText}>
Longest set of continuous days completed: 10
</Text>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
padding: 16,
},
calendar: {
borderRadius: 10,
overflow: 'hidden',
},
statsContainer: {
marginTop: 16,
backgroundColor: '#FAFAFA',
padding: 16,
borderRadius: 10,
},
statsText: {
fontSize: 18,
fontWeight: 'bold',
color: '#000000',
},
});

export default CalendarScreen;