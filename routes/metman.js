var express = require('express');
var router = express.Router();
var url = require("url");
var fs = require("fs");
var exec = require('child_process').execFile;


var mode0fields =  ["RM", "UEFF", "HEIGHT", "WEIGHT", "G", "PCAB",
    "TCAB", "TDEWC", "TW", "VCAB", "VF", "AKUG", "ALUG",
    "EUG", "LCG", "TWI", "WF", "DT", "MCASES", "PRINTI", "SETI"];

var mode0defaults = ["800.0", "0.0", "67.0", "154.0", "1", "14.7",
    "70.0", "50.0", "70.0", "25.0", "1.0", "0.046", "0.0141",
    "0.90", "F", "62.0", "0.0", "0.05", "0.0", "60.0", "180.0"];

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

function runFortran(len, params) {
    if (len > 0) {
        var message = " &INPUT\n";
        message += "      " + "MODE" + "=" + params["MODE"] + ",\n";
        for (k in params) {
            if (k != "MODE") {
                message += "      " + k + "=" + params[k] + ",\n";
            }
        }
        message += " &END";
        try {
            fs.writeFile("./public/files/case.inp", message, function(err) {
                if(err) {
                    return console.log(err);
                }
            });
            exec('./public/files/MetManFortran.exe', function(error, stdout, stderr) {
              if (error) {
                  return console.log(err);
              }
            });
            fs.readFile('./public/files/case.out', 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                return data;
            });
        } catch (err) {
            return err.stack;
        }
    }
    return "No message Yet";
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var params = url.parse(req.url,true).query;
    var re = runFortran(Object.keys(params).length, params);
    res.render('metman', {data: re, m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
});


module.exports = router;
