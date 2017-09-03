const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //

export const config = {
  apiKey: 'AIzaSyCicj-kNiCYTiXo7K3pq6FTATk_woAMW6I',
  authDomain: 'lgbtqexchange.firebaseapp.com',
  databaseURL: 'https://lgbtqexchange.firebaseio.com',
  projectId: 'lgbtqexchange',
  storageBucket: 'lgbtqexchange.appspot.com',
  messagingSenderId: '274397383570'
}

// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
