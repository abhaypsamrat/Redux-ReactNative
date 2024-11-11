import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
    const isInCart = cartItems.some(element => element.name === item.name);
    setIsAdded(isInCart);
  }, [cartItems]);

  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.color}>Color: {item.color}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            isAdded ? styles.removeButton : styles.addButton,
          ]}
          onPress={() =>
            isAdded ? handleRemoveToCart(item) : handleAddToCart(item)
          }>
          <MaterialIcons
            name={isAdded ? 'remove-shopping-cart' : 'add-shopping-cart'}
            size={24}
            color="white"
          />
          <Text style={styles.buttonText}>
            {isAdded ? 'Remove from cart' : 'Add to cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 4,
  },
  color: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  removeButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '500',
  },
});
