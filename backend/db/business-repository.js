const {Business} = require('./models')

async function list() {
  return await Business.findAll();
}

module.exports = {
  list,
}
