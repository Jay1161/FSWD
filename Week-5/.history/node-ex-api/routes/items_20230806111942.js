// import required essentials
const express = require("express");
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  {
    id: 1,
    name: "Jay",
  },
  {
    id: 2,
    name: "Badal",
  },
  {
    id: 3,
    name: "Dharmik",
  },
  {
    id: 4,
    name: "Jaitej",
  },
  {
    id: 5,
    name: "Jalpesh Vasa",
  },
];

// this end-point of an API returns JSON data array
router.get("/", function (req, res) {
  res.status(200).json(data);
});

//this end-point returns an object from a data array find by id
//we get `id` from URL end-points
router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/insert", function (req, res) {
  // Assuming the user sends a JSON object with the "name" property in the request body
  const { name } = req.body;
  if (!name) {
   res.status(400).json({ error: "Name is required`." });
  } else {
   const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
   const Items =
    { 
      id: id, 
      name: name,
    }
   data.push(JSON.stringify(Items));
   res.status(201).json(Items);
  }
 });

 router.put("/:id", function (req, res) {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required." });
  } else {
    const indexToUpdate = data.findIndex(item => item.id === parseInt(id));

    if (indexToUpdate === -1) {
      return res.sendStatus(404);
    }

    data[indexToUpdate].name = name;
    res.status(200).json(data[indexToUpdate]);
  }
});

router.delete("/:id", function (req, res) {
  const { id } = req.params;
  const indexToDelete = data.findIndex(item => item.id === parseInt(id));

  if (indexToDelete === -1) {
    return res.sendStatus(404);
  }

  data.splice(indexToDelete, 1);
  res.sendStatus(204);
});

module.exports = router;
