function sleep(ms) {
  console.log(`Esperemos: ${ms / 100} segundos`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}
module.exports = {
  sleep: sleep,
};
