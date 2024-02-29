 module.exports.ENDPOINTS = {
    CORE: {
        MAIN: '/core',
        WILAYAS: '/wilayas',
        COMMUNES: '/wilayas/:wilaya_id/commune',
    },
    API : '/api',
    CLIENT: {
        MAIN: '/client',

    },
    AUTH: {
        MAIN: '/auth',
        LOGIN: '/login',
        REGISTER: '/register',
        FORGET_PASSWORD: '/forget_password',
        RESET_PASSWORD: '/reset_password',
    },

    SUBSCRIPTIONS: {
        MAIN: '/subscription',
        RECOMMENDATION: '/subscription/recommendation',
    },

}
    
