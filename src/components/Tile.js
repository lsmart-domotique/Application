import React from 'react';
import { View } from 'react-native';
import {
  Card, CardItem, Body, Text, Thumbnail, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { flex } from '../styles/flex.style';
import { text } from '../styles/text.style';
import { tile } from '../styles/tile.style';

const Tile = ({
  link,
  image,
  name,
  connectionsNumber,
  hasError,
  isAddTile,
}) => (
  <Card style={[flex.flex1, flex.center]}>
    <CardItem
      button
      onPress={() => alert(`Go to ${link}`)}
    >
      <Body style={[tile.body]}>
        { hasError && (
          <Icon
            style={[tile.alert]}
            type="FontAwesome"
            name="exclamation-triangle"
          />
        )}
        <View style={[tile.thumbnailContainer, tile.thumbnailContainer1]}>
          <View style={[tile.thumbnailContainer, tile.thumbnailContainer2]}>
            <View style={[tile.thumbnailContainer, tile.thumbnailContainer3]}>
              {
                isAddTile || image ? (
                  <Thumbnail
                    square
                    small
                    source={isAddTile ? require('../img/plus.png') : image}
                  />
                ) : null
              }
            </View>
          </View>
        </View>
        { name ? <Text style={[text.bold, text.center, text.fontSize16]}>{ name }</Text> : null }
        {!isAddTile ? (
          <Text style={[tile.text, text.small]}>
            {
              connectionsNumber >= 0 ? (
                `${connectionsNumber} objet${connectionsNumber > 1 ? 's' : ''} connecté${connectionsNumber > 1 ? 's' : ''}`
              ) : 'Impossible de trouver les objets connectés'
            }
          </Text>
        ) : null}
      </Body>
    </CardItem>
  </Card>
);

export default Tile;

Tile.propTypes = {
  link: PropTypes.string,
  image: PropTypes.any,
  name: PropTypes.string,
  connectionsNumber: PropTypes.number,
  hasError: PropTypes.bool,
  isAddTile: PropTypes.bool,
};

Tile.defaultProps = {
  link: '',
  image: null,
  name: '',
  connectionsNumber: 0,
  hasError: false,
  isAddTile: false,
};