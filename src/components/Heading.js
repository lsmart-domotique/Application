import React from 'react';
import {
  Grid, Row, Col, Text, Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';
import { flex } from '../styles/flex.style';
import { text } from '../styles/text.style';
import { tile } from '../styles/tile.style';
import Toggle from "./Toggle";

const Heading = ({
  icon,
  name,
  isOn,
}) => (
  <Grid>
    <Row style={[flex.verticalAlignCenter]}>
      <Col style={[flex.flex1]}>
        {
          icon ? (
            <Thumbnail
              square
              small
              source={icon}
            />
          ) : null
        }
      </Col>
      <Col style={[flex.flex3]}>
        <Text>{ name }</Text>
      </Col>
      <Col style={[flex.flex2]}>
        <Toggle isOn={isOn} />
      </Col>
    </Row>
  </Grid>
);

export default Heading;

Heading.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  isOn: PropTypes.bool,
};

Heading.defaultProps = {
  icon: null,
  name: '',
  isOn: false,
};