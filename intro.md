# Async 101 - Inconsistencies of the node api

- [ ] Understand that due to the unpredictable nature of the node api that we can't guarantee the order in which things are fetched
- [ ] Investigate other ways to determine when the callback must be invoked upon fetching all of the data required
- [ ] Understand that pushing into an array isn't the only option
- [ ] Know about sparse arrays
- [ ] Apply understanding of forEach by using the index

```
                        ___
                      .' _ '.
                     / /` `\ \
                     | |   [__]
                     | |    {{
                     | |    }}
                  _  | |  _ {{
      ___________<_>_| |_<_>}}________
          .=======^=(___)=^={{====.
         / .----------------}}---. \
        / /                 {{    \ \
       / /                  }}     \ \
      (  '========================='  )
       '-----------------------------'
```

Kev has access to a function: `fetchInstrumentByArtist()`.
This function takes two arguments, a string of an artst's name (lowercase) and a callback function, and invokes the callback with an object containing two keys: artistName and instrument.

```js
fetchInstrumnentByArtist('rob', cb)

//will invoke cb with --->
{ artistName: 'rob', instrument: 'guitar' }
```

Unfortunately due to Kev's massive ego, there are only a small number of artists who are prepared to work with him, so Kev has stored the names of those artists in an array in order of preference.

`const willingVictims = ['rob', 'daisy', 'ben', 'chris', 'phill', 'clegg', 'jess', 'dean']`

Implement a function based on the behaviours set out in the pre-written tests. This function will use the `fetchInstrumentsByArtists()` function to fetch each artist object and will invoke a given callback with an array of artist objects with the order of the input array maintained.

```js
const willingVictims = ['rob', 'daisy', 'ben', 'chris', 'jess']

const fetchArtistAndInstrumentInOrder(willingVictims, cb)

//will invoke cb with -->
[
    { artistName: 'rob', instrument: 'guitar'},
    { artistName: 'daisy', instrument: 'bass'},
    { artistName: 'ben', instrument: 'vox'},
    { artistName: 'chris', instrument: 'drums/loops'},
    { artistName: 'jess', instrument: 'vox'},
]
```

## What would come next?

Implement a second function which takes the output of `fetchArtistAndInstrumentInOrder()` as it's first argument and an array of instruments as it's second arguement. This function should return a band object with a key of each instrument in the instrument array and a value of the artist who plays that instrument, who is most willing to work with kev.

```js
const artists = [
    { artistName: 'rob', instrument: 'guitar'},
    { artistName: 'daisy', instrument: 'bass'},
    { artistName: 'ben', instrument: 'vox'},
    { artistName: 'chris', instrument: 'drums/loops'},
    { artistName: 'cleg', instrument: 'guitar'},
    { artistName: 'dean', instrument: 'bass'},
    { artistName: 'jess', instrument: 'vox'},
    { artistName: 'phill', instrument: 'drums/loops'},
]

const band = ['bass', 'drums/loops', 'guitar']

const createBand(artists, band)

//will invoke the callback with --->
{ bass: 'daisy', 'drums/loops': 'chris', guitar: 'rob' }
```