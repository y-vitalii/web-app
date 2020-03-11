module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://157.230.98.219:88",
                secure: true
            },
            "/images": {
                target: "http://157.230.98.219:88",
                secure: true
            },
        }
    }
};