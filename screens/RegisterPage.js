import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ImgContainer}>
        <Image
          source={require("../assets/sign_up.png")}
          style={{ width: "60%", height: "60%" }}
        ></Image>

        <Text style={styles.signUp}>SIGN UP</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="user" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            autoCapitalize="words"
            placeholder="User Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="mail" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="something@gmail.com"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="phone" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            maxLength={10}
            keyboardType="number-pad"
            placeholder="Contact number"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" color="grey" size={24} />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Existing User?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.links}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  ImgContainer: {
    flex: 0.4,
    paddingTop: 50,
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
    height: 40,
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
  signUp: {
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
