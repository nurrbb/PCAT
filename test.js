const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(
  'mongodb://127.0.0.1:27017/pcat-test-db'
  // ,{
  // useNewUrlParser: true,
  // useUnifiedTopology: true}
);

const PhotoSchema = new Schema({
  title: String,
  description: String,
});
const Photo = mongoose.model('Photo', PhotoSchema);

Photo.create({
  title: 'Photo title 2',
  description: 'Photo Description 2',
});

Photo.find({}, (err, data) => {
  console.log(data);
});

const id = '6938084cebeb3e30814a82cc';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo title 1 UPDATED',
    description: 'Photo description 1 UPDATED',
  },{
    new: true
  },
  (err, data) => {
    console.log(data);
  }
);

Photo.findByIdAndDelete(id,(err,data) =>{
    console.log("Photo is removed...")
})
