var getConfig = function() {
  return {
    MONGO_CREDENTIALS: process.env.MONGO_CREDENTIALS || 'mongodb://localhost/wesayidou',
  };
};

exports.getConfig = getConfig;
