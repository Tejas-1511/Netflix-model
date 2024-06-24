const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.put("/delete", removeFromLikedMovies);
router.get("/liked/:email", getLikedMovies);

module.exports = router;