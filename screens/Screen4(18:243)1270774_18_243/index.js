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
        style={styles.TouchableOpacity_18_244}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_13"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3db2/b899/a1d6efa2453df6a58ab678bcad7908d7"
          }}
          style={styles.ImageBackground_I18_244_18_47}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dfa/34c3/7cfad2c3fc14c6aa2e3d4ca7460a7406"
        }}
        style={styles.ImageBackground_18_246}
      />
      <View style={styles.View_18_251} />
      <View style={styles.View_18_252} />
      <View style={styles.View_18_253} />
      <View style={styles.View_18_254} />
      <View style={styles.View_18_255} />
      <View style={styles.View_18_256} />
      <View style={styles.View_18_257} />
      <View style={styles.View_18_258} />
      <View style={styles.View_18_259} />
      <View style={styles.View_18_260} />
      <TouchableOpacity
        style={styles.TouchableOpacity_18_316}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_88"))
        }
      >
        <View style={styles.View_18_261} />
        <View style={styles.View_18_262}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8837/7ccb/8399f0e8973c262a920b131562b6f29a"
            }}
            style={styles.ImageBackground_I18_262_18_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a18b/3ec4/97cc469344103c942282369a1def8f09"
            }}
            style={styles.ImageBackground_I18_262_18_84}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_18_263}>
        <Text style={styles.Text_18_263}>1</Text>
      </View>
      <View style={styles.View_18_266}>
        <Text style={styles.Text_18_266}>4</Text>
      </View>
      <View style={styles.View_18_268}>
        <Text style={styles.Text_18_268}>5</Text>
      </View>
      <View style={styles.View_18_269}>
        <Text style={styles.Text_18_269}>8</Text>
      </View>
      <View style={styles.View_18_270}>
        <Text style={styles.Text_18_270}>0</Text>
      </View>
      <View style={styles.View_18_271}>
        <Text style={styles.Text_18_271}>9</Text>
      </View>
      <View style={styles.View_18_272}>
        <Text style={styles.Text_18_272}>6</Text>
      </View>
      <View style={styles.View_18_273}>
        <Text style={styles.Text_18_273}>7</Text>
      </View>
      <View style={styles.View_18_274}>
        <Text style={styles.Text_18_274}>2</Text>
      </View>
      <View style={styles.View_18_275}>
        <Text style={styles.Text_18_275}>3</Text>
      </View>
      <View style={styles.View_18_276}>
        <View style={styles.View_18_277}>
          <View style={styles.View_18_278} />
          <View style={styles.View_18_279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0449/8636/3e896276907ed87c618ae19dbdfe73b5"
              }}
              style={styles.ImageBackground_18_280}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d866/d386/14e0cf97df3b5ea06d3f92de5dbaff7f"
          }}
          style={styles.ImageBackground_18_281}
        />
      </View>
      <View style={styles.View_18_299} />
      <View style={styles.View_18_298}>
        <Text style={styles.Text_18_298}>Wrong PIN!</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_18_314}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_174"))
        }
      >
        <Text style={styles.Text_18_314}>Try again</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(156, 115, 217, 1)" },
  View_2: { height: hp("112%") },
  TouchableOpacity_18_244: {
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_244_18_47: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_246: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("50%")
  },
  View_18_251: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("64%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_252: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("74%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_253: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("84%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_254: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("64%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_255: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("74%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_256: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("84%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_257: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("94%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_258: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("64%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_259: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("74%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_260: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("84%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  TouchableOpacity_18_316: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("94%")
  },
  View_18_261: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 43, 166, 1)"
  },
  View_18_262: {
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_262_18_83: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I18_262_18_84: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_18_263: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_18_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_266: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_18_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_268: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_18_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_269: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_18_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_270: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_18_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_271: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_18_271: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_272: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_18_272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_273: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_18_273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_274: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_18_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_275: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_18_275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.395217895507812,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_276: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("15%")
  },
  View_18_277: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_278: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 9.649124145507812,
    borderTopLeftRadius: 651.3157958984375,
    borderTopRightRadius: 651.3157958984375,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_18_279: {
    width: wp("27%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_280: {
    width: wp("27%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_281: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_18_299: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("36%"),
    backgroundColor: "rgba(241, 61, 61, 1)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 4
  },
  View_18_298: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_18_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28.161151885986328,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_18_314: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_18_314: {
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
