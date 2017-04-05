var express = require('express');
var router = express.Router();


var mode0fields =  ["UEFF", "RM", "AC", "ARI", "G", "PCAB",
    "VCAB", "TCAB", "TDEWC", "CPG", "TW", "ALUG", "ALUG", "AKUG",
    "EUG", "VF", "LCG", "WF", "DT", "SETI", "PRINTI", "MCASES", "QASRB", "TWI", "HEIGHT", "WEIGHT"];

var mode0defaults = ["0", "800", "19.5", "15.5", "1", "14.7",
    "25", "70", "50", "0.24", "70", "0.0423", "0.0141",
    "0.046", "0.9", "1.0", "F", "0", "0.05", "180", "60", "0", "10*0.0", "62", "67", "154"];

var mode1fields =  ["UEFF", "RM", "AC", "ARI", "G", "PCAB",
    "VCAB", "TCAB", "TDEWC", "CPG", "TW", "ALUG", "ALUG", "AKUG",
    "EUG", "VF", "LCG", "WF", "DT", "SETI", "PRINTI", "MCASES", "QASRB", "TWI", "HEIGHT", "WEIGHT"];

var mode1defaults = ["0", "800", "19.5", "15.5", "1", "14.7",
    "25", "70", "50", "0.24", "70", "0.0423", "0.0141",
    "0.046", "0.9", "1.0", "F", "0", "0.05", "180", "60", "0", "10*0.0", "62", "67", "154"];

var mode2fields = ["UEFF", "RM", "AC", "ARI", "G", "PCAB",
    "VCAB", "TCAB", "TDEWC", "CPG", "TW", "ALUG", "ALUG", "AKUG",
    "EUG", "VF", "LCG", "WF", "DT", "SETI", "PRINTI", "MCASES", "QASRB", "TWI", "HEIGHT", "WEIGHT"];

var mode2defaults = ["0", "800", "19.5", "15.5", "1", "14.7",
    "25", "70", "50", "0.24", "70", "0.0423", "0.0141",
    "0.046", "0.9", "1.0", "F", "0", "0.05", "180", "60", "0", "10*0.0", "62", "67", "154"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('metman', {m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
});

module.exports = router;
