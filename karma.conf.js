module.exports = function (config) {
  config.set({

    basePath: "",

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      {pattern: "src/**/*.spec.ts"}
    ],

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        lib: ["dom", "es2015"],
        transforms: [
          require("karma-typescript-es6-transform")()
        ]
      }
    },

    reporters: ["spec"],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ["PhantomJS"],

    singleRun: true,

    concurrency: Infinity,

    retryLimit: 0
  })
};
