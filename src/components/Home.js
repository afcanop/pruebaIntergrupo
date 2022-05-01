import React from 'react';
import {Text, Button, HStack, VStack, Input, View, Center} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';
import UseGetData from '../hooks/useGetData';
import MapView from 'react-native-maps';

const Home = ({navigation}) => {
  const {loading, data} = UseGetData();

  const renderItem = ({item}) => {
    return (
      <HStack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        padding={'3'}
        margin={2}
        style={styles.cardShadow}>
        <Button
          colorScheme={'darkBlue'}
          size={'md'}
          onPress={() => navigation.navigate('Details')}>
          Go
        </Button>
        <VStack>
          <Text>{item.country_name}</Text>
          <Text> {item.country_short_name} </Text>
          <Text> {item.country_phone_code} </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <View bgColor={'white'} flex={1}>
      <Center>
        <Input
          size="xl"
          margin={'2.5'}
          InputRightElement={
            <Image
              source={require('../assets/img/loupe.png')}
              style={styles.imgInput}
            />
          }
        />
      </Center>
      <FlatList
        data={data}
        key={(item, key) => key.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  imgInput: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
});

export default Home;
