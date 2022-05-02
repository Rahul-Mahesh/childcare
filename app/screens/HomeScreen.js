import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { auth } from '../../firebase';
import routes from '../navigation/routes';



const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace(routes.LOGIN)
          })
          .catch(error => alert(error.message))
    }

    const handleReg = (user) => {
        if(user) {
            navigation.replace(routes.REGISTER)
        }
    }

    const handledata = (user) => {
        if(user) {
            navigation.replace(routes.GETDATA)
        }
    }

    const handleschedule = (user) => {
        if(user) {
            navigation.replace(routes.SCHEDULE)
        }
    }

    const handlemysch = (user) => {
        if(user) {
            navigation.replace(routes.MYSCHEDULE)
        }
    }

    return (
        <NativeBaseProvider>
        <View style={styles.container}>
        <View style={styles.avatar}>
        <TouchableOpacity style={{backgroundColor: "transparent", padding: 20}} onPress={handledata}>
            <Text style={styles.badge}>USER</Text>
        </TouchableOpacity>            
        </View>
        <Text style={styles.avtext}>{auth.currentUser?.email}</Text>         
        <View style={styles.container1}>
            <TouchableOpacity style={{backgroundColor: "green", padding: 50}} onPress={handleReg}>
            <Image style={styles.imageym} source={require('../assets/childcare.jpg')}/>
            </TouchableOpacity>
            <Text style={styles.textM}>REGISTRATION</Text>
      </View>
      <View style={styles.container2}>
            <TouchableOpacity style={{backgroundColor: "transparent", padding: 50}} onPress={handleschedule}>
            <Image style={styles.imageym} source={require('../assets/vaccine.jpg')}/>
            </TouchableOpacity>
            <Text style={styles.textM}>BOOK FOR VACCINATION</Text>            
      </View>
      <View style={styles.container3}>
            <TouchableOpacity style={{backgroundColor: "transparent", padding: 50}} onPress={handlemysch}>
            <Image style={styles.imageym} source={require('../assets/resch.jpg')}/>
            </TouchableOpacity>
            <Text style={styles.textM}>MY VACCINATIONS</Text>            
      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.containerlg}
      >
            <Text style={styles.textylg}>LOGOUT</Text>  
       </TouchableOpacity>                    
      </View>
      </NativeBaseProvider>    
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    container1: {
        position: 'absolute',
        top: '25%',
        left: '5%',
        width: 375,
        height: 130,
        backgroundColor: '#ffffcc',
        borderRadius: 6,
    },
    container2: {
        position: 'absolute',
        top: '47%',
        left: '5%',
        width: 375,
        height: 130,
        backgroundColor: '#ffffcc',
        borderRadius: 6,
    },
    container3: {
        position: 'absolute',
        top: "69%",
        left: 23,
        width: 375,
        height: 130,
        backgroundColor: '#99ffcc',
        borderRadius: 6,
    },
    containerlg: {
        position: 'absolute',
        top: "90%",
        left: 23,
        width: 373,
        height: 65,
        backgroundColor: '#FF0000',
        borderRadius: 6,
    },            
     texty: {
        position: 'absolute',
        top: 99,
        left: 50,
        lineHeight: 30,
        color: '#41404AFF'
     },
     texty2: {
        position: 'absolute',
        top: 99,
        left: 145,
        lineHeight: 22,
        color: '#F44336',    
     },
     textylg: {
        position: 'absolute',
        top: 20,
        left: 140,
        lineHeight: 30,
        color: '#FFFFFF',
        fontSize: 25,    
     },     
     imageym: {
         position: 'absolute',
         top: 0,
         left: 0,
         width: 375,
         height: 100,
     },
     imageyb: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 119,
        height: 48,
    },
    imageyby: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 170,
        height: 100,
    },              
    avatar: {
        position: 'absolute',
        top: 50,
        left: 180,
        width: 60,
        height: 60,
        fontSize: 20,
        lineHeight: 50,
        borderRadius: 30,
        backgroundColor: '#FF6C00',
    },
    badge: {
        top: -15,
        left: -22,
        width: 65,
        height: 50,
        fontSize: 22,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    avtext: {
        position: 'absolute',
        top: 115,
        left: 160,
        fontSize: 14,
        lineHeight: 22
    },
    rating: {
        position: 'absolute',
        top: 150,
        left: 165,
        width: 80,
        height: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    star: {
        width: 16,
        height: 16,
    },
    ratingnum: {
        left: 5,
        width: 40,
        height: 20,
    },
    mobList: {
        top: 0,
        height: "50%",
        width: "100%"
    },
    bikeList: {
        top: "50%",
        height: "50%",
        width: "100%"
    },
    textM: {
        top:"3%",
        left: "0%",
        textAlign: "center"
    }
  })