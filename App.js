/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import moment from 'moment-timezone';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Clock extends React.Component{
  render(): React$Node {
    return(
        <Text>{this.props.name} - {this.props.time}</Text>
    )
  }
}

const WorldClock = (props) => {
  return (
      var time = moment().tz(props.city).format('HH:mm Z');
      let message = {
        name: props.city,
        time: props.time,
      };
      var clock = new Clock (message);
      return clock;
};

class Eats extends React.Component{
  render(): React$Node {
    return (
        <Text>{this.props.name}{'\n'}{this.props.location}{'\n'}</Text>
    )
  }
}
const SemModule = (props) => {
  return (
      <Text>{props.day} - {props.module}</Text>
  )
}

class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native App{'\n'}</Text>;
  }
}

const Greeting = () => {
  return(
      <Text>Welcome to C308 Web Frameworks! </Text>
  );
};

const App: () => React$Node = () => {
  console.log('Test');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Greeting />
              <MyFirstApp />
              <Text>My module Semester:</Text>
              <SemModule day="Monday" module="C348" />
              <SemModule day="Tuesday" module="C308" />
              <Text>Recommended Eats @ RP</Text>
              <Eats name="Sweet Tooth Waffles" location="W6 Level 1, E-canteen"/>
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Eats name="Western Cuisine" location="E1 Level, Koufu" />
              <Eats name="Ayam Peneyet" location="W4/W6 Lawn Canteen" />
              <Text>WorldClock</Text>
              <WorldClock city="Asia/Singapore" />
              <WorldClock city="Europe/London" />
              <WorldClock city="America/New York" />
              <WorldClock city="Europe/Oslo" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
