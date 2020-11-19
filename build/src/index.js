"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
//create an object that satisfies the datareader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create an instance of matchreader and pass in something satisfying the data reader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
