const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

// Comments

router.post('/createComment/:id', postsController.createComment);

router.put('/likeComment/:id', postsController.likeComment);

router.delete('/deleteComment/:id', postsController.deleteComment);

module.exports = router;
