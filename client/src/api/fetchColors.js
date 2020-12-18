import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchColors = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then(res => {
        console.log(res.data)
        return res
    })
    .catch(err => {
        console.log(err)
    })
}