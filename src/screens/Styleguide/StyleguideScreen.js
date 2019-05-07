import React from 'react';
import {
  Container, Header, Content, Button, Icon, Left, Right, Body, Title, H1,
} from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Tiles from '../../components/Tiles';
import { layout } from '../../styles/layout.style';
import fakeData from './fakeData';

const StyleguideScreen = ({ navigation }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Styleguide</Title>
      </Body>
      <Right />
    </Header>
    <Content style={[layout.body]}>
      <H1>
        Tiles
      </H1>

      <Tiles items={fakeData.tiles} />
    </Content>
  </Container>
);

export default withNavigation(StyleguideScreen);

StyleguideScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
