const Ingredient = require('../schema/ingredientsModel');
const mongoose = require('mongoose');
const fs = require('fs');
const { log } = require('console');

// GET all ingredients
const getIngredients = async (req, res) => {
    const ingredients = await Ingredient.find({});

    res.status(200).json(ingredients);
}

// GET one ingredient
const getIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findById(id);

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient);
}

/* // POST a new ingredient
const createIngredient = async (req, res) => {
    const {name, quantity, price, image} = req.body;
    // add to the database
    try{
        const ingredient = await Ingredient.create({name, quantity, price, image});
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// POST documents to ingredients collection
const createDocuments = async (req, res, next) =>{
    const data = JSON.parse(fs.readFileSync('./data/ingredients.json', 'utf-8'))
    console.log(data)

    // import data to MongoDB
    try {
        await Ingredient.create(data)
        console.log('data successfully imported')
        // to exit the process
        process.exit()
    } catch (error) {
        console.log('error', error)
    }
}
//createDocuments() */

// DELETE a ingredient
const deleteIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findByIdAndDelete({_id: id});

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient)
}

// UPDATE a ingredient
const updateIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient);
}

module.exports = {
    getIngredients,
    getIngredient,
    //createIngredient,
    deleteIngredient,
    updateIngredient,
    //createDocuments
};