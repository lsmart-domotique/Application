import React from 'react';
import {
  Container, Header, Content, Button, Icon, Left, Right, Body, Title, H1, Text, Spinner,
} from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Tiles from '../../components/Tiles';
import { layout } from '../../styles/layout.style';
import { utils } from '../../styles/utils.style';
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

      {/* BUTTONS */}
      <H1>
        Buttons
      </H1>

      <Button transparent><Text>Transparent</Text></Button>
      <Button style={[utils.marginBottom10]} rounded><Text>Rounded</Text></Button>
      <Button style={[utils.marginBottom10]} small><Text>Small</Text></Button>
      <Button style={[utils.marginBottom10]}><Text>Default</Text></Button>
      <Button style={[utils.marginBottom10]} large><Text>Large</Text></Button>
      <Button style={[utils.marginBottom10]} danger><Text>Danger</Text></Button>
      <Button style={[utils.marginBottom10]} success><Text>Succes</Text></Button>
      <Button style={[utils.marginBottom10]} iconRight><Text>Primary with icon</Text><Icon name="add" /></Button>
      <Button style={[utils.marginBottom10]} bordered><Text>Secondary</Text></Button>
      <Button style={[utils.marginBottom10]} disabled><Text>Disabled</Text></Button>
      <Button style={[utils.marginBottom10]} disabled><Spinner color="#fff" style={[utils.paddingHorizontal10]} /></Button>
      <Button style={[utils.marginBottom10]} block><Text>Block</Text></Button>

      {/* TILES */}
      <H1 style={[utils.marginTop50]}>
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
