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

var mode2fields =  ["AC", "ARI", "RM", "UEFF", "AVRM", "HEIGHT",
    "WEIGHT", "AKUG", "ALUG", "EUG", "CFMS", "CPG", "PG", "PO2",
    "TDEW", "TGIN", "VOLHMT", "ACSUIT", "ARSUIT", "ALS", "AKS", "EIS", "EOS", "CPS", "QASRB",
     "WS", "CPW", "LCG", "TWI", "WF", "DT", "MCASES", "PRINTI", "SETI"];

var mode1defaults = ["0", "800", "19.5", "15.5", "1", "14.7",
    "25", "70", "50", "0.24", "70", "0.0423", "0.0141",
    "0.046", "0.9", "1.0", "F", "0", "0.05", "180", "60", "0", "10*0.0", "62", "67", "154"];

var mode1fields = ["UEFF", "RM", "AC", "ARI", "G", "PCAB",
    "VCAB", "TCAB", "TDEWC", "CPG", "TW", "ALUG", "ALUG", "AKUG",
    "EUG", "VF", "LCG", "WF", "DT", "SETI", "PRINTI", "MCASES", "QASRB", "TWI", "HEIGHT", "WEIGHT"];

var mode2defaults = ["19.5", "19.5", "1600", "0.0", "F", "67", "154", "0.046",
    "0.0141", "0.9", "6.0", "0.22", "4.3", "4.3", "40.0", "60.0", "0.1968",
    "9.82, 202.95, 202.95, 205.96, 205.96, 200.81, 200.81, 201.81, 201.81, 202.52",
    "9.82, 202.95, 202.95, 205.96, 205.96, 200.81, 200.81, 201.81, 201.81, 202.52",
    "9*0.0033, 200.021", "9*0.000214, 200.02155", "10*0.90", "9*0.91, 200.62", "9*0.22, 200.30",
    "10*120.0", "22.6, 204.53, 204.53, 207.65, 207.65, 200.995, 200.995, 203.68, 203.68, 204.56",
    "1.0", "T", "65.0", "185.0", "0.05", "0", "240.0", "240.0"];

function runFortran(len, params, res) {
    re = ""
    if (len > 0) {
        var message = " &INPUT\n";
        message += "      " + "MODE" + "=" + params["MODE"] + ",\n";
        for (k in params) {
            if (k != "MODE") {
                message += "      " + k + "=" + params[k] + ",\n";
            }
        }
        message += " &END";
        fs.writeFile("./case.inp", message, function(err) {
            if(err) {
              console.log(err);
              res.render('metman', {data: err, m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
              return;
            }
            exec('./MetManFortran.exe', function(error, stdout, stderr) {
              if (error) {
                  console.log(stderr);
                  res.render('metman', {data: stderr, m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
                  return;
              }
              fs.readFile('./case.out', 'utf8', function (err,data) {
                  if (err) {
                    console.log(err);
                    res.render('metman', {data: err, m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
                    return;
                  }
                  console.log(data);
                  res.render('metman', {data: data, m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
              });
            });
        });
    } else {
      res.render('metman', {data: "", m0f: mode0fields, m0d: mode0defaults, m1f: mode1fields, m1d: mode1defaults, m2f: mode2fields, m2d: mode2defaults});
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var params = url.parse(req.url,true).query;
    runFortran(Object.keys(params).length, params, res);
});


module.exports = router;
