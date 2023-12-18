import axios from "axios";

let refresh = false;



axios.interceptors.response.use(resp => resp, async error => {
    if (error.response?.status === 401 && !refresh){
        const refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        refresh = true;

        const response = await axios.get('http://localhost:8000/token', {
            headers: {
                'Cookie': `refreshToken=${refreshToken}`
            },
            withCredentials: true
        });

        if(response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            return axios(error.config);
        }
    }

    refresh = false;
    return error;
})