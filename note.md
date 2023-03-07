```js
function fetchBandmatesAndInstrumentsInOrder(bandmates, cb) {
  const bandmatesAndInstruments = [];
  let counter = 0

  if(bandmates.length < 1) cb(null, [])

  bandmates.forEach((bandmate, i) => {
    request(bandmate, (err, bandmateWithInstrument) => {
      if (err) cb(err);

      bandmatesAndInstruments[i] = bandmateWithInstrument;
      counter ++
      
      if (counter === bandmates.length) {
        cb(null, bandmatesAndInstruments);
      }
    });
  });
}
```