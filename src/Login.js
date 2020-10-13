import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native'

     export default class Login extends React.Component{

        state = {
            email: '',
            password: '',
            account: {}
        }
        handleLogin(){
            this.props.navigation.navigate('mainTab', {params: {
                account: this.state.account
            }, screen: 'Find a ROOM8'})
        }
        render(){
            return(
                <ImageBackground style={styles.container}
                source={require('./img/Background.png')}
                imageStyle={{ resizeMode: 'stretch' }}
              > 
                    <View style={styles.container}>
                        <Text style = {styles.Header}>Start Finding Friends</Text>
                                <TextInput
                            style = {styles.input}
                                placeholder = 'Email'
                                placeholderTextColor="#1795e6"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                />
                                  <TextInput
                            style = {styles.input}
                                placeholder = 'Password'
                                placeholderTextColor="#1795e6"
                                secureTextEntry = {true}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                />
                                
                               <View style = {styles.buttonStyle}>
                                   <TouchableOpacity
                                            onPress = {()=>{
                                                this.handleLogin()
                                            }}
                                            >
                                                
                                            <Text
                                                style={styles.TextButton}
                                            >Login</Text>
                                            </TouchableOpacity>
                                </View>
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
          justifyContent: 'center',
          alignItems: 'center',
        //  backgroundColor: '#424242'
        },
        footerContainer: {
            marginBottom: 30,
        },
        footerText: {
            color: '#1795e6',
            fontWeight: 'bold',
            fontSize: 12,
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
            marginBottom: 20
        },
        TextButton: {
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        buttonStyle: {
            backgroundColor:'#1795e6',
            width: 120,
            marginTop: 20,
            height: 40,
            borderRadius: 15,
            alignItems:'center',
            justifyContent: 'center'
        }
      })