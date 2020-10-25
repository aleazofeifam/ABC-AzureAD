module.exports = {
    productionSourceMap: false,
    pwa: {
        name: 'Azure AD Wiki',
        workboxPluginMode: 'InjectManifest',
        themeColor: '#4A90E2',
        workboxOptions: {
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        },
    }
}