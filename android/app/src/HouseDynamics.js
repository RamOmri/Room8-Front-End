import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
     import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';
      import RangeSlider from 'react-native-range-slider'
import { ScrollView } from 'react-native-gesture-handler';


     export default class HouseDynamics extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                        ApartmentGender: 'Select...',
                        LoneSoldier: ['Select...', false],
                        Student: ['Select...', false],
                        YoungProfessional: ['Select...', false],
                        PetFriendly: ['Select...', false],
                        Kosher: ['Select...', false],
                        ShomerShabbat: ['Select', false],
                       account: this.props.route.params.account
                }
                alert(JSON.stringify(this.state.account))
                    //alert(JSON.stringify(this.state.account))
        }

        updateAccount(){
            this.state.account.HouseDynamics = {
                ApartmentGender: this.state.ApartmentGender,
                LoneSoldier: this.state.LoneSoldier[1],
                Student: this.state.Student[1],
                YoungProfessional: this.state.YoungProfessional[1],
                PetFriendly: this.state.PetFriendly[1],
                Kosher: this.state.Kosher[1],
                ShomerShabbat: this.state.ShomerShabbat[1],

            }
            this.props.navigation.navigate('registerStack', {params: {
                account: this.state.account
            }, screen: 'HouseDynamicsCont'})
        }
        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                                       <Text style = {styles.Header}>HOUSE DYNAMICS</Text>

                         </View>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Apartment Gender</Text>
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
                                                
                                                
                                            }}  text={this.state.ApartmentGender} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({ApartmentGender: 'Male'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Male</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({ApartmentGender: 'Female'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Female</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({ApartmentGender: 'unspecified'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>unspecified</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>



                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Lone soldiers</Text>
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
                                                
                                                
                                            }}  text={this.state.LoneSoldier} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({LoneSoldier: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({LoneSoldier: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>

                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Students</Text>
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
                                                
                                                
                                            }}  text={this.state.Student} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({Student: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({Student: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>

                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Young Professionals</Text>
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
                                                
                                                
                                            }}  text={this.state.YoungProfessional} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({YoungProfessional: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({YoungProfessional: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>

                               


                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Pet Friendly</Text>
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
                                                
                                                
                                            }}  text={this.state.PetFriendly[0]} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({PetFriendly: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({PetFriendly: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>      

                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Kosher</Text>
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
                                                
                                                
                                            }}  text={this.state.Kosher[0]} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({Kosher: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({Kosher: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                </View>      


                                <View style = {{flexDirection: 'row', marginTop: 10}}>
                                    <Text style = {{fontSize: 18, color: 'white', marginTop: 17, marginRight: 20}}>Shomer Shabbat</Text>
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
                                                
                                                
                                            }}  text={this.state.ShomerShabbat[0]} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({ShomerShabbat: ['Yes', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({ShomerShabbat: ['No',false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                               
                               
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
            marginTop: 30
        },
        TextButton: {
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        buttonStyle: {
            backgroundColor:'blue',
            width: 90,
            marginTop: 10,
            height: 40,
            marginLeft: 10,
            fontSize: 100,
            color: 'white',
            justifyContent: 'center',
alignItems: 'center'
        }
      })