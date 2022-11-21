// const { response, request } = require("express");
const { Router } = require("express");
const express = require("express");
const Users = require("../models/user.models")

const router = express.Router();

router.get ("/users", (request, response) => {
    try{
        Users.find((err, data) => {
            if (err) {
                return response.status(400).send({message: "Error while retriving user, please check the data"})
            }
            response.status(200).send(data);
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.get ("/users/:userID", (request, response) => {
    try{
        Users.findOne( {_id: request.params.userID}, (err, data) => {
            if (err) {
                return response.status(400).send({message: "Error while retriving user, please check the data"})
            }
            response.status(200).send(data);
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.post ("/newusers", (request, response) => {
    try {
        const payload = request.body;
        const newUser = new Users(payload);
        newUser.save((err, data) => {
            if(err){
                return response.status(400).send({message: "Error while adding new user, please check the data"})
            }
            response.status(200).send({userID: data._id, message: "User has been added successfully"});
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.put ("/users/:userID", (request, response) => {
    try{
        Users.findByIdAndUpdate({_id: request.params.userID}, {$set: request.body}, (err, data) => {
            if (err) {
                return response.status(400).send ({messsage: "Error while updating an existing user. Please check the data"})
            }
            response.status(201).send({message: "user details have been updated successfully"})
        })

    } catch (error) {
        response.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.delete ("/users/:userID", (request, response) => {
    try{
        Users.deleteOne({_id: request.params.userID}, (err, data) => {
            if(err){
                return response.status(400).send("Error while deleting user. Please check the data")
            }
            response.status(200).send({messsage: `User with id ${request.params.userID} has been deleted`})
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal Server Error"
        })
    }
});

module.exports = router
