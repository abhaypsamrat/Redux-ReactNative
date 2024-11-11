import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import Header from './src/components/Header';
import Product from './src/components/Product';

const App = () => {
  const products = [
    {
      name: 'Samsung Mobile',
      price: 30000,
      color: 'white',
      image:
        'https://img.freepik.com/premium-photo/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-background_981309-9160.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728864000&semt=ais_hybrid-rr-similar',
    },
    {
      name: 'Apple iPhone',
      price: 130000,
      color: 'red',
      image:
        'https://img.freepik.com/premium-photo/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-background_981309-9160.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728864000&semt=ais_hybrid-rr-similar',
    },
    {
      name: 'Nokia Mobile',
      price: 10000,
      color: 'green',
      image:
        'https://img.freepik.com/premium-photo/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-background_981309-9160.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728864000&semt=ais_hybrid-rr-similar',
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
