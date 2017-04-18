import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import Browser from './BrowserView';

class MainApp extends Component {

  state = {
    links: [
      {title:'myBlog', url: 'https://github.com/bitboxk'},
      {title:'Webtoon', url: 'http://www.webtoons.com/id/'},
      {title:'Komikid', url: 'http://www.komikid.com/'},
      {title:'Ngomik', url: 'https://ngomik.com/'},
    ],
  };

  onPressButton(url) {
    this.refs.navigator.push({ url });
  }

  renderButton = (btn, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onPressButton(btn.url)}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Browser url={route.url} navigator={navigator} />
      );
    }
    return (
	<View style={styles.content}>
		<Text>Home</Text>
	<View>
	{this.state.links.map(this.renderButton)}
	</View>
	</View>
	);
}

  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 4,
    margin: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MainApp;