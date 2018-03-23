const express = require('express');
const router = express.Router();
const {uploadFile, findAll, create, destroy, update, findById} = require('../controllers/items.controller');
const {sendUploadToGCS} = require('../middleware/uploadGCS');
const multer = require('multer');

const upload = multer({
   storage  : multer.memoryStorage(),
   limits   : {
     fileSize: 10*1024*1024
  }
 })

router.get('/', findAll);
router.post('/', create);
router.post('/upload',upload.single('item'),sendUploadToGCS,uploadFile)

router.get('/:id', findById);
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
