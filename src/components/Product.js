import {View, Text, Image, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';

export default function Product(props) {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveToCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });

    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View style={style.container}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.color}</Text>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
      {isAdded ? (
        <Button
          title="Remove to cart"
          onPress={() => handleRemoveToCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 10,
  },
});
