const upload = require("../middleware/multer");
const express = require('express');

const { getItems, addItem, downloadFile, getUser,addUser , addItem2, unlockRequest,getUnlock, addItem3,addItem4} = require("../controllers/items");

const router = express.Router();

router.route('/:use').get(getItems);
router.route('/').post(upload.single('file'), addItem);
router.route('/addItem2').post(upload.single('file'), addItem2);
router.route('/addItem3').post(upload.single('file'), addItem3);
router.route('/addItem4').post(upload.single('file'), addItem4);
router.route('/unlock').post(unlockRequest);
router.route('/unlock/:use').get(getUnlock);
router.route('/download/:id').get(downloadFile);
router.route('/signup').post(addUser);
router.route('/login').post(getUser);


module.exports = router;