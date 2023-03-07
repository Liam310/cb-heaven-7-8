const request = require('../utils/utils');

function fetchBandmatesAndInstrumentsInOrder(victims, cb) {
  if(!victims.length) cb(null, [])

  const bandmates = [];
  let counter = 0

  victims.forEach((victim, i) => {
    request(victim, (err, data) => {
      if (err) cb(err);

      bandmates[i] = data;
      counter ++
      
      if (counter === victims.length) {
        cb(null, bandmates);
      }
    });
  });
}


module.exports = fetchBandmatesAndInstrumentsInOrder;
