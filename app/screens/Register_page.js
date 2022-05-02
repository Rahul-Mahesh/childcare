import { useNavigation } from '@react-navigation/native';
import React, {useEffect , useState} from 'react';
import {ScrollView, KeyboardAvoidingView, StyleSheet, Text , TextInput, TouchableOpacity, View , Image , Button} from 'react-native';
import baseURL from '../database/baseUrl';
import axios from 'axios';
import { auth } from '../../firebase';
import routes from '../navigation/routes';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';




    const Register_page = () => {

        const navigation = useNavigation()

        const handleback = (user) => {
            if(user) {
                navigation.replace(routes.HOME)
            }
        }

        const [email, setEmail] = useState('')
        const [name, setName] = useState('')
        // const [date, setDate] = useState(new Date())
        // const [mode, setMode] = useState('date')
        // const [show, setShow] = useState(false)
        // const [text, setText] = useState('Empty')
        const [date, setDate] = useState('')
        const [gender, setGender] = useState('')
        const [mother, setMother] = useState('')
        const [father, setFather] = useState('')
        const [contact, setContact] = useState('')
        const [address, setAddress] = useState('')
        const [bldgrp, setBldgrp] = useState('')
        const [birthwt, setBirthwt] = useState('')
        const [birthtm, setBirthtm] = useState('')
        const [plcbr, setPlcbr] = useState('')
        const [defcen, setDefcen] = useState('')
        
        const handleRegister = (e) => {
            e.preventDefault();
            const userData = {
                email: auth.currentUser?.email,
                name: name,
                date: date,
                gender: gender,
                momname: mother,
                fathname: father,
                contact: contact,
                address: address,
                bloodgrp: bldgrp,
                birthweight: birthwt,
                birthtime: birthtm,
                birthplace: plcbr,
                defaultcenter: defcen              
            };
           axios.post(`${baseURL}childdatas` , userData).then((response) => {
               console.log(response.status);
               console.log(response.data);
           })
        }
        
            // let data = [{
            //   value: 'Banana',
            // }, {
            //   value: 'Mango',
            // }, {
            //   value: 'Pear',
            // }];

        // const onChange = (event, selectedDate) => {
        //     const currentDate = selectedDate || date
        //     setShow(Platform.OS === 'android')
        //     setDate(currentDate)

        //     let tempDate = new Date(currentDate)
        //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth + 1) + '/' + tempDate.getFullYear();
        //     let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes' + tempDate.getMinutes();
        //     setText(fDate)
        //     console.log(fDate + '(' + fTime + ')')
        // }

        // const showMode = (currentMode) => {
        //     setShow(true);
        //     setMode(currentMode)
        // }




    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headertext}>REGISTER</Text>
                    <TouchableOpacity style={styles.back} onPress={handleback}>
                    <Image source={require("../assets/back.svg")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputtext}>Name of child :</Text>
                    <TextInput style={styles.input} onChangeText={text => setName (text)}/>
                    <Text style={styles.inputtext}>Date of Birth (DD/MM/YY):</Text>
                    <TextInput style={styles.input} onChangeText={text => setDate (text)}/>
                    {/* <Button title='DatePicker'  onPress={() => showMode('date')}/> */}
                    <Text style={styles.inputtext}>Gender :</Text>
                    <TextInput style={styles.input} onChangeText={text => setGender (text)}/>
                    <Text style={styles.inputtext}>Mother's Name :</Text>
                    <TextInput style={styles.input} onChangeText={text => setMother (text)}/>
                    <Text style={styles.inputtext}>Father's Name :</Text>
                    <TextInput style={styles.input} onChangeText={text => setFather (text)}/>
                    <Text style={styles.inputtext}>Contact No :</Text>
                    <TextInput style={styles.input} onChangeText={text => setContact (text)}/> 
                    <Text style={styles.inputtext}>Address :</Text>
                    <TextInput multiline={true} numberOfLines={5} style={styles.inputBig} onChangeText={text => setAddress (text)}/> 
                    <Text style={styles.inputtext}>Blood Group :</Text>
                    <TextInput style={styles.input} onChangeText={text => setBldgrp (text)}/> 
                    <Text style={styles.inputtext}>Birth Weight (in KGs) :</Text>
                    <TextInput style={styles.input} onChangeText={text => setBirthwt (text)}/>   
                    <Text style={styles.inputtext}>Birth Time (XXHrsXXMins - 24Hr):</Text>
                    {/* <Button title='DatePicker'  onPress={() => showMode('time')}/> */}
                    <TextInput style={styles.input} onChangeText={text => setBirthtm (text)}/>
                    <Text style={styles.inputtext}>Place of Birth (Hospital) :</Text>
                    <TextInput style={styles.input} onChangeText={text => setPlcbr (text)}/>
                    <Text style={styles.inputtext}>Set default Center :</Text>
                    <TextInput style={styles.input} onChangeText={text => setDefcen (text)}/>                                                                                                                                                                                  
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.btntxt}>REGISTER</Text>
                </TouchableOpacity>
                {/* {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />)}                 */}
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Register_page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
        top: 70,
        left: '5%'
    },
    inputtext: {
        fontWeight: '400',
        marginTop: 10
    },
    input: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 2,
    },
    inputBig: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 2,
        height: 120,
        textAlignVertical: 'top'
    },    
    button: {
        marginTop: 20,
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        top: 60
    },
    headerContainer: {
        height: '5%',
        top: '5%',
        // alignItems: 'center'
    },
    headertext: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerlogo: {
        right: '5%'
    },
    btntxt: {
        color: 'blue'
    },
    back: {
        height: 30,
        width:30,
        backgroundColor: 'red',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        left: '90%'
    }
}
)