const router = require("express").Router();
const Doctor = require("../model/Doctor");

router.route("/list").get((req, res) => {
  const { docType, search } = req.query;
  let query = {};

  if (docType && docType !== "") {
    query.docType = docType;
  }

  if (search && search !== "") {
    query.$or = [
      { fullname: { $regex: search, $options: "i" } },
      { specialization: { $regex: search, $options: "i" } },
      // Add more field names if needed
    ];
  }

  if (docType && docType !== "" && search && search !== "") {
    query.docType = docType; // No need to wrap it in an array
  
    query.$or = [
      { fullname: { $regex: search, $options: "i" } },
      { specialization: { $regex: search, $options: "i" } },
    ];
  }
  
  Doctor.find(query)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.route("/:id").get((req, res) => {
  Doctor.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.route("/delete/:id").delete((req, res) => {
  const doctorId = req.params.id;

  Doctor.findByIdAndDelete(doctorId)
    .then(() => {
      res.json({
        message: "Doctor deleted",
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

router.route("/update").put((req, res) => {
  const body = req.body;
  Doctor.findByIdAndUpdate(body._id, body)
    .then(() => {
      res.json({
        message: "Doctor updated",
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

router.route("/add").post((req, res) => {
  const body = req.body;
  const doctor = new Doctor(body);
  doctor
    .save()
    .then(() => {
      res.json({
        message: "Doctor added",
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

module.exports = router;
