module.exports = {
  get: async (req, res) => {
    console.log("petinfo 나오긴 하니??");
    res.status(200).send({ message: "petinfo ok!" });
  },
};
