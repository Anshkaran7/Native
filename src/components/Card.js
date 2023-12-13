import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Card = ({data}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{data.title}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.infoText}>{data.flats}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.infoText}>{data.distance}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.minMaxText}>Min </Text>
        <Text style={styles.priceText}>{data.minPrice}</Text>
        <Text style={styles.campaignText}> - Campaign Type</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.minMaxText}>Max </Text>
        <Text style={styles.priceText}>{data.maxPrice}</Text>
        <Text style={styles.campaignText}> - Campaign Type</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  titleText: {
    color: '#004F84',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  infoText: {
    color: '#557184',
    fontSize: 14,
    marginRight: 10,
  },

  dot: {
    fontSize: 20,
    color: '#557184',
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  minMaxText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#557184',
  },
  campaignText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'italic',
  },
});

export default Card;
