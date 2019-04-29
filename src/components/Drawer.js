import {
  Text,
  View,
  H3,
  ListItem,
} from 'native-base';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Animated, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  SafeAreaView,
  withNavigation,
} from 'react-navigation';
import { routes } from '../Router';
import { utils } from '../styles/utils.style';
import { text } from '../styles/text.style';

class Drawer extends Component {
  state = {
    user: null,
  };

  componentDidMount() {

  }

  render() {
    const { navigation, drawerOpenProgress } = this.props;
    const translateX = drawerOpenProgress.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
    const { user } = this.state;

    return (
      <Animated.View style={{ transform: [{ translateX }] }}>
        <ScrollView>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View
              style={[
                utils.paddingVertical40,
                {
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 200,
                },
              ]}
            >
              <Fragment>
                <Avatar rounded size="large" title="My username" />
                <H3 center>
                  User Name
                </H3>
              </Fragment>
            </View>
            {
              routes.map(data => (
                <ListItem
                  key={data.name}
                  button
                  style={{
                    ...data.containerStyle,
                    width: '100%',
                    marginLeft: 0,
                    paddingHorizontal: 20,
                    marginRight: 0,
                  }}
                  onPress={data.onPress
                    ? data.onPress(this.props)
                    : () => navigation.navigate(data.route, data.params)}
                >
                  <Text style={{
                    ...data.textStyle,
                  }}
                  >
                    {data.name}
                  </Text>
                </ListItem>
              ))
            }
            <ListItem
              button
              style={{
                width: '100%',
                marginLeft: 0,
                paddingHorizontal: 20,
                marginRight: 0,
              }}
              onPress={this.handleLogout}
            >
              <Text style={[text.textDanger]}>
                Se déconnecter
              </Text>
            </ListItem>
          </SafeAreaView>
        </ScrollView>
      </Animated.View>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object.isRequired,
  drawerOpenProgress: PropTypes.object.isRequired,
};

export default withNavigation(Drawer);
