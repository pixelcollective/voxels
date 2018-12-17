const pkg = require('./package.json');

module.exports = {
  appName: 'voxels',
  type: 'plugin',
  slug: 'voxels',
  bannerConfig: {
    name: 'voxels',
    author: 'Tiny Pixel Collective, Kelly Mears',
    license: 'MIT',
    link: 'https://tinypixel.io/voxels',
    version: pkg.version,
    copyrightText: 'This software is released under the MIT license. © 2018 Tiny Pixel Colletive, LLC.',
    credit: true,
  },
  files: [
    {
      name: 'blocks',
      entry: {
        editor: ['./src/blocks/editor.js'],
        public: ['./src/blocks/public.js']
      },
      webpackConfig: {
        output: {
          filename: "[name].js",
        },
      },
    },
  ],
  outputPath: 'assets',
  hasReact: true,
  hasSass: true,
  hasFlow: false,
  externals: {
    jquery: 'jQuery',
  },
  alias: undefined,
  errorOverlay: true,
  optimizeSplitChunks: true,
  watch: './inc|includes/**/*.php|./src/**/*.js',
  jsBabelOverride: defaults => ({
    ...defaults,
    plugins: ['react-hot-loader/babel',
      [
        "transform-react-jsx",
        {
          "pragma": "wp.element.createElement"
        }
      ]
    ],
  }),
  packageFiles: [
    'assets/blocks/**',
  ],
  // Path to package directory, relative to the root
  packageDirPath: 'package',
};
