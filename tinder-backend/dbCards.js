import mongoose from "mongoose";
import express from "express";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String 
})

export default mongoose.model('dbcards', cardSchema);