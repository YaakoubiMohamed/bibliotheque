const Auteur = require('../models/auteur');


const CreerAuteur = async (req , res) => {
    try{
        const auteur = await Auteur.create(req.body);
        res.status(201).json({message:"Auteur cree"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const AfficherAuteurs = async (req , res) => {
    try{
        const auteurs = Auteur.findAll();
        res.status(200).json(auteurs)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const ModifierAuteur = async (req, res) =>{
    try{
        const { id } = req.params;
        // etape 1: recherche 
        const auteur = Auteur.findByPk(id);
        // etape 2: verification
        if(auteur){
            return res.status(404).json({error: 'auteur non trouve'})
        }
        await Auteur.update(req.body)
        res.status(200).json({message:'auteur mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

const SupprimerAuteur = async (req, res) =>{
    try{
        const { id } = req.params;
        // etape 1: recherche 
        const auteur = Auteur.findByPk(id);
        // etape 2: verification
        if(auteur){
            return res.status(404).json({error: 'auteur non trouve'})
        }
        await auteur.destroy()
        res.status(200).json({message:'auteur mis à jours'})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    CreerAuteur,
    AfficherAuteurs,
    ModifierAuteur,
    SupprimerAuteur
}