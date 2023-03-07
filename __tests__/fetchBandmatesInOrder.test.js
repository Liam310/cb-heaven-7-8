const fetchBandmatesAndInstrumentsInOrder = require('../challenges/fetchBandmatesInOrder.js');

describe('fetchBandmatesAndInstrumentsInOrder', () => {
  test.only('invokes the callback with no error', (done) => {
    const input = ['rob'];
    const callback = (err) => {
      expect(err).toBe(null);
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
  test.only('invokes the callback with an artist', (done) => {
    const input = ['rob'];
    const callback = (err, res) => {
      expect(res).toEqual([{ artistName: 'rob', instrument: 'guitar' }]);
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
  test.only('invokes the callback with multiple artists', (done) => {
    const input = ['rob', 'kev', 'chris'];
    const callback = (err, res) => {
      expect(res[2]).toEqual(
        expect.objectContaining({
          artistName: expect.any(String),
          instrument: expect.any(String),
        })
      );
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
  test.only('Maintains the order of the input array', (done) => {
    const input = ['kev', 'rob', 'chris'];
    const callback = (err, res) => {
      expect(res).toEqual([
        { artistName: 'kev', instrument: 'drumkit' },
        { artistName: 'rob', instrument: 'guitar' },
        { artistName: 'chris', instrument: 'keys' },
      ]);
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
  test.only('does not mutate input', (done) => {
    const input = ['kev', 'rob', 'chris'];
    const callback = (err, res) => {
      expect(input).toEqual(['kev', 'rob', 'chris']);
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
  test.only('input: empty array. Callback is invoked with an empty array', (done) => {
    const input = []
    const callback = (err, res) => {
      expect(res).toEqual([]);
      done();
    };
    fetchBandmatesAndInstrumentsInOrder(input, callback);
  });
});

