const api_base = require('../config/api.json')
const front_base = require('../config/front.json')

const API_BASE_URL = api_base.url
const FRONT_BASE_URL = front_base.url
const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = FRONT_BASE_URL + '/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;