const presets = [];
const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    { runtime: "automatic", importSource: "./core" },
  ],
];

module.exports = {
  presets,
  plugins,
};
