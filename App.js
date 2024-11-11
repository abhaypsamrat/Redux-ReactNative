import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Product from './src/components/Product';

const App = () => {
  const products = [
    {
      name: 'Samsung Galaxy S21',
      price: 70000,
      color: 'Phantom Black',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Apple iPhone 13',
      price: 120000,
      color: 'Blue',
      image:
        'https://www.tecnosell.com/media/catalog/product/cache/60c31028333b516fd0f8945d994bb7aa/b/l/blu1_2_7_1.jpg',
    },
    {
      name: 'OnePlus 9 Pro',
      price: 65000,
      color: 'Morning Mist',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Google Pixel 6',
      price: 80000,
      color: 'Sorta Seafoam',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Xiaomi Mi 11 Ultra',
      price: 60000,
      color: 'Ceramic White',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Sony Xperia 5 III',
      price: 85000,
      color: 'Green',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Oppo Find X3 Pro',
      price: 75000,
      color: 'Gloss Black',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Vivo X70 Pro+',
      price: 78000,
      color: 'Aurora Dawn',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Realme GT',
      price: 45000,
      color: 'Racing Yellow',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
    {
      name: 'Motorola Edge 20 Pro',
      price: 55000,
      color: 'Midnight Sky',
      image:
        'https://www.itel-india.com/wp-content/uploads/2024/08/800x800-F4-1-450x450.jpg',
    },
  ];

  return (
    <View style={style.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
