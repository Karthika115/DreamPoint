import React, {Component} from 'react';
import {LoginManager} from 'react-native-fbsdk';
//import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component {

  constructor(props){
    super(props)
    this.state={
      username :"",
      password :"",
      confirmpassword:""
    }

  }

  validate_field=()=>{
    const {username , password, confirmpassword} = this.state
    if(username ==""){
      alert("Please fill a username")
      return false
    }else if (password =="") {
      alert("Please fill a password")
      return false
    }
    else if (confirmpassword =="") {
      alert("Please confirm password")
      return false
    }
    return true

  }

  making_api_call=()=>{
    if(this.validate_field()){
      alert("Successfully login")

    }
  }
