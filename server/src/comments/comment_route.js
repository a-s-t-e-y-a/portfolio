const express = require("express");
const commentRoute = express.Router();
const {
  commentControllerPost,
  commentControllerGet,
  commentControllerDelete,
  commentControllerUpdate,
  commentControllerGetId,
} = require("./comment_conroller");
///post a new comment
commentRoute.post("/comment", commentControllerPost);
//get all comment
commentRoute.get("/comment", commentControllerGet);
//get comment by the comment id
commentRoute.get("/comment/:id", commentControllerGetId);
// delete the comment
commentRoute.post("/comment/:id", commentControllerDelete);
/// update the particular comment
commentRoute.patch("/comment/:id", commentControllerUpdate);

module.exports = commentRoute;
