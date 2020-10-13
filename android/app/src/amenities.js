import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
     import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';
      import Slider from '@react-native-community/slider';
      import { CheckBox } from 'react-native-elements'

     export default class BuildingStructure extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                        account: this.props.route.params.account
                   
                }
                    alert(JSON.stringify(this.state.account))
        }

         
        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{ flexDirection: 'row'}}>
                                                <Text style = {styles.Header}>Amenities</Text>
                                                
                                    </View>
                                    <Text style = {styles.subeHeader}> Select all amenities available at the property below</Text>
                                    <CheckBox
  center
  title='Click Here'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.checked}
/>
                                        </View> 
                         
                        </ImageBackground>
                        
                )
        }
     }

     const styles = StyleSheet.create({
        container: {
          flex: 1,
          //justifyContent: 'center',
          alignItems: 'center',
        },
        footerContainer: {
            marginBottom: 30,
        },
        footerText: {
            color: '#1795e6',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop:20,
            fontFamily: 'times-new-roman'
        },  
        subeHeader: {
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            margin: 10, 
        },
        input: {
            width: 100,
            height: 45,
            fontSize: 20,
            borderRadius:15,
            backgroundColor: 'white',
            marginBottom: 15,
            color: '#1795e6',
        },  
        Header: {
            fontSize: 35,
            color: '#1795e6',
            fontFamily: 'times-new-roman',
            marginBottom: 20,
            marginTop: 30,
            textAlign: 'center'
        },
        TextButton: {
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        buttonStyle: {
            backgroundColor:'#1795e6',
            width: 140,
            marginTop: 30,
            height: 45,
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
alignItems: 'center'
        }
      })