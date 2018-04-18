const Dog = require('../models/dog');
const mongoose = require('mongoose');
const config = require('../config/database');

//database config
mongoose.Promise = global.Promise;
mongoose.connect(config.url, (err) => {
    if (err){
        console.log('NOT able to connect to database: ', err);
    }else{
        console.log('Successfully connected to database: ' + config.db);
    }
});

var dogs = [
    new Dog({
        profileID: 1,
        name: 'Bob',
        gender: 'Male',
        personality: 'lazy',
        likesToy: true,
        likesCat: true,
        owner: "Lazy Bob's dad",
        imgPath: 'https://www.dogalize.com/wp-content/uploads/2017/04/Lazy-Dog.jpg'
    }),
    new Dog({
        profileID: 2,
        name: 'Peter',
        gender: 'Male',
        personality: 'lazy',
        likesToy: true,
        likesCat: true,
        owner: "Peterson",
        imgPath: 'http://www.dogster.com/wp-content/uploads/2015/05/lazy-dog-2_1.jpg'
    }),
    new Dog({
        profileID: 3,
        name: 'Shinner',
        gender: 'Male',
        personality: 'lazy',
        likesToy: true,
        likesCat: true,
        owner: "Jason",
        imgPath: 'https://topdogtips.com/wp-content/uploads/2016/08/Lazy-Dog-Breeds-17.jpg'
    }),
    new Dog({
        profileID: 4,
        name: 'Ginger',
        gender: 'Female',
        personality: 'lazy',
        likesToy: false,
        likesCat: false,
        owner: "Old Ginger",
        imgPath: 'http://cdn.playbuzz.com/cdn/a2b7331a-b071-4c3c-9aa4-8c4edf93f16e/8734694b-10bf-42a2-90b4-7ebd2e183fe9_560_420.jpg'
    }),
    new Dog({
        profileID: 5,
        name: 'May',
        gender: 'Female',
        personality: 'lazy',
        likesToy: false,
        likesCat: false,
        owner: "August",
        imgPath: 'https://www.fema.gov/media-library-data/1496417206771-3ae3e891aed01658abbde1aec973c224/C1lL9u9XgAA_rlY_medium.jpg'
    }),
    new Dog({
        profileID: 6,
        name: 'Fufu',
        gender: 'Male',
        personality: 'lazy',
        likesToy: true,
        likesCat: false,
        owner: "Lucy Mitch",
        imgPath: 'http://cdn.litlepups.net/2015/08/04/cute-sleeping-puppies-puppy-so-tired.jpg'
    }),
    new Dog({
        profileID: 7,
        name: 'Honey',
        gender: 'Female',
        personality: 'lazy',
        likesToy: false,
        likesCat: true,
        owner: "Honey's mon",
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5mKKXT4fxtwOEWIY8LnnIXA5LiCqAo9Z9vBcZkkyFkHNY1wi'
    }),
    new Dog({
        profileID: 8,
        name: 'Feather',
        gender: 'Male',
        personality: 'active',
        likesToy: true,
        likesCat: true,
        owner: "Bobby",
        imgPath: 'https://3milliondogs.com/blog-assets-two/2015/08/happy-jack-russell.jpg'
    }),
    new Dog({
        profileID: 9,
        name: 'Photoshop',
        gender: 'Male',
        personality: 'active',
        likesToy: true,
        likesCat: true,
        owner: "Hayley",
        imgPath: 'http://www.greymuzzle.org/sites/default/files/blogs/images/Stock_Dog_Running_Ball_Blog.jpg'
    }),
    new Dog({
        profileID: 10,
        name: 'Ryan',
        gender: 'Male',
        personality: 'active',
        likesToy: true,
        likesCat: true,
        owner: "Mark",
        imgPath: 'https://d32xvgr96w2oxp.cloudfront.net/2017/07/berger-australien-chien-sportif-07-2017-e1501749296652.jpg'
    }),
    new Dog({
        profileID: 11,
        name: 'Woofy',
        gender: 'Female',
        personality: 'active',
        likesToy: false,
        likesCat: false,
        owner: "Pink lady",
        imgPath: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
    }),
    new Dog({
        profileID: 12,
        name: 'Spoty',
        gender: 'Male',
        personality: 'active',
        likesToy: true,
        likesCat: false,
        owner: "John",
        imgPath: 'https://www.petpremium.com/wp-content/uploads/2014/11/most-active-dog-breeds.jpg'
    }),
    new Dog({
        profileID: 13,
        name: 'Whiskey',
        gender: 'Female',
        personality: 'active',
        likesToy: false,
        likesCat: true,
        owner: "Scotch Whiskdy",
        imgPath: 'https://www.outsideonline.com/sites/default/files/migrated-images_parent/migrated-images_9/doberman-pinscher_ph.jpg'
    }),
    new Dog({
        profileID: 14,
        name: 'Gin',
        gender: 'Male',
        personality: 'destructive',
        likesToy: true,
        likesCat: true,
        owner: "Ginney Gin",
        imgPath: 'http://www.clinicasalessandro.com/wp-content/uploads/2015/10/lasciare-il-cucciolo-solo-in-casa.jpg'
    }),
    new Dog({
        profileID: 15,
        name: 'London',
        gender: 'Male',
        personality: 'destructive',
        likesToy: true,
        likesCat: true,
        owner: "Dry Gin",
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOj7_evidtJa7P80nSn6eRySv9-20B7nZ6dgvfwWVb0qwy3qocw'
    }),
    new Dog({
        profileID: 16,
        name: 'Quincy',
        gender: 'Male',
        personality: 'destructive',
        likesToy: true,
        likesCat: true,
        owner: "Mark",
        imgPath: 'http://www.petsprinciple.com/wp-content/uploads/2017/04/dogmess.png'
    }),
    new Dog({
        profileID: 17,
        name: 'Mickey',
        gender: 'Female',
        personality: 'destructive',
        likesToy: false,
        likesCat: false,
        owner: "Susan",
        imgPath: 'https://d2kwjcq8j5htsz.cloudfront.net/2016/08/23161643/dog-destroy-pillow-shutterstock_81106963.jpg'
    }),
    new Dog({
        profileID: 18,
        name: 'Harry',
        gender: 'Male',
        personality: 'destructive',
        likesToy: true,
        likesCat: false,
        owner: "Potter",
        imgPath: 'https://i1.wp.com/www.allaboutdogs.net/wp-content/uploads/2016/01/perro-destructor-0.jpg?resize=700%2C410&ssl=1'
    }),
    new Dog({
        profileID: 19,
        name: 'Todd',
        gender: 'Male',
        personality: 'destructive',
        likesToy: true,
        likesCat: false,
        owner: "Jason",
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KQ9bnNiEo49euOXC9wWnX9BhUksUAolvywUWmyQlxAH5F0T3ug'
    }),
    new Dog({
        profileID: 20,
        name: 'Hermione',
        gender: 'Female',
        personality: 'destructive',
        likesToy: false,
        likesCat: true,
        owner: "Granger",
        imgPath: 'http://www.dogingtonpost.com/wp-content/uploads/2017/01/DestructiveDog-min.jpg'
    }),
    new Dog({
        profileID: 21,
        name: 'Lily',
        gender: 'Female',
        personality: 'destructive',
        likesToy: false,
        likesCat: true,
        owner: "Anne",
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6md4H2wxyeFlDI4iiFCBdvlf_1dYRTP6WmBnyQiC_-zRsxpIC'
    }),
    new Dog({
        profileID: 22,
        name: 'Rome',
        gender: 'Male',
        personality: 'psychotic',
        likesToy: true,
        likesCat: true,
        owner: "Rome's dad",
        imgPath: 'http://www.hahastop.com/pictures/Psychotic_Dog.jpg'
    }),
    new Dog({
        profileID: 23,
        name: 'Lucy',
        gender: 'Female',
        personality: 'psychotic',
        likesToy: false,
        likesCat: false,
        owner: "Nancy",
        imgPath: 'https://germanshepherdadventures.files.wordpress.com/2013/04/zendog.jpg?w=614'
    }),
    new Dog({
        profileID: 24,
        name: 'Italy',
        gender: 'Male',
        personality: 'psychotic',
        likesToy: true,
        likesCat: false,
        owner: "Tom",
        imgPath: 'https://barkpost.com/wp-content/uploads/2015/10/reddit-dog-jokes-20.jpg?q=70&fit=crop&crop=entropy&w=808&h=808'
    }),
    new Dog({
        profileID: 25,
        name: 'Pacific',
        gender: 'Female',
        personality: 'psychotic',
        likesToy: false,
        likesCat: true,
        owner: "Pacific's mon",
        imgPath: 'https://assets.rbl.ms/10735087/980x.jpg'
    })
]

var done = 0;
for(var i=0; i<dogs.length; i++){
    dogs[i].save(function(err,res){
        if(err){
            console.log(err);
        }
        done++;
        if(done === dogs.length){
            console.log('Saved all dogs to database')
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}