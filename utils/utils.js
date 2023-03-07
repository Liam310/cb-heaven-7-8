const musiciansAndInstruments = {
    phill: 'drumkit',
    kev: 'drumkit',
    rob: 'guitar',
    cleg: 'guitar',
    chris: 'keys',
    peer: 'keys',
    jess: 'vox',
    ben: 'vox',
}

const request = (artist, cb) => {

    
    const randomNumber = Math.ceil(Math.random() * 1000)
    const artistDetails = {artistName: artist, instrument: musiciansAndInstruments[artist]}
    setTimeout(()=>{
        cb(null, artistDetails)
    }, randomNumber)
}

module.exports = request
//{ artistName: 'rob', instrument: 'guitar' }