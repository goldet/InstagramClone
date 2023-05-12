import { View, Text, Button, Pressable } from "react-native";
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
        navigation.navigate("BottomTab");
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
          <View style={{ gap: 10, padding: 30 }}>
            <TextInput
              style={{
                color: "black",
                fontSize: 16,
                borderColor: "gray",
                borderWidth: 0.5,
                height: 50,
                paddingLeft: 10,
              }}
              onChange={(e) => setUsername(e.nativeEvent.text)}
              placeholder="Phone number, username, or email"
              placeholderTextColor="gray"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                }}
              >
                {errors.username}
              </Text>
            )}

            <TextInput
              style={{
                color: "black",
                fontSize: 16,
                borderColor: "gray",
                borderWidth: 0.5,
                height: 50,
                paddingLeft: 10,
              }}
              onChange={(e) => setPassword(e.nativeEvent.text)}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                }}
              >
                {errors.password}
              </Text>
            )}
            <Pressable
              style={{
                alignItems: "flex-end",
              }} /* onPress={nav to forgot password screen} */
            >
              <Text style={{ fontSize: 12, color: "rgb(71,105,144)" }}>
                Forgot password?
              </Text>
            </Pressable>

            <Button
              buttonStyle={{ backgroundColor: "rgb(96,179,247)" }}
              titleStyle={{ color: "white" }}
              onPress={handleSubmit}
              title="Login"
              disabled={!isValid}
            />

            <Pressable 
            onPress={() => navigation.navigate("SignupScreen")}
              style={{
                alignItems: "center",
              }} /* onPress={nav to forgot password screen} */
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ fontSize: 15, color: "black" }}>
                  Don't have an account?
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "rgb(47,149,246)",
                    fontWeight: 600,
                  }}
                >
                  Sign up
                </Text>
              </View>
            </Pressable>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
