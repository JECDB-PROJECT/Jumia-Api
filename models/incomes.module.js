const mongoose = require(`mongoose`)
const IncomesSchema = new  mongoose.Schema({
    sellerId:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    total:{type:Number},
    isDeleted:{type: Boolean, default: false},
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Incomes', IncomesSchema);