// const config = {
//     baseURL: 'http://localhost:5164/',
//     withCredentials: true
// }

const baseURL = 'http://localhost:5164/'
export const config = {
    baseURL: baseURL,
    withCredentials: true
}
export const configWithBearerFormData = {
    baseURL: baseURL,
    withCredentials: true,
    headers:{
        'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`,
        "Content-Type":"multipart/form-data"
    }
}