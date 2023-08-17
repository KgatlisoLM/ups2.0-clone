import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import tw from "twrnc";
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import DeliveryCard from '../components/DeliveryCard';


export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>

const OrderScreen = () => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {
    params: {order}
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
     navigation.setOptions({
        headerTitle: order.trackingItems.customer.name,
        headerTintColor: "#EB6A7C",
        headerTitleStyle: {color: "black"},
        headerBackTitle: "Deliveries"
     });

  }, [order])


  return (
    <View style={tw`-mt-2`}>
       <DeliveryCard order={order} fullWidth/>
    </View>
  )
}

export default OrderScreen;

const styles = StyleSheet.create({})