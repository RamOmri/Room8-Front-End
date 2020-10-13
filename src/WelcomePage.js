import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity, ImageBackground, Alert } from 'react-native'


export default class WelcomePage extends React.Component{

  render(){
            return (
              <ImageBackground style={styles.container}
              source={require('./img/Background.png')}
              imageStyle={{ resizeMode: 'stretch' }}
            > 
                  <View style={styles.container}>
                    
                        <Text style = {styles.Header}>Start Finding Friends</Text>
                            <View style ={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                  onPress = {()=>{
                                    this.props.navigation.navigate('Login')
                                  }}
                                >
                                  <Text
                                    style={styles.Button}
                                  >Login with email </Text>
                                </TouchableOpacity>
                                <Text style = {{fontSize: 15,
                                              color: '#9D0606',
                                              fontWeight: 'bold',
                                              fontSize: 20,
                                              marginLeft: 7,
                                              marginRight: 7}}>
                                  or 
                                </Text>

                                <TouchableOpacity
                                  onPress = {()=>{
                                    this.props.navigation.navigate('registerStack')
                                  }}
                                >
                                  <Text
                                    style={styles.Button}
                                  > Register</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: '#424242'
  },
  Header: {
      fontSize: 30,
      color: 'white',
      fontFamily: 'times-new-roman',
      marginBottom: 5
  },
  Button: {
    fontSize: 15,
    borderBottomWidth: 3,
    color: '#9D0606',
    borderBottomColor: '#9D0606',
    fontWeight: 'bold',
    fontSize: 20
  }
})

//export default WelcomePage