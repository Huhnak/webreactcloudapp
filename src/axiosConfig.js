export const baseURL = 'http://185.100.24.195:5002'

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