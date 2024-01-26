import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Styles } from '../../constants/Styles';

const MainDealCard = () => {
  return (
    <LinearGradient
      colors={['#004F84', '#00558F', '#004F84']}
      style={styles.mainContainer}
    >
      <View style={styles.cardContainer}>
        <Text style={[Styles.lgBoldText, { fontSize: 20, color: '#fff', marginBottom: 8 }]}>
          ₹ 18760 {''}
          <Text style={[Styles.mdText, { fontSize: 14, color: '#fff' }]}>
            spent to reach {' '}
          </Text>
          645 {''}
          <Text style={[Styles.mdText, { fontSize: 14, color: '#fff', marginBottom: 8, paddingLeft:2 }]}>
            homes {'\n'}  till now, from 01 March 2023, Thursday
          </Text>
        </Text>
        <View style={styles.separator} />
        <Text style={[Styles.lgBoldText, { fontSize: 20, color: '#fff', marginBottom: 8 }]}>
          4500 {''}
          <Text style={[Styles.mdText, { fontSize: 14, color: '#fff' }]}>
            homes, yet to be reached
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default MainDealCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 18,
    borderRadius: 20,
  },
  cardContainer: {
    padding: 16,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
});
