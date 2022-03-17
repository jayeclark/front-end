import fs from 'fs';
import pkg from 'pg';
const { Client } = pkg;
const db = new Client();
await db.connect(''); 

let bootstrap;

try {
  bootstrap = fs.readFileSync('bootstrap.min.css', 'utf8');
} catch (err) {
  console.log(err);
}
let root = bootstrap.match(/:root\{[^}{]+\}/);
let entries = [root[0], ...bootstrap.match(/\}[^}{]+\{[^}{]+\}/g).map(x => x.replace(/(^\}|^\s\*\/)/,'').trim())];

let mediaSubsheets = bootstrap.match(/@media\s[^}{]+\{(?!\}\})+/g)
  .map(x => x.replace(/(@media\s)((?!\{)+)(\{)/,'$2').replace(/\){0,1}\{$/,'').replace(/^@media\s\(/,''))

mediaSubsheets = mediaSubsheets.filter((x,i) => mediaSubsheets.indexOf(x, i+1) < 0);


// Parse the file into individual entries and their properties
for (let i = 0; i < entries.length; i++) {
  const entry = parseEntry(entries[i]);
  if (entries[i].split('{').length < 2) {
    console.log('oops', entries[i], i)
  }
  else {
    // TODO Friday
    // create entries in db
    // create modifier in db if it doesn't exist
    // create props in db
    // record propvalues
    // associate propvalue with each entryName and with the main stylesheet
    // turn these into reuseable functions. (also the parsing done earlier with the main sheet & media sheets)
  }
  if (i === 0) {
    //console.log(entry);
  }
}

function parseEntry(str) {
  const props = str.split('{')[1]?.replace(/\}$/,'').split(";");
  return {
    entryNames: str.split('{')[0].split(','),
    props: props?.map(x => x.split(':'))
  }
}