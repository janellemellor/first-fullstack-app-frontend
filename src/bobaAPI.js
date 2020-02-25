import request from 'superagent';

export function getBobaData() {
    return request.get(`https://cryptic-hamlet-62196.herokuapp.com/api/boba`)
} 

export function getTypesData() {
    return request.get(`https://cryptic-hamlet-62196.herokuapp.com/api/types`)
}

// export function postBobaData(newBoba) {
//     return request.post(`https://cryptic-hamlet-62196.herokuapp.com/api/boba`)
// }