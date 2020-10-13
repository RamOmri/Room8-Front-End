import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
     import {
        Menu,
        MenuOptions,
        MenuOption,
        MenuTrigger,
      } from 'react-native-popup-menu';


     export default class BuildingStructure extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                        BuildingType: 'Select...',
                        Furnished: 'Select...',
                        TotalRooms: '',
                        Bathrooms: '',
                        Bedrooms: '',
                        LeaseLength: 'Select...',
                    account: this.props.route.params.account
                }
                    //alert(JSON.stringify(this.state.account))
        }

         updateAccount(){
            this.state.account.BuildingStructure = {
                BuildingType: this.state.BuildingType,
                Furnished: this.state.Furnished,
                TotalRooms: this.state.TotalRooms,
                Bathrooms: this.state.Bathrooms,
                Bedrooms: this.state.Bedrooms,
                LeaseLength: this.state.LeaseLength
            }
            this.props.navigation.navigate('registerStack', {params: {
                account: this.state.account
            }, screen: 'HouseDynamics'})
        }
        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                              <Text style = {styles.Header}>
                                    Building Structure
                                    </Text>
                              
                                 <View style = {{flexDirection: 'row'}}>
                                    <Text style = {styles.subeHeader}> Building Type </Text>
                                        <Menu>
                                            <MenuTrigger customStyles = {{
                                                        triggerText: {
                                                            color: 'white',
                                                        },
                                                        triggerWrapper: {
                                                            padding: 5,
                                                            height: 28,
                                                            width: 100,
                                                            justifyContent: 'center',
                                                            backgroundColor: '#1795e6',
                                                            borderRadius: 7,
                                                            marginTop:10
                                                        },
                                                        triggerTouchable: {
                                                            underlayColor: 'darkblue',
                                                            activeOpacity: 70,
                                                        },
                                                        
                                                        
                                                    }}  text={this.state.BuildingType} />
                                                    <MenuOptions>
                                                            <MenuOption onSelect={() => this.setState({BuildingType: 'House'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>House</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({BuildingType: 'Apartment'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>Apartment</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({BuildingType: 'Duplex'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>Duplex</Text>
                                                            </MenuOption>
                                                </MenuOptions>
                                        </Menu>
                                 </View>

                                 <View style = {{flexDirection: 'row', marginTop: 20}}>
                                    <Text style = {styles.subeHeader}> Furnished </Text>
                                        <Menu>
                                            <MenuTrigger customStyles = {{
                                                        triggerText: {
                                                            color: 'white',
                                                        },
                                                        triggerWrapper: {
                                                            padding: 5,
                                                            height: 28,
                                                            width: 100,
                                                            justifyContent: 'center',
                                                            backgroundColor: '#1795e6',
                                                            borderRadius: 7,
                                                            marginTop:10
                                                        },
                                                        triggerTouchable: {
                                                            underlayColor: 'darkblue',
                                                            activeOpacity: 70,
                                                        },
                                                        
                                                        
                                                    }}  text={this.state.Furnished} />
                                                    <MenuOptions>
                                                            <MenuOption onSelect={() => this.setState({Furnished: 'Yes'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>Yes</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({Furnished: 'No'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>No</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({Furnished: 'Semi'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>Semi</Text>
                                                            </MenuOption>
                                                </MenuOptions>
                                        </Menu>
                                 </View>


                                 <View style = {{flexDirection: 'row', marginTop: 20}}>
                                    <Text style = {styles.subeHeader}> Total number of rooms </Text>
                                    <TextInput
                                                style = {styles.input}
                                                placeholderTextColor="#1795e6"
                                                    onChangeText={(number) => this.setState({TotalRooms: number}) }
                                                    value={this.state.thisName}
                                                    keyboardType = 'numeric'
                                                    />
                                 </View>

                                 <View style = {{flexDirection: 'row', marginTop: 20}}>
                                    <Text style = {styles.subeHeader}> Number of Bathrooms </Text>
                                    <TextInput
                                                style = {styles.input}
                                                placeholderTextColor="#1795e6"
                                                    onChangeText={(number) => this.setState({Bathrooms: number}) }
                                                    value={this.state.thisName}
                                                    keyboardType = 'numeric'
                                                    />
                                 </View>

                                 <View style = {{flexDirection: 'row', marginTop: 20}}>
                                    <Text style = {styles.subeHeader}> Number of Bedrooms </Text>
                                    <TextInput
                                                style = {styles.input}
                                                placeholderTextColor="#1795e6"
                                                    onChangeText={(number) => this.setState({Bedrooms: number}) }
                                                    value={this.state.thisName}
                                                    keyboardType = 'numeric'
                                                    />
                                 </View>

                                 <View style = {{flexDirection: 'row', marginTop: 20}}>
                                    <Text style = {styles.subeHeader}> Lease Length (months) </Text>
                                        <Menu>
                                            <MenuTrigger customStyles = {{
                                                        triggerText: {
                                                            color: 'white',
                                                        },
                                                        triggerWrapper: {
                                                            padding: 5,
                                                            height: 28,
                                                            width: 100,
                                                            justifyContent: 'center',
                                                            backgroundColor: '#1795e6',
                                                            borderRadius: 7,
                                                            marginTop:10
                                                        },
                                                        triggerTouchable: {
                                                            underlayColor: 'darkblue',
                                                            activeOpacity: 70,
                                                        },
                                                        
                                                        
                                                    }}  text={this.state.LeaseLength} />
                                                    <MenuOptions>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '1'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>1</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '2'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>2</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '3'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>3</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '4'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>4</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '5'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>5</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '6'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>6</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '7'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>7</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '8'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>8</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '9'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>9</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '10'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>10</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: '11'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>11</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: 'Yearly'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>Yearly</Text>
                                                            </MenuOption>
                                                            <MenuOption onSelect={() => this.setState({LeaseLength: 'unspecified'})} >
                                                                <Text style={{color: '#1795e6', fontSize: 17}}>unspecified</Text>
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