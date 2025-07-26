const institute = require("../model/institute-model");

const getInstitute = async((req, res) => {
  try {
    let institute = institute.find();

    res.json({
      success: true,
      message: "Institute find successfuly",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" + error });
  }
});

//register institute

const registerinstitute = async((req, res) => {
  const { name, email, instituteType } = req.body;
  const institute = new institute({
    name,
    email,
    instituteType,
  });

  institute.save();
  res.status(201).json({ message: "Institute created" });
});

module.exports = {
  getInstitute,
  registerinstitute,
};
