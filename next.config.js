module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/audio/',
            outputPath: 'static/audio/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
