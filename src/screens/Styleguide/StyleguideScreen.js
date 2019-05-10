import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container, Header, Content, Button, Icon, Left, Right, Body, Title, H1, H3, Text, Spinner, Card, CardItem, Tabs, Tab, Grid, Row, Col,
} from 'native-base';
import { withNavigation, DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { layout } from '../../styles/layout.style';
import { utils } from '../../styles/utils.style';
import { tabs } from '../../styles/tabs.style';
import { text } from '../../styles/text.style';
import Heading from '../../components/Heading';
import SliderCustomMarker from '../../components/SliderCustomMarker';
import Tiles from '../../components/Tiles';
import fakeData from './fakeData';
import platform from '../../../native-base-theme/variables/lsmart';
import {slider} from "../../styles/slider.style";

class StyleguideScreen extends Component {
  state = {
    isOn: false,
    sliderValue: [45],
  };

  onToggle = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
    });
  };

  // USE ON MULTISLIDER
  sliderValueChange = (values) => {
    this.setState({
      sliderValue: values,
    });
  };

  render() {
    const {
      navigation,
    } = this.props;

    const {
      isOn,
      sliderValue,
    } = this.state;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Styleguide</Title>
          </Body>
          <Right />
        </Header>
        <Content style={[layout.body]}>
          <View style={[utils.paddingBottom30]}>

            {/* BUTTONS */}
            <H1>
              Buttons
            </H1>

            <H3 style={[utils.marginTop20, utils.marginBottom10]}>Styles</H3>
            <Button transparent><Text>Transparent</Text></Button>
            <Button style={[utils.marginBottom10]}><Text>Default</Text></Button>
            <Button style={[utils.marginBottom10]} rounded><Text>Rounded</Text></Button>
            <Button style={[utils.marginBottom10]} block><Text>Block</Text></Button>

            <H3 style={[utils.marginTop20, utils.marginBottom10]}>Sizes</H3>
            <Button style={[utils.marginBottom10]} small><Text>Small</Text></Button>
            <Button style={[utils.marginBottom10]}><Text>Default</Text></Button>
            <Button style={[utils.marginBottom10]} large><Text>Large</Text></Button>

            <H3 style={[utils.marginTop20, utils.marginBottom10]}>Colors</H3>
            <Button style={[utils.marginBottom10]} danger><Text>Danger</Text></Button>
            <Button style={[utils.marginBottom10]} success><Text>Succes</Text></Button>
            <Button style={[utils.marginBottom10]} bordered><Text>Secondary</Text></Button>
            <Button style={[utils.marginBottom10]} disabled><Text>Disabled</Text></Button>

            <H3 style={[utils.marginTop20, utils.marginBottom10]}>More</H3>
            <Button style={[utils.marginBottom10]} iconRight><Text>Primary with icon</Text><Icon name="add" /></Button>
            <Button style={[utils.marginBottom10]} iconLeft><Icon name="add" /><Text>Primary with icon</Text></Button>
            <Button style={[utils.marginBottom10]} disabled><Spinner color="#fff" style={[utils.paddingHorizontal10]} /></Button>

            {/* TILES */}
            <H1 style={[utils.marginTop50]}>
              Tiles
            </H1>
            <Tiles items={fakeData.tiles} />

            {/* HEADINGS */}
            <H1 style={[utils.marginTop50, utils.marginBottom30]}>
              Headings
            </H1>

            {
              fakeData.toggles.map(toggle => (
                <Heading
                  style={[utils.marginBottom20]}
                  key={toggle.name}
                  icon={toggle.icon}
                  name={toggle.name}
                  subtitle={toggle.subtitle}
                  hasToggle={toggle.hasToggle}
                  isOn={isOn}
                  onToggle={this.onToggle}
                />
              ))
            }

            {/* TABS */}
            <H1 style={[utils.marginTop50, utils.marginBottom30]}>
              Tabs
            </H1>

            <Card>
              <CardItem>
                <Heading
                  style={[utils.marginVertical10]}
                  icon={fakeData.tabsHeading.icon}
                  name={fakeData.tabsHeading.name}
                  subtitle={fakeData.tabsHeading.subtitle}
                  hasToggle={fakeData.tabsHeading.hasToggle}
                  isOn={isOn}
                  onToggle={this.onToggle}
                />
              </CardItem>
              <Tabs>
                <Tab
                  textStyle={[tabs.textStyle]}
                  activeTextStyle={[tabs.textStyle]}
                  heading="Général"
                >
                  <CardItem>
                    <Text>Tab content 1</Text>
                  </CardItem>
                </Tab>
                <Tab
                  textStyle={[tabs.textStyle]}
                  activeTextStyle={[tabs.textStyle]}
                  heading="Dissocié"
                >
                  <CardItem>
                    <Text>Tab content 2</Text>
                  </CardItem>
                </Tab>
              </Tabs>
            </Card>

            {/* SLIDER */}
            <H1 style={[utils.marginTop50, utils.marginBottom30]}>
              Slider
            </H1>

            <Grid>
              <Row>
                <Col>
                  <Text>
                    Intensité
                  </Text>
                </Col>
                <Col>
                  <Text style={[text.right]}>
                    {sliderValue[0]}%
                  </Text>
                </Col>
              </Row>
            </Grid>

            <MultiSlider
              values={[
                sliderValue[0],
              ]}
              onValuesChange={this.sliderValueChange}
              min={0}
              max={100}
              sliderLength={300}
              step={1}
              customMarker={SliderCustomMarker}
              containerStyle={[slider.containerStyle]}
              selectedStyle={[slider.selectedStyle]}
              trackStyle={[slider.trackStyle]}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(StyleguideScreen);

StyleguideScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
