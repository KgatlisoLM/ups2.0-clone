import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { Card, Divider, Icon } from '@rneui/themed';
import MapView, {Marker} from 'react-native-maps';
type Props = {
    order: Order,
    fullWidth?: boolean
}

const DeliveryCard = ({order, fullWidth}: Props) => {
  return (
    <Card containerStyle={[tw`${fullWidth ? "rounded-none m-0" : "rounded-lg"} my-2`, {
        backgroundColor: fullWidth ? "#EB6A7c" : '#59C1CC',
        padding:0,
        paddingTop: 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4
    }]}>
      <View style={fullWidth ? {height: "100%"} : null}>
         <Icon name='box' type='entypo' size={50} color={"white"} />
         <View style={tw`items-start p-5 -mt-3`}>
         <View style={tw`pb-3 mx-auto`}>
            <Text
            style={tw`text-xs text-center uppercase text-white font-bold`}>
                {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw`text-white text-center text-lg font-bold`}>
                Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
            </Text>
            </View>
        
         <Divider color='white'/>
         <View style={tw`mx-auto pb-3`}>
             <Text style={tw`text-base text-center text-white font-bold mt-5`}>Address</Text>
             <Text style={tw`text-sm text-center text-white`}>
                 {order.Address}, {order.City}
             </Text>

             <Text style={tw`text-sm text-center italic text-white`}>
                Shipping Cost: R{order.shippingCost * 40}
             </Text>
         </View>
        </View>
     

      <Divider color='white' />
      
      <View style={tw`p-5`}>
       {order.trackingItems.items.map((item, index) => (
        <View style={tw`flex-row justify-between items-center`} key={index}>
            <Text style={tw`text-sm italic text-white`}>{item.name}</Text>
            <Text style={tw`text-xl text-white`}>X {item.quantity}</Text>
        </View>
       ))}
     </View>

      <MapView
       initialRegion={{
        latitude: order.Lat,
        longitude: order.Lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
       }}

       style={[tw`w-full`, fullWidth ? {flexGrow: 1}: null, !fullWidth ? {height: 200}: null]}
      >
      {order.Lat && order.Lng ? (
        <Marker
           coordinate={{
             latitude: order.Lat,
             longitude: order.Lng
           }}
           title='Delivery Location'
           description={order.Address}
           identifier='destination'
        />
      ):null}

      </MapView>
      </View>
    </Card>
  )
}

export default DeliveryCard;

const styles = StyleSheet.create({})