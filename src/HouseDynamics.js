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
import Slider from '@react-native-community/slider';

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
                        Cleanliness: 0,
                        Guests: 0,
                        Smoking: 'Select...',
                        language: 'select',
                        bio: '',
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
                bio: this.state.bio,

                Cleanliness: this.state.Cleanliness,
                Guests: this.state.Guests,
                Smoking: this.state.Smoking,
                language: this.state.language
            }
            
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
                               
                               
                                   
                                </View>  

                                <View style={{flexDirection:'column'}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginTop: 10, marginRight: 20}}>
                                            Cleanliness level: {this.state.Cleanliness} </Text>
                                            <Slider
                                                            style={{width: 290, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={100}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Cleanliness: Math.round(val)});} }
                                                        />
                                    </View>

                                    <View style={{flexDirection:'column'}}>
                                        <Text style = {{fontSize: 18, color: 'white', marginTop: 10, marginRight: 20,}}>
                                            How often do you have visitors per-week : {this.state.Guests} </Text>
                                            <Slider
                                                            style={{width: 290, height: 50}}
                                                            minimumValue={0}
                                                            maximumValue={7}
                                                            minimumTrackTintColor="#1795e6"
                                                            maximumTrackTintColor="white"
                                                            onValueChange={val =>{this.setState({Guests: Math.round(val)});} }
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
                                                    >Continue...</Text>
                                                    </TouchableOpacity>
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
            backgroundColor:'#1795e6',
            width: 90,
            marginTop: 20,
            height: 40,
            marginLeft: 100,
            fontSize: 100,
            color: 'white',
            justifyContent: 'center',
alignItems: 'center'
        }
      })