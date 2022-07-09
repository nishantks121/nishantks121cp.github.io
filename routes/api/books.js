const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" for Google Books API 
router.get("/google", (req, res) => {
  console.log(req);
  axios.get("https://www.googleapis.com/books/v1/volumes", {params: req.query})
  .then(({ data: { items } }) => res.json(items))
  // .then(results => console.log(results))
  .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
router.route("/")
.post(booksController.create)
  .get(booksController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
