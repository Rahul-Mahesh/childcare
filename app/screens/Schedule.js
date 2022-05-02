import { useNavigation } from '@react-navigation/native';
import React, {useEffect , useState} from 'react';
import {ScrollView, KeyboardAvoidingView, StyleSheet, Text , TextInput, TouchableOpacity, View , Image , Button} from 'react-native';
import baseURL from '../database/baseUrl';
import axios from 'axios';
import { auth } from '../../firebase';
import routes from '../navigation/routes';




    const Schedule = () => {

        const navigation = useNavigation()

        const handleback = (user) => {
            if(user) {
                navigation.replace(routes.HOME)
            }
        }

        const [email, setEmail] = useState('')
        const [vaccinename, setVaccinename] = useState('')
        const [schdate, setSchdate] = useState('')
        
        const handleRegister = (e) => {
            e.preventDefault();
            const userData = {
                email: auth.currentUser?.email,
                vaccinename: vaccinename,
                schdate: schdate             
            };
           axios.post(`${baseURL}schedulevacs` , userData).then((response) => {
               console.log(response.status);
               console.log(response.data);
           })
        }
        

    return (

            <View>
                <View style={styles.headerContainer}>
                <Image style={styles.headerlogo} source={require("../../assets/Logo.jpg")}/>
                    <Text style={styles.headertext}>SCHEDULE FOR VACCINATION</Text>
                    <TouchableOpacity style={styles.back} onPress={handleback}>
                    <Image source={require("../assets/back.svg")}></Image>
                    </TouchableOpacity>    
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.showemail}>EMAIL ::: {auth.currentUser?.email}</Text>
                    <View style={styles.textinContainer}>
                    <Text style={styles.texty}>VACCINE NAME :</Text>
                    <TextInput style={styles.textybox} onChangeText={text => setVaccinename (text)}/> 
                    <Text style={styles.texty}>ENTER DATE (DD/MM/YY) :</Text>
                    <TextInput style={styles.textybox} onChangeText={text => setSchdate (text)}/>                                                                                                                                                                                 
                    <TouchableOpacity 
                    onPress={handleRegister}
                    style={{backgroundColor: 'green' ,top: 45, height: 35, width: 200, alignSelf: 'center'}}
                >
                    <Text style={styles.btntxt}>SCHEDULE</Text>
                </TouchableOpacity>
                    </View>
                </View>
            </View>

    );
}

export default Schedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    headerContainer: {
        position: 'absolute',
        top: '0%',
        height: 230,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#bec2c2'
    },
    headerlogo: {
        top: '-5%',
        height: 250,
        width: 250,
        alignSelf: 'center',        
    },
    headertext: {
        bottom: '25%',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    inputContainer: {
        top: 230,
        height:455
    },
    showemail: {
        top: '8%',
        fontSize: 20,
        width: 260,
        alignSelf: 'center',
        backgroundColor: 'green',
        borderRadius: 5,
        textAlign: 'center'
    },
    textinContainer: {
        top: '15%',
        width: '100%',
        height: 250
    },
    texty: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 15
    },
    textybox: {
        width: '80%',
        alignSelf: 'center',
        borderWidth: 2,
        height: 35,
        marginTop: 10
    },
    buttonn: {
        top: '30%',
        backgroundColor: 'green',
        height: 30,
        width:200,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20
    },
    btntxt: {
        color: 'gold',
        textAlign: 'center',
        fontSize: 20
    },
    back: {
        height: 30,
        width: 30,
        backgroundColor: 'red',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        left: '90%',
        top: '-90%'
    }
}
)