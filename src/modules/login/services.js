import { httpClient } from '@/plugins/axios'    // { httpClient } se esta exportando como una constante, por tanto debe estructurarse dentro de las llaves {}

export default {
    signIn ({ email, password }) { 
        return httpClient.post('/singin', { email, password })
    },
    signUp ({ email, password }) { 
        return httpClient.post('/signup', { email, password })
    },
}