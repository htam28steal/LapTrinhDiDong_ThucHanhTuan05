import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

export default function Screen_01({ navigation }) {
  const [color, setStrColor] = useState('blue');
  const [rating, setRating] = useState(5);
  const renderImg = () => {
    if (color === 'blue') {
      return require('./assets/img/bluePhone.png');
    } else if (color === 'red') {
      return require('./assets/img/red.png');
    } else if (color === 'black') {
      return require('./assets/img/black.png');
    } else {
      return require('./assets/img/silver.png');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.frameImg}>
        <Image source={renderImg()} style={styles.img} />
        <View>
          <Text style={styles.title}>
            Điện thoại Vsmart Joy3 Hàng Chính Hãng
          </Text>
        </View>
      </View>

      <View style={styles.frameColor}>
        <Text style={styles.txtOption}>Chọn một màu bên dưới</Text>
        <View style={styles.frameOptionColor}>
          <TouchableOpacity
            style={[styles.optionColor, { backgroundColor: '#C5F1FB' }]}
            onPress={() => {
              setStrColor('silver');
              setRating(4);
            }}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setStrColor('red');
              setRating(3);
            }}
            style={[
              styles.optionColor,
              { backgroundColor: '#F30D0D' },
            ]}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setStrColor('black');
              setRating(1);
            }}
            style={[
              styles.optionColor,
              { backgroundColor: '#000000' },
            ]}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setStrColor('blue');
              setRating(5);
            }}
            style={[
              styles.optionColor,
              { backgroundColor: '#234896' },
            ]}></TouchableOpacity>
        </View>
        <View
          style={[
            styles.frameButtonChooseColor,
            { backgroundColor: '#234896', border: 'none' },
          ]}>
          <TouchableOpacity
            style={styles.buttonBuy}
            onPress={() => {
              navigation.navigate('Screen_01', {color,rating});
            }}>
            XONG
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 640,
    width: 360,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  frameImg: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 150,
    padding: 10,
    alignSelf: 'center',
  },
  img: {
    width: 112,
    height: 132,
  },
  title: {
    width: 164,
    height: 36,
    fontWeight: 600,
  },
  frameColor: {
    width: '100%',
    height: 490,
    padding: 10,
    backgroundColor: '#C4C4C4',
  },
  txtOption: {
    fontSize: 18,
    fontWeight: 600,
  },
  frameOptionColor: {
    width: 85,
    height: 360,
    marginTop: 10,
    alignSelf: 'center',
    gap: 10,
  },
  optionColor: {
    width: 85,
    height: 80,
  },
  frameButtonChooseColor: {
    width: '100%',
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRightColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonBuy: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: 'white',
  },
});
