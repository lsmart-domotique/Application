import React from 'react';
import {
  Container, Header, Content, Button, Icon, Left, Right, Body, Title, H1, Grid, Col, Text,
} from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Tiles from '../components/Tiles';
import { layout } from '../styles/layout.style';

const tiles = [
  {
    link: '/chambre-1',
    image: require('../img/room.png'),
    name: 'Chambre 1',
    connectionsNumber: 2,
    hasError: true,
  }, {
    link: '/chambre-2',
    image: require('../img/room.png'),
    name: 'Chambre 2',
    connectionsNumber: 1,
  }, {
    link: '/cuisine',
    image: require('../img/room.png'),
    name: 'Cuisine',
    connectionsNumber: 0,
    hasError: true,
  }, {
    link: '/add',
    name: 'Ajouter une pièce',
    isAddTile: true,
  },
];

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

      <Tiles items={tiles} />
    </Content>
  </Container>
);

export default withNavigation(StyleguideScreen);

StyleguideScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
