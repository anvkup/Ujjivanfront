import mongoose from 'mongoose'

const stageSchema=mongoose.Schema({
    user:String,
    stageCode:Number
})

export default mongoose.model('stage', stageSchema)