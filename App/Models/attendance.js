var userSchema = mongoose.Schema({
    id: { type: String},  // company user Id (id of tenant)
    name:{ type: String, default: '' },
    password:{ type: String}
});

module.exports = mongoose.model('User', userSchema, 'user');