import React, { Component } from 'react';
import {
  Container, Header, Content, Button, Icon, Left, Right, Body, Title, Text,
} from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import * as logger from '../services/logger';

class HomeScreen extends Component {
  componentDidMount() {
    logger.log('In CDM !');
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(HomeScreen);

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
