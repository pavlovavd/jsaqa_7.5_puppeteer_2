module.exports = {
  generateRandomInt(from = 1, to = 10) {
      const row = Math.floor(Math.random() * 10 + 1);
      const place = Math.floor(Math.random() * 10 + 1);;
      return {row, place};
  }
}