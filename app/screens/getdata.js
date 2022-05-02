import React from 'react'
import axios from 'axios'
import {ScrollView, View, Text , StyleSheet , Image} from 'react-native'
import baseURL from '../database/baseUrl';
import { auth } from '../../firebase';
class Getdata extends React.Component {

    constructor()
    {
        super()
        this.state={
            data:[]
        }
    }
    
    componentDidMount()
    {
        this.getapiData()
    }
    async getapiData()
    {
        // let resp=await axios.get('https://facebook.github.io/react-native/movies.json')
        let resp=await axios.get(`${baseURL}childdatas`)        
        this.setState({data: resp.data})
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>    
            <View style={{ flex: 1, margin: 70 }}>
                {
                    this.state.data.length>0?
                    <View>
                        {
                            this.state.data.map((item)=>
                            <View style={styles.container}>
                                <Image style={styles.image} source={require("../../assets/Logo.jpg")} />
                                <Text style={styles.name}>NAME ::: {item.name}</Text>
                                <Text style={styles.dob}>DOB ::: {item.date}</Text>
                                <Text style={styles.dob}>Mother's Name ::: {item.momname}</Text>
                                <Text style={styles.dob}>Father's Name ::: {item.fathname}</Text>
                                <Text style={styles.dob}>Contact ::: {item.contact}</Text>
                            </View>
                            )
                        }
                    </View>:<Text>data is loading...</Text>
                }
            </View>
        </ScrollView>    
        )
    }
}

export default Getdata;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      height: 250,
      width: 290,
      marginTop: 30,
      marginBottom: 180,
      borderWidth: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    image: {
        top: '0%',
        height: 180,
        width: 290
    },
    name : {
        top: '0%',
        backgroundColor: 'grey',
        height: 50,
        width: 290,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    dob : {
        backgroundColor: 'grey',
        height: 50,
        width: 290,
        textAlign: 'center',
        textAlignVertical: 'center'
      },
                    

  })