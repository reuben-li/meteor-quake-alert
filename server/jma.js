let cheerio = require('cheerio');
let request = require('request');

const level1 = 'http://www.jma.go.jp/en/quake/quake_sindo_index.html';
const level2 = 'http://www.jma.go.jp/en/quake/quake_singen_index.html';
const level3 = 'http://www.jma.go.jp/en/quake/quake_local_index.html';

request(level1, function(err, res, html) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(html);
    $('.infotable table tr').each(function(i,elem){
      console.log($(this).text());
    });
  }
});
