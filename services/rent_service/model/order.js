const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,

    book_id: {
        type: Number,
        required: true
    },
    order_id: mongoose.Schema.Types.ObjectId,

    renter_id: {
        type: String,
        required: true
    },
    book_owner_id: {
        type: String,
        required: true
    },
    order_status: {
        type: String,
        default : 'Pending'
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    
    
}, {
    versionKey: false
});

module.exports = mongoose.model('OrderDoc', orderSchema);