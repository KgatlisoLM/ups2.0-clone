import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, ActivityIndicator} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Constants from "expo-constants";
import tw from 'twrnc';
import {CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image, Input } from "@rneui/themed";
import { GET_CUSTOMERS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import CustomerCard from '../components/CustomerCard';



export type CustomersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [input, setInput] = useState('');
  const {loading, error, data} = useQuery(GET_CUSTOMERS);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, []);

  console.log(data?.getCustomers);


  return (

    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{backgroundColor: "#59C1CC"}}>

        <Image 
          source={{
            uri: 'https://links.papareact.com/3jc'
          }}
         containerStyle={tw`w-full h-64`}
         PlaceholderContent={<ActivityIndicator/>}
        />

        <Input 
        placeholder='Search by Customer' 
        value={input} 
        onChangeText={setInput}
        containerStyle={tw`bg-white pt-5 pb-0 px-10`}
        />
            

        {data?.getCustomers?.filter((customer: CustomerList) => customer.value.name.includes(input))
        
        .map(
          ({name: Id, value: {email, name}}: CustomerResponse) => (
           <CustomerCard key={Id} email={email} name={name} userId={Id}/>
          )
        )}

    </ScrollView>

  );

}

export default CustomersScreen;

const styles = StyleSheet.create({
    androidSafeView: {
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : "",
    },
})