import React, {Component} from 'react';
import {LoginManager} from 'react-native-fbsdk';
//import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      username :"",
      password :""
    }

  }

  validate_field=()=>{
    const {username , password} = this.state
    if(username ==""){
      alert("Please fill username")
      return false
    }else if (password =="") {
      alert("Please fill password")
      return false
    }
    return true

  }

  making_api_call=()=>{
    if(this.validate_field()){
      alert("Successfully login")

    }
  }

  fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile','publish_actions']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          console.log('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function (error) {
        console.log('Login failed with error: ' + error);
      }
    );
  }

  componentDidMount() {
    this.setupGoogleSignin();
  }

  googleAuth() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: settings.iOSClientId,
        webClientId: settings.webClientId,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }
  render() {
    return (

      <View style ={{ width :"100%", height :"100%", justifyContent:"center", alignItems: "center",}}>

        <TextInput placeholder={"Enter the Username"}
        onChangeText={(value)=> this.setState({username : value})}
        style={{height : 42, width : "80%", borderBottomWidth : 2}}/>

        <TextInput placeholder={"Enter the Password"}
        onChangeText={(value)=> this.setState({password : value})}
        style={{height : 42, width : "80%", borderBottomWidth : 2, marginTop :"5%"}}/>

        <View style={{marginTop :"15%", width :"80%",ustifyContent:"center", alignItems: "center"}}>
        <TouchableOpacity style ={{ borderWidth : 1, height : 42, width : "70%", justifyContent:"center",
        alignItems: "center", borderRadius : 50, backgroundColor: "lightblue"}}
        onPress={()=> this.making_api_call()}>

          <Text> Login </Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={this.fbAuth.bind(this)}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.googleAuth.bind(this)}>
        <Text>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.googleAuth.bind(this)}>
        <Text>New User Sign Up</Text>
        </TouchableOpacity>

      </View>
      <Text>{"username ==> "+this.state.username}</Text>
      <Text>{"password ==> "+this.state.password}</Text>
      </View>
    );
  }
}
