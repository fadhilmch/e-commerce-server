const Item = require('../models/items.model');

module.exports = {
  uploadFile: (req, res) => {
        Item.create({
                name: req.body.name,
                imageUrl: req.file.cloudStoragePublicUrl,
                description: req.body.description,
                stock: req.body.stock,
                price: req.body.price,
            }, (err, newpost) => {
                if (err) {
                    return res.status(400).json({
                        message: `create post erorr ${err}`,
                        data: {}
                    })
                } else {
                    res.status(200).json({
                        message: `post success`,
                        data: newpost
                    })
                }
            })
    },
    findAll: (req, res) => {
    Item.find()
      .exec()
      .then(data => {
        res.status(200).json({
          message: "Succeed get all items data",
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Failed to get all items data"
        })
      })
  },
  findById: (req, res) => {
    Item.findOne({
      _id : req.params.id
    })
    .then(data => {
      res.status(200).json({
        message: "Succeed to find item",
        data
      })
    })
    .catch(err => {
      res.status(400).json({
        message: "Failed to find item"
      })
    })
  },
  create: (req, res) => {
    Item.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      stock: req.body.stock
    })
      .then(data => {
        res.status(200).json({
          message: "Succeed to create new items",
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Failed to create new item"
        })
      })
  },
  update: (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then(data => {
        res.status(200).json({
          message: "Succeed to update item",
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Failed to update data"
        })
      })
  },
  destroy: (req,res) => {
    Item.findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(200).json({
          message: "Succeed to delete item"
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Failed to delete item"
        })
      })
  }
}
