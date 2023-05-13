import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required("Required")
      .test(
        "no-sql-injection",
        "Username cannot contain ;, --, /*, or */",
        (value) => {
          if (value) {
            return !/;|--|\/\*|\*\//.test(value);
          }
          return true;
        }
      ),
    password: Yup.string()
      .required("Required")
      .test(
        "no-sql-injection",
        "Password cannot contain ;, --, /*, or */",
        (value) => {
          if (value) {
            return !/;|--|\/\*|\*\//.test(value);
          }
          return true;
        }
      ),
  });

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("HomeMenu");
      }}
      validationSchema={loginSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        touched,
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              accessibilityLabel="Enter your phone number, username, or email"
              style={styles.textInput}
              onChange={(e) => setUsername(e.nativeEvent.text)}
              placeholder="Phone number, username, or email"
              placeholderTextColor="gray"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <TextInput
              accessibilityLabel="Enter your password"
              style={styles.textInput}
              onChange={(e) => setPassword(e.nativeEvent.text)}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Forgot password? Press this link to reset your password."
              style={
                styles.forgotPasswordContainer
              } /* onPress={nav to forgot password screen} */
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </Pressable>

            <Button
              accessibilityLabel="Log in"
              buttonStyle={{ backgroundColor: "rgb(96,179,247)" }}
              titleStyle={{ color: "white" }}
              onPress={handleSubmit}
              title="Login"
              disabled={!isValid}
            />

            <Pressable
              accessibilityRole="link"
              accessibilityLabel="Don't have an account? Press this link to sign up."
              onPress={() => navigation.navigate("SignupScreen")}
              style={
                styles.goToSignup
              } /* onPress={nav to forgot password screen} */
            >
              <View style={styles.goToSignupContainer}>
                <Text style={styles.goToSignupText}>
                  Don't have an account?
                </Text>
                <Text style={styles.goToSignupLink}>Sign up</Text>
              </View>
            </Pressable>
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 30,
  },
  textInput: {
    color: "black",
    fontSize: 16,
    borderColor: "gray",
    borderWidth: 0.5,
    height: 50,
    paddingLeft: 10,
  },
  error: {
    fontSize: 10,
    color: "red",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 12,
    color: "rgb(71,105,144)",
  },
  goToSignup: {
    alignItems: "center",
  },
  goToSignupContainer: {
    flexDirection: "row",
    gap: 5,
  },
  goToSignupText: {
    fontSize: 15,
    color: "black",
  },
  goToSignupLink: { fontSize: 15, color: "rgb(47,149,246)", fontWeight: 600 },
});

export default LoginForm;
