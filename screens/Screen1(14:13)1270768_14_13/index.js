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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/184e/0449/7a4fb181795a5bae6f8c070ea1523cf0"
        }}
        style={styles.ImageBackground_14_31}
      />
      <View style={styles.View_14_14}>
        <View style={styles.View_14_15}>
          <View style={styles.View_14_16}>
            <View style={styles.View_14_17} />
            <View style={styles.View_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1b/567d/67d0a27213d3ac72f9319836e80031b8"
                }}
                style={styles.ImageBackground_14_19}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9f/3019/788d7a3abaf5bd4ea80526fa27649492"
            }}
            style={styles.ImageBackground_14_20}
          />
        </View>
        <View style={styles.View_14_21}>
          <Text style={styles.Text_14_21}>Welcome to Photo Vault!</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_14_39}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_174"))
        }
      >
        <View style={styles.View_14_32} />
        <View style={styles.View_14_33}>
          <View style={styles.View_14_34}>
            <Text style={styles.Text_14_34}>Enter PIN</Text>
          </View>
          <View style={styles.View_14_35}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a21/8a8d/2181e44b5c8fb9f8bd6bb0881d93ba6a"
              }}
              style={styles.ImageBackground_I14_35_13_17}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_14_41}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_632"))
        }
      >
        <Text style={styles.Text_14_41}>Forgot PIN?</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(156, 115, 217, 1)" },
  View_2: { height: hp("112%") },
  ImageBackground_14_31: {
    width: wp("252%"),
    minWidth: wp("252%"),
    height: hp("142%"),
    minHeight: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-76%"),
    top: hp("-63%")
  },
  View_14_14: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("25%")
  },
  View_14_15: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_14_16: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_17: {
    width: wp("21%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(83, 43, 166, 1)",
    borderWidth: 12.742504119873047,
    borderTopLeftRadius: 860.1189575195312,
    borderTopRightRadius: 860.1189575195312,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_14_18: {
    width: wp("35%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_14_19: {
    width: wp("35%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_20: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_14_21: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_14_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34.50482940673828,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_14_39: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("74%")
  },
  View_14_32: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_14_33: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_14_34: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_14_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.87045669555664,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_35: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_35_13_17: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_14_41: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_14_41: {
    color: "rgba(234, 220, 255, 1)",
    fontSize: 11.393418312072754,
    fontWeight: "500",
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
