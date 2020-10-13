import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
     import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';
      import { DateInput } from 'react-native-date-input';
      import dayjs from 'dayjs';
      import DateTimePickerModal from "react-native-modal-datetime-picker";


     export default class usersProfile extends React.Component{

    constructor(props){
        
        super(props)
        this.state = {
            isDatePickerVisible: false,
            dateStatus: 'select',

            thisName: '',
            thisBirthDate: new Date(),
            thisGender: 'Select Gender',
            thisBiography: '',
            
            // usersProfileToComplete: this.props.route.params.toComplete || this.props.route.params.numberPeople,

            account: this.props.route.params.account || { 
                usersInfo: [{
                    name: '',
                    birthDate: new Date(),
                    Gender: '',
                    Biography: ''
                }]  ,
                lookingFor: this.props.route.params.lookingFor,
            }
            
        }
        alert(JSON.stringify(this.state))
    }
       

     showDatePicker = () => {
        thise.setState({isDatePickerVisible: true})
      };
    
     getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
    
        this.setState({dateStatus: age.toString(), thisBirthDate: DOB, isDatePickerVisible: false})
    }
    hideDatePicker = () =>{
        this.setState({isDatePickerVisible: false})
    }
   handleConfirm = (date) => {
        this.state.isDatePickerVisible = false
        this.setState({birthDate: date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString() })
            this.setState({dateStatus: this.state.birthDate}) 
       
      };

        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                        
                            <ScrollView contentContainerStyle = {{justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
                                    <Text style = {styles.Header}>
                                    GETTING TO KNOW YOU
                                    </Text>

                                        <Text style = {styles.subeHeader}> Please enter your details below</Text>
                            
                                       
                             </ScrollView>
                             
                             <View style = {{justifyContent: 'center', alignContent: 'center', marginTop: 5}}>
                                <TextInput
                                                style = {styles.input}
                                                placeholder = 'Full Name'
                                                placeholderTextColor="#1795e6"
                                                    onChangeText={(name) => this.setState({thisName: name}) }
                                                    value={this.state.thisName}
                                                    />
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
                                                
                                                
                                            }}  text={this.state.thisGender} />
                                              <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({thisGender: 'Female'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Female</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({thisGender: 'Male'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Male</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({thisGender: 'Unspecified'})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Unspecified</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                    </Menu>
                                 <View style = {{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                                     <Text style = {{fontSize: 18, color: 'white', marginTop: 3}}>
                                          Put in your birth-date: </Text>
                                    <Button title={this.state.dateStatus} onPress={()=>{
                                        this.setState({isDatePickerVisible: true})
                                    }} />
                                        <DateTimePickerModal
                                            isVisible={this.state.isDatePickerVisible}
                                            mode="date"
                                            date = {new Date()}
                                            onConfirm={date => this.handleConfirm(date)}
                                            onCancel={() =>{
                                            this.setState({isDatePickerVisible: false})
                                            }}
                                        />
                                </View>
                                       
                               
                                    
                            </View>  
                                   
                                      <ScrollView>
                                            <TextInput
                                                                style = {styles.bioInput}
                                                                placeholder = 'Write a short bio about yourself'
                                                                placeholderTextColor="#1795e6"
                                                                    onChangeText={(bio) =>{

                                                                                     this.setState({thisBiography: bio})
                                                                            }  }
                                                                    value={this.state.thisBiography}
                                                                    multiline = {true}
                                                                    //onFocus={() => this.myScrollView.scrollTo({ x: 0, y: 750, animated: true })}
                                                                    />
                                                <View style= {styles.buttonStyle}>
                                                    <TouchableOpacity
                                                    onPress = {()=>{
                                                       this.state.account.usersInfo[this.state.userIndex] = {
                                                        name: this.state.thisName,
                                                        birthDate: this.state.thisBirthDate,
                                                        Gender: this.state.thisGender,
                                                        Biography: this.state.thisBiography
                                                       }
                                                        this.setState({usersProfileToComplete: this.state.usersProfileToComplete--})
                                                       if(this.state.account.lookingFor === 'a roommate'){
                                                            this.props.navigation.navigate('registerStack', {params: {
                                                                account: this.state.account
                                                            }, screen: 'BuildingStructure'})
                                                       }
                                                       else{
                                                        this.props.navigation.navigate('registerStack', {params: {
                                                            account: this.state.account
                                                        }, screen: 'HouseDynamicsRoom8'})
                                                       }
                                                      
                                                      
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
                                    </ScrollView>

                                    
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
            marginTop:25,
            fontFamily: 'times-new-roman'
        }, 
        subeHeader: {
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
            margin: 2, 
        },
        input: {
            width: 250,
            textAlign: 'center',
            height: 45,
            fontSize: 20,
            borderRadius:15,
            backgroundColor: 'white',
            marginBottom: 1,
            marginTop: 10,
            color: '#1795e6', 
            alignSelf: 'center'
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
        Header: {
            fontSize: 30,
            color: '#1795e6',
            fontFamily: 'times-new-roman',
            marginBottom: 20,
            marginTop: 32,
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
            marginTop: 10,
            height: 45,
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'center'
        }
      })