
const Authors = require('../models/authors.model')
module.exports = {
   
    createAuthors : (req,res)=>{
        console.log("BACK END CREATE", req)
        Authors.create(req.body)
        .then(newAuthor =>{console.log(req.body); res.status(200).json(newAuthor)})
        // .catch(err => res.status(400).json({errorTest: err} ))
        // if we don't have status(400) when the client req it assume that everything is ok
        .catch(err => res.status(400).json( err ))

    },
    getAllAuthors:(req,res)=>{
        console.log("BACK END ALL",res)
        Authors.find()
        .then(allAuthors =>{console.log( allAuthors); res.status(200).json(allAuthors)})
        .catch(err=>{ console.log("Something went wrong  BACK END ALL", err);
                         res.status(400).json( err)})
    },
    getOneAuthor:(req,res)=>{
        Authors.findById({_id:req.params.id})
        .then(oneAuthor => {console.log(oneAuthor);
            res.status(200).json(oneAuthor)})
        .catch(err => res.status(400).json(err))
    },
    updateProducts :(req,res)=>{
        Authors.findByIdAndUpdate({_id: req.params.id}, req.body, ({new: true,runValidators: true}))
        .then(updatedAuthors =>res.status(200).json(updatedAuthors))
        .catch(err => { console.log("Something went wrong UPDATE PRODUCT", err) ;  res.status(400).json(err)})
    },
    deleteAuthor : (req,res)=>{
        Authors.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.status(200).json(deleteConfirmation))
        .catch(err =>{console.log("Something went wrong BACK END DELETE"); res.status(400).json(err)})
    }
    
}