# Task Outline

We have access to a function: `fetchInstrumentByArtist()`.

This function takes two arguments, a string of an artist's name (lowercase) and a callback function, and invokes the callback with an error and an object containing two keys: artistName and instrument.

```js
fetchInstrumentByArtist('rob', cb);

// will invoke cb with --->
{ artistName: 'rob', instrument: 'guitar' }
```

Unfortunately we've burned some bridges, so there are only a small number of artists who are prepared to work with us. We have stored the names of those artists in an array in order of preference.

```js
const musicalFriends = [
  'rob',
  'daisy',
  'ben',
  'chris',
  'phill',
  'clegg',
  'jess',
  'dean'
];
```

We need to create a function based on the behaviours set out in the pre-written tests. This function will take two arguments: an array of names and a callback: `cb`. We should then use the `fetchInstrumentsByArtist()` function to fetch each artist object and subsequently invoke the given `cb` with an array of artist objects with the order of the input array maintained.

```js
const musicalFriends = ['rob', 'daisy', 'ben', 'chris', 'jess'];

fetchArtistAndInstrumentInOrder(musicalFriends, cb);

//will invoke cb with -->
[
  { artistName: 'rob', instrument: 'guitar' },
  { artistName: 'daisy', instrument: 'bass' },
  { artistName: 'ben', instrument: 'vox' },
  { artistName: 'chris', instrument: 'drums/loops' },
  { artistName: 'jess', instrument: 'vox' }
];
```

_NOTE:_ This function can be written with the expectation that all given artists will have an associated instrument.
