// const { populate } = require('../models/post');
const  Post=require('../models/post');
const User=require('../models/user');
  
//note:when ever this post is getting called it will store all this posts in the post down we took na and this gets send to the views folder home .ejs file 

module.exports.home = function(req, res){
//     // console.log(req.cookies);
//     // res.cookie('user_id', 25);

//     Post.find({},function(err,posts){
//         return res.render('home', {
//             title: "Codeial | Home",
//             posts:posts  //here just passingt  all the posts
//     })

//     });
// }
//     // populate the user of each post

//this is just an query here we are finding all the posts and populating the user of each post after that we are doing a call back ,with this we get the whole user object by the above one we get only the user id but with this we get whole object..


//display comments and related user using nested population
    Post.find({}).populate('user')
    .populate({    //populate is  the syntax u can refer in the documentation
        path:'comments',
        populate:{
            path:'user'
        }
    })

    .exec(function(err, posts){

        User.find({}, function(err, users){
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
        });

       
    })

}
//module.exports.actionName = function(req, res){}