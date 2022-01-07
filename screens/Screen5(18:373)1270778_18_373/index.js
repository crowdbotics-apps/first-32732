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
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0115/f7cd/eef05e97abaf84e92d3b5dba5a552468"
        }}
        style={styles.TouchableOpacity_18_439}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_540"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd57/a2d8/5ff8b3426f140268dffdf633c3e092eb"
        }}
        style={styles.ImageBackground_18_448}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5fc/8d59/a56d31f81fcdb8e96353bcaacf80ce67"
        }}
        style={styles.ImageBackground_18_456}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7be/f9a5/7d793e8199b579b37796b882c64b7ca4"
        }}
        style={styles.ImageBackground_18_464}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/025d/73fc/579b567a9b57815fe28971fc55ace3f7"
        }}
        style={styles.ImageBackground_18_472}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b49/0899/ae9acf10d365e48903ed9d4af3d0ca2b"
        }}
        style={styles.ImageBackground_18_459}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fca/feaf/dea6a55bf16a52d72b8b84e2730b951e"
        }}
        style={styles.ImageBackground_18_465}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0876/eb92/1d5781e95339bf40fe49ea6cf8017f15"
        }}
        style={styles.ImageBackground_18_473}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf8/539d/508f9dbf776a6fe703ef3621c73e3435"
        }}
        style={styles.ImageBackground_18_441}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2869/784b/2bb2890b4615df405db7b8af96ca1dda"
        }}
        style={styles.ImageBackground_18_449}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa40/70e7/d6259b6f0fde6e4efc116323a8e50eb1"
        }}
        style={styles.ImageBackground_18_457}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a7b/3176/d9f14deb6562365397ae76edbaff0d1c"
        }}
        style={styles.ImageBackground_18_466}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f5/0dfa/7b0209f10330646090e3188e5093a99f"
        }}
        style={styles.ImageBackground_18_474}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc29/9c7e/ea45f7c7165f1c4fbffec3bbb8580446"
        }}
        style={styles.ImageBackground_18_460}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6514/92aa/76ced3bb4e43a04d6da23ee9e3df3ff5"
        }}
        style={styles.ImageBackground_18_467}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69f/1343/95eb02cf9e8db482626a4f8d36c65ce5"
        }}
        style={styles.ImageBackground_18_475}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fa6/9772/53db5c412c003d22a72c61afd9b3b673"
        }}
        style={styles.TouchableOpacity_18_440}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_613"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f69/00e2/09a6cf04ada0e10e9b92726a4c939ab2"
        }}
        style={styles.ImageBackground_18_450}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bd2/1f07/e5286c9feb4fc90e054e2c6f1c27c3d4"
        }}
        style={styles.ImageBackground_18_458}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76b2/e4ca/c9878db14d7dfb4ad495614cf9435b51"
        }}
        style={styles.ImageBackground_18_468}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/494c/5bbc/fb64c76934e614fc59191fc4fd8d5fee"
        }}
        style={styles.ImageBackground_18_476}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca9f/5ede/fe46d28099bcf62c828ff2ba391d0dac"
        }}
        style={styles.ImageBackground_18_461}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c2b/516b/cbb2545780d0705bb4bd694aaccfe838"
        }}
        style={styles.ImageBackground_18_469}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a631/1063/9dbfce5292fd69b7fe9e3807c36f0558"
        }}
        style={styles.ImageBackground_18_477}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2384/35da/70d3d4fa603a3f4eb6450e0687ea16eb"
        }}
        style={styles.ImageBackground_18_442}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f09/1041/e24cc7abc494824bbeb61a98bda86659"
        }}
        style={styles.ImageBackground_18_452}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0061/940e/f868f204c8efb3d356f881135788c98d"
        }}
        style={styles.ImageBackground_18_454}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ec4/1a0d/af2f9542e6a522f42d4dabc748ca03a5"
        }}
        style={styles.ImageBackground_18_470}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/943b/9462/abf5e4cab4f6a19d20afe88e793f348e"
        }}
        style={styles.ImageBackground_18_478}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dae/0fda/dcc402b3a9b3a61e04c3ba1d1e2b4e33"
        }}
        style={styles.ImageBackground_18_451}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ba/f4b4/51fe4690e067e1dd82ce1b0c8d45d151"
        }}
        style={styles.ImageBackground_18_453}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c631/6169/7bf76c67dc7750205dfa710d7b7b48b2"
        }}
        style={styles.ImageBackground_18_455}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f33/9b3e/c1eacd04c1c724ef34423168b75a15b3"
        }}
        style={styles.ImageBackground_18_471}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/6266/40284746f6f5be5129c7c9cf08310a09"
        }}
        style={styles.ImageBackground_18_479}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d3a/36f6/2bff49525d7998fe4296dba564e6a605"
        }}
        style={styles.TouchableOpacity_18_462}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_604"))
        }
      />
      <View style={styles.View_18_631}>
        <View style={styles.View_18_489} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc7/5a24/113110709962c5ebdad89293b7cd3b02"
          }}
          style={styles.TouchableOpacity_18_490}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("14_13"))
          }
        />
        <View style={styles.View_18_494}>
          <Text style={styles.Text_18_494}>Your vault has 35 photos</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(156, 115, 217, 1)" },
  View_2: { height: hp("156%") },
  TouchableOpacity_18_439: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%")
  },
  ImageBackground_18_448: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("30%")
  },
  ImageBackground_18_456: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("72%")
  },
  ImageBackground_18_464: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("100%")
  },
  ImageBackground_18_472: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("128%")
  },
  ImageBackground_18_459: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("86%")
  },
  ImageBackground_18_465: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("114%")
  },
  ImageBackground_18_473: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("142%")
  },
  ImageBackground_18_441: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("16%")
  },
  ImageBackground_18_449: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("30%")
  },
  ImageBackground_18_457: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("72%")
  },
  ImageBackground_18_466: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("100%")
  },
  ImageBackground_18_474: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("128%")
  },
  ImageBackground_18_460: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("86%")
  },
  ImageBackground_18_467: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("114%")
  },
  ImageBackground_18_475: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("142%")
  },
  TouchableOpacity_18_440: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("16%")
  },
  ImageBackground_18_450: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("30%")
  },
  ImageBackground_18_458: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("72%")
  },
  ImageBackground_18_468: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("100%")
  },
  ImageBackground_18_476: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("128%")
  },
  ImageBackground_18_461: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("86%")
  },
  ImageBackground_18_469: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("114%")
  },
  ImageBackground_18_477: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("142%")
  },
  ImageBackground_18_442: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("16%")
  },
  ImageBackground_18_452: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("44%")
  },
  ImageBackground_18_454: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("72%")
  },
  ImageBackground_18_470: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("100%")
  },
  ImageBackground_18_478: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("128%")
  },
  ImageBackground_18_451: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("30%")
  },
  ImageBackground_18_453: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("58%")
  },
  ImageBackground_18_455: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("86%")
  },
  ImageBackground_18_471: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("114%")
  },
  ImageBackground_18_479: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("142%")
  },
  TouchableOpacity_18_462: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("44%")
  },
  View_18_631: {
    width: wp("105%"),
    minWidth: wp("105%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-1%")
  },
  View_18_489: {
    width: wp("105%"),
    minWidth: wp("105%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  TouchableOpacity_18_490: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_18_494: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_18_494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.665241241455078,
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
