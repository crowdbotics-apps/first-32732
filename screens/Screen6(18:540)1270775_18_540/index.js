import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee5/b168/34367a79f84a27ac27414211c6ae8bd9"
        }}
        style={styles.ImageBackground_18_602}
      />
      <View style={styles.View_18_596} />
      <TouchableOpacity
        style={styles.TouchableOpacity_18_597}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_373"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/565e/c126/688c4d90ab4be17d73e095442de7733c"
          }}
          style={styles.ImageBackground_I18_597_18_47}
        />
      </TouchableOpacity>
      <View style={styles.View_18_603}>
        <Text style={styles.Text_18_603}>plant.jpg</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(156, 115, 217, 1)" },
  View_2: { height: hp("112%") },
  ImageBackground_18_602: {
    width: wp("128%"),
    minWidth: wp("128%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("13%")
  },
  View_18_596: {
    width: wp("105%"),
    minWidth: wp("105%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-1%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  TouchableOpacity_18_597: {
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_597_18_47: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_603: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_18_603: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.665241241455078,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
