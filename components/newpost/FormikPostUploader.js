import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import { useNavigation } from '@react-navigation/native';


const placeholderIMG =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the charcter limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeholderIMG);
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 28,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : placeholderIMG }}
              style={{ width: 100, height: 100, borderRadius: 8 }}
            />
            <View style={{ flex: 1, marinLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 18, marginLeft: 10 }}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
              {errors.caption && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  {errors.caption}
                </Text>
              )}
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 28,
              marginTop: 10,
            }}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            placeholder="Enter image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text
              style={{
                fontSize: 10,
                color: "red",
                marginLeft: 28,
                marginTop: 5,
              }}
            >
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
