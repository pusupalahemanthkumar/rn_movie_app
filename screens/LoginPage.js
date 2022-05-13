import { StyleSheet, TextInput, View, Text, Image ,TouchableOpacity} from "react-native";
import React,{useState} from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {authenticateAsync} from "../app/reducersAndActions/userReducer"
import { useSelector } from "react-redux";

const LoginPage = ({ navigation }) => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const loginHandler =()=>{
    console.log(email,password);
    dispatch(authenticateAsync(email,password));
    console.log(userData);
    
  }
  
  return (
    <View style={styles.Container}>
      <View style={styles.ImgContainer}>
        <Image
          source={require("../assets/login.png")}
          style={{ width: "80%", height: "80%" }}
        ></Image>

        <Text style={styles.login}>LOGIN</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="mail" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="something@gmail.com"
            onChangeText={(val)=>setEmail(val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(val)=>setPassword(val)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.links}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={loginHandler}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>New User?</Text>
          <TouchableOpacity  onPress={()=>navigation.navigate('Register')}>
            <Text style={styles.links}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  ImgContainer: {
    flex: 0.4,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 0.6,
    alignItems: "center",
  },

  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 50,
    width: "90%",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#E3ECF7",
  },
  inputText: {
    marginLeft: 8,
    fontSize: 16,
    width: "90%",
  },
  links: {
    color: "red",
    fontWeight: "bold",
  },
  footer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 60,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontWeight: "bold",
    color: "grey",
    alignItems: "center",
  },
  login: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FF605B",
  },

  btn: {
    alignItems: "center",
    width: "100%",
  },
  btnContainer: {
    marginTop: 30,
    backgroundColor: "#0D99FF",
    borderRadius: 20,
    width: "50%",
    height: 40,
    justifyContent: "center",
    marginBottom: 30,
  },
  btnText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
