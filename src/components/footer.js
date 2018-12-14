import React from 'react'
// import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    <div className="container-footer">
      <div>
      {/* <p><i class="fas fa-envelope" aria-hidden="true"></i> <Link to="/contatti/">Contattami</Link></p> */}
      <p>copyright © 2018 ebookaccessibili.it</p>
      </div>
      <div>
      <p>
      Tutti gli ebook sono validati con <a href="https://github.com/idpf/epubcheck">ePubChecker</a> e
      <a href="https://daisy.github.io/ace/"> Ace by DAISY</a>
      </p>
      <p>Questo sito è realizzato con <a href="https://www.gatsbyjs.org/">Gatsby</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
