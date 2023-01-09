const path = require("path");



module.exports = {

  stories: [

    "../components/**/*.stories.mdx",

    "../components/**/*.stories.@(js|jsx|ts|tsx)",

    "../pages/**/*.stories.mdx",

    "../pages/**/*.stories.@(js|jsx|ts|tsx)",

  ],

  addons: [

    "@storybook/addon-essentials",

    "@storybook/addon-interactions",

    "@storybook/addon-a11y",

    "@storybook/preset-scss",

  ],

  framework: "@storybook/react",

  core: {

    builder: "@storybook/builder-webpack5",

  },

  features: {

    storyStoreV7: true,

  },

  webpackFinal: async (config) => {

    // config.module.rules.push({

    //   test: /\.scss$/,

    //   use: ["style-loader", "css-loader", "sass-loader"],

    //   include: path.resolve(__dirname, "../"),

    // });

    return config;

  },

};

