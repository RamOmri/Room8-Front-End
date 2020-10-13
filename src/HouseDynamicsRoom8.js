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
import { ScrollView } from 'react-native-gesture-handler';


     export default class HouseDynamicsRoom8 extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                    Cleanliness: 0,
                    Guests: 0,
                    bio: '',
                    rangeYoungest:'',
                    rangeOldest: '',
                    Smoking: 'Select...',
                    account: this.props.route.params.account,
                    language: 'select'
                }
                   // alert(JSON.stringify(this.state.account))
        }

         updateAccount(){

            this.state.account.Cleanliness = this.state.Cleanliness
            this.state.account.Guests = this.state.Guests
            this.state.account.bio = this.state.bio
            this.state.account.rangeYoungest = this.state.rangeYoungest
            this.state.account.rangeOldest = this.state.rangeOldest
            this.state.account.Smoking = this.state.Smoking
            this.state.account.language = this.state.language

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
                        <ScrollView>
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{ flexDirection: 'row'}}>
                                                <Text style = {styles.Header}>Tell us about yourself</Text>
                                                
                                    </View>
                                    <View style={{flexDirection:'column', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20,}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginRight: 20, marginLeft:20, marginTop: 20 }}>
                                                Cleanliness level: {this.state.Cleanliness}</Text>
                                            <Slider
                                                            style={{width: 300, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={100}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Cleanliness: Math.round(val)});} }
                                                        />
                                    </View>

                                    <View style={{flexDirection: 'column', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginRight: 20, marginLeft:20, marginTop: 20 }}>
                                            How often do you have visitors per week: {this.state.Guests} </Text>
                                            <Slider
                                                            style={{width: 300, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={7}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Guests: Math.round(val)});} }
                                                        />
                                    </View>

                                    <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20, marginRight: 20,}}>
                                            Do you smoke? </Text>
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
                                        </MenuOptions>
                                    </Menu>

                                    </View>

                                   
                                    
                                    <View style = {{ marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20, margin:10,}}>
                                            What language do you normally speak: </Text>
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
                                    
                                    <View style = {{ flexDirection: 'column'}}>
                                    {(this.state.account.numberPeople > 1) && (
                                                
                                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 20,}}>
                                                        What is the age range of your group?
                                                    </Text>
                                                    
                                               
                                                )}
                                         <View style = {{ flexDirection: 'row', marginBottom: 20}}>
                                                   
                                                 {(this.state.account.numberPeople > 1) && (
                                                         <TextInput
                                                         style = {styles.input}
                                                         placeholder = 'Youngest'
                                                         keyboardType = 'numeric'
                                                         placeholderTextColor="#1795e6"
                                                             onChangeText={(name) => this.setState({rangeYoungest: name}) }
                                                             value={this.state.thisName}
                                                             />
                                                 )}

                                                {(this.state.account.numberPeople > 1) && (
                                                         <TextInput
                                                         style = {styles.input}
                                                         placeholder = 'Oldest'
                                                         keyboardType = 'numeric'
                                                         placeholderTextColor="#1795e6"
                                                             onChangeText={(name) => this.setState({rangeOldest: name}) }
                                                             value={this.state.thisName}
                                                             />
                                                 )}
                                            </View>
                                    </View>
                                    <TextInput
                                                                style = {styles.bioInput}
                                                                placeholder = 'Write a short bio and include any important information that might be missing'
                                                                placeholderTextColor="#1795e6"
                                                                    onChangeText={(bio) =>{

                                                                                     this.setState({bio: bio})
                                                                            }  }
                                                                    value={this.state.thisBiography}
                                                                    multiline = {true}
                                                                    //onFocus={() => this.myScrollView.scrollTo({ x: 0, y: 750, animated: true })}
                                                                    />
                                    <View style= {styles.buttonStyle}>
                                                    <TouchableOpacity
                                                    onPress = {()=>{
                                                      this.updateAccount()
                                                      
                                                    }}
                                                    >
                                                    <Text
                                                     style={{color: 'white', fontSize: 15}}
                                                    >Finish</Text>
                                                    </TouchableOpacity>
                                            </View>
                                            

                                    
                        </View>
                        </ScrollView>
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
        bioInput: {
            width: 300,
            textAlign: 'center',
            height: 220,
            fontSize: 20,
            borderRadius:15,
            backgroundColor: 'white',
            marginBottom: 15,
            color: '#1795e6', 
            alignSelf: 'center',
            textAlignVertical: 'top',
        },  
        subeHeader: {
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            margin: 10, 
        },
        input: {
            width: 100,
            height: 50,
            fontSize: 20,
            borderRadius:15,
            backgroundColor: 'white',
            marginBottom: 15,
            color: '#1795e6',
            margin: 10
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