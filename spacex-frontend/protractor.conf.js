exports.config = {
    specs: ['./src/e2e/*.e2e-spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: false,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
};
