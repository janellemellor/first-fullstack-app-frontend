import request from 'superagent';

export function getBobaData() {
    return request.get(`https://cryptic-hamlet-62196.herokuapp.com/api/boba`)
} 