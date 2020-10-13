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
      import { CheckBox, ThemeConsumer } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import SwipeCards from 'react-native-swipe-cards';



class Card extends React.Component {
    constructor(props) {
      super(props);
      console.disableYellowBox = true;
    }
  
    render() {
      return (
        <View style={styles.card}>
          <Image style={styles.cardStyle} source={this.props.image} />
      <Text style={styles.cardText}>{this.props.name}</Text>
        </View>
      )
    }
  }

        
     export default class BuildingStructure extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                        account: this.props.route.params.account,
                       cards: [
                        {name:'four people looking for one more' , image: require('./img/Cardprofile.png')},
                        {name:'three people looking for one more' , image: require('./img/Cardprofile.png')},
                        {name:'two people looking for one more' , image: require('./img/Cardprofile.png')},
                       ]
                   
                }
                   // alert(JSON.stringify(this.state.account))
        }

           handleYes(){

            }
            handleNo(){
                
            }

        render(){
                    return(
                            <ImageBackground style={styles.container}
                            source={require('./img/Background.png')}
                            imageStyle={{ resizeMode: 'stretch' }}
                        > 
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                       <Text style = {styles.Header}>Let's get swiping</Text>
                        <SwipeCards
                                    cards= {this.state.cards}
                                    loop={false}

                                    renderCard={(cardData) => <Card {...cardData} />}
                                    // renderNoMoreCards={() => <NoMoreCards />}
                                    showYup={true}
                                    showNope={true}

                                    handleYup={this.handleYes()}
                                    handleNope={this.handleNo()}
                                    // cardRemoved={this.cardRemoved.bind(this)}
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
            marginBottom: 20
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
            marginBottom: 5,
            marginTop: 20,
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
            alignItems: 'center',
            marginBottom: 15
        },
        cardText:{
            fontSize: 20,
          color: 'white',
          //fontWeight: 'bold',
        },
        card:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        cardStyle: {
            width: 250,
            marginTop: 50,
            height: 250,
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5
        }
      })