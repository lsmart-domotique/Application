import React from 'react';
import {
  Col, Grid,
} from 'native-base';
import PropTypes from 'prop-types';
import Tile from './Tile';
import { layout } from '../styles/layout.style';

const Tiles = ({ items }) => (
  <Grid style={[layout.grid]}>
    {
      items.map(tile => (
        <Col
          key={tile.name}
          style={layout.col1in2}
        >
          <Tile
            link={tile.link}
            image={tile.image}
            name={tile.name}
            connectionsNumber={tile.connectionsNumber}
            hasError={tile.hasError}
            isAddTile={tile.isAddTile}
          />
        </Col>
      ))
    }
  </Grid>
);

export default Tiles;

Tiles.propTypes = {
  items: PropTypes.array,
};

Tiles.defaultProps = {
  items: [],
};
