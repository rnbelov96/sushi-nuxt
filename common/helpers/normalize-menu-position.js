import menuTypes from '../enums/menu-types';

export default position => ({
  ...position,
  type: menuTypes[position.type],
});
