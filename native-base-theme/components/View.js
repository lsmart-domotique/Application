// @flow

import variable from './../variables/lsmart';

export default (variables /*: * */ = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    }
  };

  return viewTheme;
};
