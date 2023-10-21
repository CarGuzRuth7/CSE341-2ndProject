//Schemes validation for each collection
const validateUser = {
  firstName: {
    exists: {
      errorMessage: 'firstName is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Name should be string' }
  },
  lastName: {
    exists: {
      errorMessage: 'lastName is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Name should be string' }
  },
  email: {
    exists: {
      errorMessage: 'Email is required',
      options: { checkFalsy: true }
    },
    isEmail: { errorMessage: 'Please provide valid email' }
  },
  password: {
    exists: { errorMessage: 'Password is required' },
    isLength: {
      options: { min: 3 },
      errorMessage: 'Password should be at least 3 characters'
    }
  },
  favAlbum: {
    exists: {
      errorMessage: 'favAlbum is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'favAlbum should be string' }
  },
  favArtist: {
    exists: {
      errorMessage: 'favArtist is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'favArtist should be string' }
  }
};

const validateArtist = {
  name: {
    exists: {
      errorMessage: 'Name is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Name should be string' }
  },
  age: {
    exists: {
      errorMessage: 'Age is required',
      options: { checkFalsy: true }
    },
    isInt: { errorMessage: 'Age should be an interger' }
  },
  typeOfVoice: {
    exists: {
      errorMessage: 'typeOfVoice is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'typeOfVoice should be string' }
  },
  band: {
    exists: {
      errorMessage: 'Band is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Band should be string' }
  },
  genre: {
    exists: {
      errorMessage: 'Genre is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Genre should be string' }
  },
  death: {
    isString: { errorMessage: 'Death should be string' },
    exists: {
      errorMessage: 'Death is required',
      options: { checkFalsy: true }
    }
  }
};
const validateAlbum = {
  title: {
    exists: {
      errorMessage: 'Title is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Title should be string' }
  },
  year: {
    exists: {
      errorMessage: 'Year is required',
      options: { checkFalsy: true }
    },
    isInt: { errorMessage: 'Year should be an interger' }
  },
  genre: {
    exists: {
      errorMessage: 'Genre is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Genre should be string' }
  },
  artist: {
    exists: {
      errorMessage: 'Artist is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Artist should be string' }
  },
  totalSongs: {
    exists: {
      errorMessage: 'totalSongs is required',
      options: { checkFalsy: true }
    },
    isInt: { errorMessage: 'totalSongs should be an interger' }
  },
  duration: {
    exists: {
      errorMessage: 'Duration is required',
      options: { checkFalsy: true }
    },
    isString: { errorMessage: 'Duration should be string' }
  }
};

module.exports = { validateUser, validateAlbum, validateArtist };
