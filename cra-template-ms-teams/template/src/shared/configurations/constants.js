const prod = {
    url: {
        API_URL: 'https://<INSERT YOUR APPLICATION API URL HERE>'
    }
}

const dev = {
url: {
    API_URL: 'http://localhost:57712'
}
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;