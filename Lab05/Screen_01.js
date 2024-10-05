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

export default function Screen_01({ route, navigation }) {
  const { color } = route.params ?? {};
  const { rating = 5 } = route.params || {};
  const ratingOfProduct=[...Array(rating)].map((_,index)=>(
      <Image key={index} source={require('./assets/icons/star.png') } style = {{width:20,height:20}} />
  ));

  const renderImg = () => {
      if (color === 'silver') {
        return require('./assets/img/silver.png');
      }
      else if(color ==='blue'){
        return require('./assets/img/bluePhone.png');
      }else if(color ==='red'){
        return require('./assets/img/red.png');
      }else if(color ==='black'){
        return require('./assets/img/black.png');
      }
      return require('./assets/img/bluePhone.png');

    
  };
  return (
    <View style={styles.container}>
      <View style={styles.frameImg}>
        <Image source={renderImg()} style={styles.img} />
      </View>
      <View style={styles.frameText}>
        <Text style={styles.txtTile}>
          Điện Thoại Vsmart Joy3-Hàng Chính Hãng
        </Text>
      </View>
      <View style={styles.framRating}>
        <View style={styles.frameIcon}>
         {ratingOfProduct}
        </View>
        <View style={styles.frameText}>
          <Text style={[styles.txtTile, { fontSize: 18 }]}>
            (Xem 828 đánh giá)
          </Text>
        </View>
      </View>
      <View style={styles.framePrice}>
        <View style={styles.frameText}>
          <Text style={[styles.txtTile, { fontSize: 21 }]}>1.790.000 đ</Text>
        </View>
        <View style={styles.frameText}>
          <Text
            style={[
              styles.txtTile,
              { textDecorationLine: 'line-through', color: 'grey' },
            ]}>
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={styles.framDes}>
        <Text style={[styles.txtTile, { color: 'red', fontWeight: 'bold' }]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <View
          style={{
            width: 18,
            height: '100%',
            borderBlockColor: 'black',
            borderWidth: 2,
            borderRadius: '50%',
            marginLeft: 10,
          }}></View>
      </View>
      <View style={styles.frameButtonChooseColor}>
        <TouchableOpacity
          style={[styles.btOptionColor, { fontWeight: 700 }]}
          onPress={() => {
            navigation.navigate('Screen_02');
          }}>
          4 MÀU-CHỌN MÀU
        </TouchableOpacity>
        <View style={styles.outFrame}>
          <Text style={styles.txtChuThich}>></Text>
        </View>
      </View>
      <View
        style={[
          styles.frameButtonChooseColor,
          { backgroundColor: 'red', border: 'none' },
        ]}>
        {' '}
        <TouchableOpacity style={styles.buttonBuy}>
          CHỌN MUA
        </TouchableOpacity>{' '}
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
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  frameImg: {
    width: 300,
    height: 360,
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  frameText: {
    width: 'auto',
    height: 21,
    justifyContent: 'center',
  },
  txtTile: {
    fontSize: 15,
    fontWeight: 500,
  },
  framRating: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 25,
    width: 300,
    marginTop: 10,
  },
  frameIcon: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
  },
  framePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 21,
    width: '75%',
    marginTop: 10,
  },
  framDes: {
    flexDirection: 'row',
    width: 250,
    height: 18,
    marginTop: 10,
  },
  frameButtonChooseColor: {
    width: '100%',
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRightColor: 'grey',
    borderRadius: 5,
  },
  outFrame: {
    position: 'absolute',
    width: 10,
    left: 300,
    top: 7,
  },
  txtChuThich: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 700,
  },
  buttonBuy: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: 'white',
    border: 'none',
  },
  btOptionColor: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius:10,
    borderColor: 'black',
  },
});
