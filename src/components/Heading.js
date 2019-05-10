import React from 'react';
import {
  Grid, Row, Col, Text, Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';
import { flex } from '../styles/flex.style';
import { text } from '../styles/text.style';
import { utils } from '../styles/utils.style';
import Toggle from './Toggle';

const Heading = ({
  icon,
  name,
  subtitle,
  hasToggle,
  isOn,
  onToggle,
  style,
}) => (
  <Grid style={ style }>
    <Row style={[flex.verticalAlignCenter]}>
      {
        icon ? (
          <Col style={[flex.flex0, utils.paddingRight10]}>
            <Thumbnail
              square
              small
              source={icon}
            />
          </Col>
        ) : null
      }
      <Col style={[flex.flex1]}>
        <Text style={[text.bold, text.uppercase]}>{name}</Text>
        {
          subtitle && subtitle.length > 0 ? (
            <Text style={[text.small]}>{subtitle}</Text>
          ) : null
        }
      </Col>
      {
        hasToggle ? (
          <Col style={[flex.alignRight, flex.flex0]}>
            <Toggle
              isOn={isOn}
              onToggle={onToggle}
            />
          </Col>
        ) : null
      }
    </Row>
  </Grid>
);

export default Heading;

Heading.propTypes = {
  style: PropTypes.any,
  icon: PropTypes.any,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  hasToggle: PropTypes.bool,
  isOn: PropTypes.bool,
  onToggle: PropTypes.func,
};

Heading.defaultProps = {
  style: null,
  icon: null,
  name: '',
  subtitle: null,
  hasToggle: false,
  isOn: false,
  onToggle: null,
};
