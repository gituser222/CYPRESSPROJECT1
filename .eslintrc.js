module.exports = {
  extends: "airbnb",
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"]
  },
  globals: {
    describe: true,
    it: true,
    cy: true
  }
};
