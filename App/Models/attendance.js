var attendanceSchema = mongoose.Schema({
    id: { type: String},  // company user Id (id of tenant)
    name:{ type: String, default: '' }
});

module.exports = mongoose.model('Attendance', attendanceSchema, 'attendance');