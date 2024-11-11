import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  const cartData = useSelector(state => state.reducer);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Ionicons name="cart" size={28} color="#fff" />
      <Text style={styles.cartCount}>{cartItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cartCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});
