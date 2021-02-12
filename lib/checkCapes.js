const fetch = require("node-fetch");

/**
 *
 * @param {string} player
 */

// Work in Progress
module.exports = async (player) => {
  let cape;
  const data = await fetch(`http://s.optifine.net/capes/${player}.png`);
  switch (data.status) {
    case 200:
      cape = `http://s.optifine.net/capes/${player}.png`;
      break;
    default:
      cape = null;
  }
  return cape;
};
