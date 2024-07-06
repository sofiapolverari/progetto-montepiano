import type { StorybookConfig } from "@storybook/react-webpack5";
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    (config.module?.rules?.[2] as RuleSetRule).exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];

    // Remove core-js to prevent issues with Storybook
    (config.module?.rules?.[0] as RuleSetRule).exclude = [/core-js/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    (config.module?.rules?.[2] as RuleSetRule).use?.[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    config.resolve!.mainFields = ["browser", "module", "main"];

    // add SVGR loader
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
            svgoConfig: {
              plugins: [
                {
                  name: "prefixIds",
                  params: {
                    prefix: false,
                  },
                },
              ],
            },
          },
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[path][name].[ext]",
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;
  },
};
export default config;
