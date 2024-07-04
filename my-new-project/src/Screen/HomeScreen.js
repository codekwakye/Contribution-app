import React from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#FFFFFF",
    }}>
      <View style={{
        alignItems: 'center',
        marginTop: height * 0.1,
        backgroundColor: "#FFFFFF", 
      }}>
        <Image
          style={{
            height: height * 0.35,
            width: width * 0.6,
            marginVertical: height * 0.03,
          }}
          source={require("../assets/man.png")}
        />
        <Text style={{
          fontSize: width * 0.1,
          fontFamily: 'Poppins-SemiBold',
          textAlign: "center",
          color: 'blue',
          marginTop: height * 0.05,
          paddingHorizontal: width * 0.05,
        }}>
          Welcome to the Contribution App!
        </Text>
        <Text style={{
          fontSize: width * 0.05,
          paddingHorizontal: width * 0.05,
          textAlign: "center",
          color: '#AEB5BB',
          fontFamily: 'Poppins-Medium',
          marginVertical: height * 0.02,
        }}>
          We are glad to have you here. Let's get started on making some valuable contributions.
        </Text>
      </View>
      <View style={{
        marginTop: height * 0.02,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#45484A',
        width: "80%",
        height: height * 0.08,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: "#FFFFFF", // Set background color to white
      }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            borderRadius: 98,
            backgroundColor: 'blue',
          }}
          onPress={handleLogin}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: width * 0.045,
            fontFamily: 'Poppins-SemiBold',
          }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          borderRadius: 98,
          backgroundColor: "#FFFFFF", 
        }}>
          <Text style={{
            fontSize: width * 0.045,
            fontFamily: 'Poppins-SemiBold',
          }}>
            Sign-up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
