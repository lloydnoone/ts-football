import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'

//create an object that satisfies the datareader interface
const csvFileReader = new CsvFileReader('football.csv')

//create an instance of matchreader and pass in something satisfying the data reader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`)