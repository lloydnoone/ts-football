import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'
import { HtmlReport } from './reportTargets/HtmlReport'

//create an object that satisfies the datareader interface
const csvFileReader = new CsvFileReader('football.csv')

//create an instance of matchreader and pass in something satisfying the data reader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches)


