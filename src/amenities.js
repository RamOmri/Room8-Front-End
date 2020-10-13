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

     export default class BuildingStructure extends React.Component{
        
        constructor(props){
                    super(props)
                    this.state = {
                        account: this.props.route.params.account,
                        TV: false,
                        Wifi: false,
                        Aircon: false,
                        Laundry: false,
                        Dishwasher: false,
                        Bathroom: false,
                        Storage: false,
                        Garden: false,
                        Deck: false,
                        Lift: false,
                        Parking: false,
                   
                }
                    alert(JSON.stringify(this.state.account))
        }

            updateAccount(){
                this.state.account.amenities = {
                  TV: this.state.TV,
                  Wifi: this.state.Wifi,
                  Aircon: this.state.Aircon,
                  Laundry: this.state.Laundry,
                  Dishwasher: this.state.Dishwasher,
                  Bathroom: this.state.Bathroom,
                  Storage: this.state.Storage,
                  Garden: this.state.Garden,
                  Deck: this.state.Deck,
                  Lift: this.state.Lift,
                  Parking: this.state.Parking
                }
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
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{ flexDirection: 'row'}}>
                                                <Text style = {styles.Header}>Amenities</Text>
                                                
                                    </View>
                                   
                                        <Text style = {styles.subeHeader}> Select all amenities available at the property below</Text>
                                         <ScrollView >
                                            <View style={{marginBottom: 15}}>
                                            <CheckBox
                                                center
                                                title='TV access'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.TV}
                                                onPress ={()=>{
                                                  if(this.state.TV === true){
                                                    this.setState({TV: false})}
                                                  else{ this.setState({TV: true})}
                                                }}
                                              />
                                          </View>
                                        
                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Wifi'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Wifi}
                                                onPress ={()=>{
                                                  if(this.state.Wifi === true){
                                                    this.setState({Wifi: false})}
                                                  else{ this.setState({Wifi: true})}
                                                }}
                                              />
                                          </View>

                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Aircon'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Aircon}
                                                onPress ={()=>{
                                                  if(this.state.Aircon === true){
                                                    this.setState({Aircon: false})}
                                                  else{ this.setState({Aircon: true})}
                                                }}
                                              />
                                          </View>

                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Laundry'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Laundry}
                                                onPress ={()=>{
                                                  if(this.state.Laundry === true){
                                                    this.setState({Laundry: false})}
                                                  else{ this.setState({Laundry: true})}
                                                }}
                                              />
                                          </View>

                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Dishwasher'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Dishwasher}
                                                onPress ={()=>{
                                                  if(this.state.Dishwasher === true){
                                                    this.setState({Dishwasher: false})}
                                                  else{ this.setState({Dishwasher: true})}
                                                }}
                                              />
                                          </View>


                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Private Bathroom'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Bathroom}
                                                onPress ={()=>{
                                                  if(this.state.Bathroom === true){
                                                    this.setState({Bathroom: false})}
                                                  else{ this.setState({Bathroom: true})}
                                                }}
                                              />
                                          </View>


                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Storage'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Storage}
                                                onPress ={()=>{
                                                  if(this.state.Storage === true){
                                                    this.setState({Storage: false})}
                                                  else{ this.setState({Storage: true})}
                                                }}
                                              />
                                          </View>


                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Garden'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Garden}
                                                onPress ={()=>{
                                                  if(this.state.Garden === true){
                                                    this.setState({Garden: false})}
                                                  else{ this.setState({Garden: true})}
                                                }}
                                              />
                                          </View>

                                          <View style={{marginBottom: 15}}>
                                              <CheckBox
                                                center
                                                title='Deck or Patio'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Deck}
                                                onPress ={()=>{
                                                  if(this.state.Deck === true){
                                                    this.setState({Deck: false})}
                                                  else{ this.setState({Deck: true})}
                                                }}
                                              />
                                          </View>

                                          <View style={{marginBottom: 30}}>
                                              <CheckBox
                                                center
                                                title='Lift'
                                                checkedIcon={<Image  source = {require('./img/tick.png')} />}
                                                uncheckedIcon={<Image  source = {require('./img/cross.png')} />}
                                                checked={this.state.Lift}
                                                onPress ={()=>{
                                                  if(this.state.Lift === true){
                                                    this.setState({Lift: false})}
                                                  else{ this.setState({Lift: true})}
                                                }}
                                              />
                                          </View>
                                </ScrollView>

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
            marginBottom: 10,
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
        }
      })