const img1 = require ('./images/steiner.jpg')
const img2 = require ('./images/cover-aaron.jpg')
const img3 = require ('./images/cover-new-clues.jpg')


module.exports = {
   book3: {
      title: 'Clue train manifesto',
      image: img3,
      alt: 'Copertina dell\'ebook: Cluetrian Manifesto',
      description: 'Le nuove tesi del Cluetrain Manifesto.',
      download: `https://github.com/valeriatoti/ebook-accessibili/blob/master/src/download/CluetrainManifesto.epub?raw=true`
     },
     book2: {
      title: 'Aaron Swartz — Una vita per la cultura libera e la giustizia sociale',
      image: img2,
      alt: 'Copertina dell\'ebook: Aaron Swartz',
      description: 'Aaron Swartz — Una vita per la cultura libera e la giustizia sociale.',
      download: `https://github.com/valeriatoti/ebook-accessibili/blob/master/src/download/AARON.epub?raw=true`
     },
     book1: {
        title: 'Il mondo dei Sensi e il mondo dello Spirito',
        image: img1,
        alt: 'Copertina dell\'ebook: Il mondo dei Sensi e il mondo dello Spirito di Rudolf Steiner',
        description: 'Il mondo dei Sensi e il mondo dello Spirito di Rudolf Steiner.',
        download: `https://github.com/valeriatoti/ebook-accessibili/blob/master/src/download/sensi-e-spirito.epub?raw=true`
     }
}