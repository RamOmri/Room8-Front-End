import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
     import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';


     export default class profileOne extends React.Component{
        state = {
            lookingFor: 'please select',
        }
        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                        <Text style = {styles.Header}>
                            LET'S GET STARTED
                        </Text>
                        <View style = {{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style = {{marginRight: 20, marginTop: 20, fontSize: 30, color: '#1795e6', fontFamily:'times-new-roman' }}>
                                I AM</Text>
                            
                        </View>


                        <View style = {{flexDirection:'column', marginBottom: 200,}}>
                            <Text style = {{marginRight: 20, fontSize: 30, color: '#1795e6', fontFamily:'times-new-roman' }}>
                                LOOKING FOR</Text>
                            <Menu >
                                <MenuTrigger customStyles = {{
                                    triggerText: {
                                        color: 'white',
                                      },
                                      triggerWrapper: {
                                        padding: 5,
                                        height: 40,
                                        justifyContent: 'center',
                                        backgroundColor: '#1795e6',
                                        borderRadius: 7,
                                        marginTop:20
                                      },
                                      triggerTouchable: {
                                        underlayColor: 'darkblue',
                                        activeOpacity: 70,
                                      },
                                     
                                    
                                }}  text={this.state.lookingFor} />
                                <MenuOptions>
                                    <MenuOption onSelect={() => {this.setState({lookingFor: ' accomodation'})
                                                                                    } } >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>accomodation</Text>
                                        </MenuOption>

                                        <MenuOption onSelect={() =>{this.setState({lookingFor: 'friends to find accomodation together'})
                                                } } >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>friends to find accomodation together</Text>
                                        </MenuOption>

                                            <MenuOption onSelect={() => this.setState({lookingFor: 'a roommate'})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>a roommate</Text>
                                            </MenuOption>

                                            
                                    </MenuOptions>
                            </Menu>
                            
                        </View>
                       
            <View style= {styles.buttonStyle}>
                                                    <TouchableOpacity
                                                    onPress = {()=>{
                                                        this.props.navigation.navigate('registerStack', {params: {lookingFor: this.state.lookingFor,}, screen: 'usersProfile'})
                                                    }}
                                                    >
                                                    <Text
                                                     style={{color: 'white', fontSize: 15}}
                                                    >Continue...</Text>
                                                    </TouchableOpacity>
                                            </View>
                        <View style = {styles.footerContainer}>   
                                            <Text style = {styles.footerText}>
                                                    WHERE FINDING A ROOMMATE JUST BECAME EASY
                                            </Text>
                                          
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
            marginTop:40,
            fontFamily: 'times-new-roman'
        },  
        input: {
            width: 180,
            height: 45,
            fontSize: 20,
            borderRadius:15,
            backgroundColor: 'white',
            marginBottom: 15,
            color: '#1795e6'
        },  
        Header: {
            fontSize: 30,
            color: 'white',
            fontFamily: 'times-new-roman',
            marginBottom: 20,
            marginTop: 100
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
            marginTop: 10,
            height: 45,
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
alignItems: 'center'
        }
      })