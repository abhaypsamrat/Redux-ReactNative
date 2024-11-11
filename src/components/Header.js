import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function Header() {
  const cartData = useSelector(state => state.reducer);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);

  return (
    <View style={style.container}>
      <Text style={style.text}>{cartItem}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  text: {
    textAlign: 'right',
    padding: 10,
    backgroundColor: 'orange',
    color: '#fff',
  },
});
