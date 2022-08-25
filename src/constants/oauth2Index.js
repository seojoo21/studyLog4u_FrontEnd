const api_base = require('../config/api.json')
const front_base = require('../config/front.json')

const API_BASE_URL = api_base.url
const FRONT_BASE_URL = front_base.url

export const OAUTH2_REDIRECT_URI = FRONT_BASE_URL + '/oauth2/redirect' //서버에서 인증을 완료한 후에 프론트엔드로 돌아올 redirect uri (app.oauth2.authorized-redirect-uri와 일치해야 한다)
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorization/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';