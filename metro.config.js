/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

 module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    experimentalImportSupport: false,
    inlineRequires: false,
    // Add this line to change the JS engine
    jsTransformer: 'babel',
  },
};

