export const baseURL = 'http://localhost:5164/'

export const configWithBearer = () => {
    return{
        baseURL: baseURL,
        withCredentials: true,
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`
        }
    }
}

export const configWithBearerFormData = () => {
    return {
        baseURL: baseURL,
        withCredentials: true,
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`,
            "Content-Type":"multipart/form-data"
    }
}
}