
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://grays.stepzen.net/api/dandy-quetzal/__graphql',
  headers: {'Authorization':'apikey grays::stepzen.io+1000::f24fe1181705ed536f3891a416ab46999005c38873366e6d50ac3fe2046a110a'},
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
           <RootNavigator/>
    </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
