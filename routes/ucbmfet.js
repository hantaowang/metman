/**
 * Created by willwang on 2/3/17.
 */
var express = require('express');
var router = express.Router();

var fs = require("fs");

function dicttosortedlist(dict) {

    var lst = [];
    for(var key in dict) {
        lst.push([key, dict[key]]);
    }

    return lst.sort(function(a, b){
        return a[1] - b[1];
    }).reverse();
}

var post_most_liked = dicttosortedlist(JSON.parse(fs.readFileSync("./public/json/posts_most_liked.json")));
var post_most_commented = dicttosortedlist(JSON.parse(fs.readFileSync("./public/json/posts_most_commented.json")));


console.log(post_most_commented);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ucbmfet',{
        pml1ur: post_most_liked[0][0],
        pml2ur: post_most_liked[1][0],
        pml3ur: post_most_liked[2][0],
        pml4ur: post_most_liked[3][0],
        pml5ur: post_most_liked[4][0],
        pml10ur: post_most_liked[9][0],
        pmc1ur: post_most_commented[0][0],
        pmc2ur: post_most_commented[1][0],
        pmc3ur: post_most_commented[2][0],
        pmc4ur: post_most_commented[3][0],
        pmc5ur: post_most_commented[4][0]});
});

module.exports = router;