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
            numberPeople: ['please select...', 0],
            lookingFor: ['please select...', 0],
            hasHousing: ['please select...', false],
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
                                     
                                    
                                }}  text={this.state.numberPeople[0]} />
                                <MenuOptions>
                                    <MenuOption onSelect={() => this.setState({numberPeople: ['One person', 1]})} >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>One person</Text>
                                        </MenuOption>

                                        <MenuOption onSelect={() => this.setState({numberPeople: ['Two people', 2]})} >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>Two people</Text>
                                        </MenuOption>

                                            <MenuOption onSelect={() => this.setState({numberPeople: ['Three people', 3]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Three people</Text>
                                            </MenuOption>

                                            <MenuOption onSelect={() => this.setState({numberPeople: ['Four people', 4]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Four people</Text>
                                            </MenuOption>
                                            <MenuOption onSelect={() => this.setState({numberPeople: ['Property manager', 0]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Property manager</Text>
                                            </MenuOption>
                                    </MenuOptions>
                            </Menu>
                        </View>


                        <View style = {{flexDirection:'row', marginBottom: 35}}>
                            <Text style = {{marginRight: 20, marginTop: 20, fontSize: 30, color: '#1795e6', fontFamily:'times-new-roman' }}>
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
                                     
                                    
                                }}  text={this.state.lookingFor[0]} />
                                <MenuOptions>
                                    <MenuOption onSelect={() => this.setState({lookingFor: ['One person', 1]})} >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>One person</Text>
                                        </MenuOption>

                                        <MenuOption onSelect={() => this.setState({lookingFor: ['Two people', 2]})} >
                                        <Text style={{color: '#1795e6', fontSize: 20}}>Two people</Text>
                                        </MenuOption>

                                            <MenuOption onSelect={() => this.setState({lookingFor: ['Three people', 3]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Three people</Text>
                                            </MenuOption>

                                            <MenuOption onSelect={() => this.setState({lookingFor: ['Four people', 4]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Four people</Text>
                                            </MenuOption>
                                            <MenuOption onSelect={() => this.setState({lookingFor: ['Any', 0]})} >
                                             <Text style={{color: '#1795e6', fontSize: 20}}>Any</Text>
                                            </MenuOption>
                                    </MenuOptions>
                            </Menu>
                            
                        </View>
                        <View style = {{alignItems: 'center', justifyContent: 'center', marginBottom:80}}>
                                <Text style = {{color: 'white', fontSize: 20, textAlign: 'center' }}> 
                                Are you looking for housing or more roommates?</Text>

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
                                            marginTop:20
                                        },
                                        triggerTouchable: {
                                            underlayColor: 'darkblue',
                                            activeOpacity: 70,
                                        },
                                        
                                        
                                    }}  text={this.state.hasHousing[0]} />
                                        <MenuOptions>
                                                    <MenuOption onSelect={() => this.setState({hasHousing: ['Looking for housing', false]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Looking for housing</Text>
                                                    </MenuOption>
                                                    <MenuOption onSelect={() => this.setState({hasHousing: ['Looking for roommates', true]})} >
                                                        <Text style={{color: '#1795e6', fontSize: 17}}>Looking for roommates</Text>
                                                    </MenuOption>
                                        </MenuOptions>
                                </Menu>
                                    
                        </View>
            <View style= {styles.buttonStyle}>
                                                    <TouchableOpacity
                                                    onPress = {()=>{
                                                        this.props.navigation.navigate('registerStack', {params: {numberPeople: this.state.numberPeople[1], lookingFor: this.state.lookingFor[1], hasHousing: this.state.hasHousing[1], userIndex: 0}, screen: 'usersProfile'})
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