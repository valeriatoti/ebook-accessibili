const img1 = require ('./images/cover-new-clues.jpg')
const img2 = require ('./images/cover-aaron.jpg')

module.exports = {
   book1: {
      title: 'Clue train manifesto',
      image: img1,
      alt: 'Copertina dell\'ebook: Cluetrian Manifesto',
      description: 'Le nuove tesi del Cluetrain Manifesto',
      download: `https://github.com/valeriatoti/ebook-accessibili/blob/master/src/download/CluetrianManifesto.epub?raw=true`
     },
     book2: {
      title: 'Aaron Swartz — Una vita per la cultura libera e la giustizia sociale',
      image: img2,
      alt: 'Copertina dell\'ebook: Aaron Swartz',
      description: 'Aaron Swartz — Una vita per la cultura libera e la giustizia sociale',
      download: `https://github.com/valeriatoti/ebook-accessibili/blob/master/src/download/AARON.epub?raw=true`
     }
}