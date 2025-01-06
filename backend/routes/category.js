const express = require("express");
const {} = require("../controllers/category.js");
const { authenticationMid, roleChecked } = require("../middleware/auth.js");

const router = express.Router();

router.get(`/categories`);
router.get(`/admin/categories`, authenticationMid, roleChecked("admin"));
router.get(`/category/:id`);
router.post(
  `/category/new`,
  authenticationMid,
  roleChecked("admin"),
  createBook
);
router.put(
  `/category/:id`,
  authenticationMid,
  roleChecked("admin"),
  updateBook
);
router.delete(
  `/category/:id`,
  authenticationMid,
  roleChecked("admin"),
  deleteBook
);

module.exports = router;
