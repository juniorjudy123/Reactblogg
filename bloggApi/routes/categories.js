const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

// const router = require("express").Router();

router.post('/', async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(201).json(savedCat)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get all categories
router.get('/', async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);


    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;