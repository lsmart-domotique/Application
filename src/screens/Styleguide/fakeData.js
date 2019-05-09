export default {
  tiles: [
    {
      link: '/chambre-1',
      image: require('../../img/room.png'),
      name: 'Chambre 1',
      connectionsNumber: 2,
      hasError: true,
    }, {
      link: '/chambre-2',
      image: require('../../img/room.png'),
      name: 'Chambre 2',
      connectionsNumber: 1,
    }, {
      link: '/cuisine',
      image: require('../../img/room.png'),
      name: 'Cuisine',
      connectionsNumber: 0,
      hasError: true,
    }, {
      link: '/add',
      name: 'Ajouter une pièce',
      isAddTile: true,
    },
  ],
  toggles: [
    {
      name: 'Title only',
    }, {
      icon: require('../../img/room.png'),
      name: 'With icon',
    }, {
      icon: require('../../img/room.png'),
      name: 'With icon and toggle',
      hasToggle: true,
      isOn: true,
    }, {
      name: 'Volet 1',
      subtitle: 'With subtitle and toggle',
      hasToggle: true,
      isOn: false,
    },
  ],
};
