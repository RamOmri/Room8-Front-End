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


     export default class BuildingStructure extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                    Cleanliness: 0,
                    Guests: 0,
                    Smoking: 'Select...',
                    Weed: ['Select...', false],
                    account: this.props.route.params.account,
                    language: 'select'
                }
                   // alert(JSON.stringify(this.state.account))
        }

         updateAccount(){

            this.state.account.Cleanliness = this.state.Cleanliness
            this.state.account.Guests = this.state.Guests
            this.state.account.Smoking = this.state.Smoking
            this.state.account.Weed = this.state.Weed[1]
            this.state.account.language = this.state.language

            this.props.navigation.navigate('registerStack', {params: {
                account: this.state.account
            }, screen: 'amenities' })
        }
        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{ flexDirection: 'row'}}>
                                                <Text style = {styles.Header}>HOUSE DYNAMICS CONTINUED</Text>
                                                
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginTop: 10, marginRight: 20}}>
                                            Cleanliness level </Text>
                                            <Slider
                                                            style={{width: 190, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={100}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Cleanliness: val});} }
                                                        />
                                    </View>

                                    <View style={{flexDirection:'row'}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginTop: 10, marginRight: 20,}}>
                                            Visitors per-week </Text>
                                            <Slider
                                                            style={{width: 190, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={10}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Guests: val});} }
                                                        />
                                    </View>

                                    <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20, marginRight: 20,}}>
                                            Are there smokers? </Text>
                                    <Menu>
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
                                                    marginTop:10
                                                },
                                                triggerTouchable: {
                                                    underlayColor: 'darkblue',
                                                    activeOpacity: 70,
                                                },
                                                
                                                
                                            }}  text={this.state.Smoking} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({Smoking: 'Yes'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({Smoking: 'No'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({Smoking: 'Outside only'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Outside only</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>

                                    </View>

                                    <View style = {{flexDirection: 'row', marginBottom: 5}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20, marginRight: 20,}}>
                                            Do any of you smoke weed? </Text>
                                    <Menu>
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
                                                    marginTop:10
                                                },
                                                triggerTouchable: {
                                                    underlayColor: 'darkblue',
                                                    activeOpacity: 70,
                                                },
                                                
                                                
                                            }}  text={this.state.Weed} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({Weed: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({Weed: ['No', false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                                   
                                        </MenuOptions>
                                    </Menu>

                                    
                                    </View>
                                    
                                    <View style = {{ marginBottom: 60}}>

                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20, margin:10,}}>
                                            What language is primarily spoken in your household? </Text>
                                    <Menu>
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
                                                    marginTop:10,
                                                    width: 100,
                                                    marginLeft:50,
                                                },
                                                triggerTouchable: {
                                                    underlayColor: 'darkblue',
                                                    activeOpacity: 70,
                                                },
                                                
                                                
                                            }}  text={this.state.language} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({language: 'English'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>English</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Hebrew'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Hebrew</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Arabic'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Arabic</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Russian'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Russian</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Spanish'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Spanish</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Portuguese'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Portuguese</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({language: 'Other'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Other (please specify in your bio)</Text>
                                                    </MenuOption>
                                                   
                                        </MenuOptions>
                                    </Menu>

                                    </View>
                                   
                                    <View style= {styles.buttonStyle}>
                                                    <TouchableOpacity
                                                    onPress = {()=>{
                                                      this.updateAccount()
                                                      
                                                    }}
                                                    >
                                                    <Text
                                                     style={{color: 'white', fontSize: 15}}
                                                    >Continue...</Text>
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