//in order to work with post and comments which is in the models folder first we need to require it then only we can work with it..

const Post = require('../models/post');
const Comment=require('../models/comments');

module.exports.create=function(req,res){
//here we are creating a new post,from the data in the form so we took it as create
    Post.create({
        //here content is took from the home.ejs file at (text-area) and model post schema at (fields)
        
        content:req.body.content,
        
        user: req.user._id  //here we are just creating the user and this can be found by using post.find({user:user_id},funcition(err,post){})

    },function(err,post){
        if(err){console.log('error in creating a post');return ;}
        return res.redirect('back');
    });
}



//let's create an action for deleting a post+comments associated to it

module.exports.destroy=function(req,res){
        //before deleting we should check wheather it exist in the database or not,that can be done by using id
        Post.findById(req.params.id,function(err,post){
            //this user is from model folder,post schema 
            //if i give id mongoose make it automatically convert into string..since when we are comparing two objects it should be in the string format
            //.id means converting the object id into string..,since the right side is automatically get converted into string for left part also am making it into string by giving '' quotes

            console.log(post) ;
            if (post.user == req.user.id){
                post.remove();//this line mean that if user and post user is same 
               

                Comment.deleteMany({post:req.params.id},function(err){
                    return res.redirect('back');
                })  //here delete many is just an function it deletes all the comments based on query passed

            }
            else{
                return res.redirect('back');
                
            }
        });
}
