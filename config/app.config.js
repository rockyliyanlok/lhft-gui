/**
 * app config
 */

module.exports = {
  BACKEND_SERVICE_URL: process.env.BACKEND_SERVICE_URL || 'https://lhft-backend.herokuapp.com',
  MAX_ELEMENTS: process.env.MAX_ELEMENTS || 500,
  ELEMENTS_PER_PAGE: process.env.ELEMENTS_PER_PAGE || 100
}
