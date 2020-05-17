import axios from 'axios'

const url = 'https://api.rootnet.in/covid19-in/stats/latest'
// const dateurl = 'https://api.rootnet.in/covid19-in/stats/history'

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url)
        return data.data
    }
    catch (error){ 
        console.error(error)
    }
}

// export const dateData = async () => {
//     try {
//         const response = await axios.get(dateurl)
//         return response.data 
//     }
//     catch (error) {
//         console.error(error)
//     }
// }