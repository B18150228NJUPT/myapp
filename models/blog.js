var mongoose=require('mongoose'); 
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:String,
    author_name:String,
    category:String,
    date:Date
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;