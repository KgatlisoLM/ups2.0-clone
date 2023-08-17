import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { CustomersScreenNavigationProp } from "../screens/CustomersScreen";
import { Card, Icon } from "@rneui/themed";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyModal', {
       name: name,
       userId: userId
      })
    }>
      <Card containerStyle={tw`p-5 rounded-lg`}>
        <View>
          <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`text-2xl font-bold`}>{name}</Text>
            <Text style={[tw`text-sm`, {color: '#59C1CC'}]}>ID: {userId}</Text>
          </View>
          <View style={tw`flex-row items-center justify-end`}>
            <Text style={{color: '#59C1CC'}}>{loading ? "loading..." : `${orders.length} x`}</Text>
            <Icon
              name="box"
              type="entypo"
              color={"#59C1CC"}
              size={50}
              style={tw`mb-5 ml-auto`}
            />
          </View>
          </View>
        </View>
        <Card.Divider/>
         <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;

const styles = StyleSheet.create({});
