/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//  Require:
// You can have dynamic loading where the loaded module name isn't predefined /static, or where you conditionally load a module only if it's "truly required" (depending on certain code flow).
// Loading is synchronous. ie. if you have multiple requires, they are loaded and processed one by one.
// ES6 Imports:
// You can use named imports to selectively load only the pieces you need. That can save memory.
// Import can be asynchronous (and in current ES6 Module Loader, it in fact is) and can perform a little better.


// // This is the require way of using imports. Here we require the whole library and then name the classes we need.
// var React = require('react-native');
// var {
// 	AppRegistry,
// 	StyleSheet,
// 	Text,
// 	Image,
// 	View,
// 	NavigatorIOS
// } = React;

// This is the EM6 way of importing components. We only import those classes we need.
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TextInput,
  Image,
  View,
  NavigatorIOS
} from 'react-native';

// class WelcomeScreen extends Component {
class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.container} >
	  <Image style={styles.background} source={require('./img/birds.jpg')} />
        <Text style={styles.welcome}>
          My Demo App!
        </Text>
		<TextInput placeholder="email" />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
       </View>
    );
  }
}

// class ReactNativeDemo extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         style={styles.container}
//         initialRoute={{
//           title: 'Property Finder',
//           component: WelcomeScreen,
//         }}/>
//     );
//   }
// }

const styles = StyleSheet.create({
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  background: {
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// arrow function way
AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
// of writing this
// AppRegistry.registerComponent('ReactNativeDemo', function() { return ReactNativeDemo });
