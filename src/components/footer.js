import React from 'react'
// import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    <div className="container-footer">
      <div>
      {/* <p><i class="fas fa-envelope" aria-hidden="true"></i> <Link to="/contatti/">Contattami</Link></p> */}
      <p>copyright © 2019 ebookaccessibili.it</p>
      <p>Valeria Toti — P. IVA 13150691007 | Contatti: <strong>valeria@ebookaccessibili.it</strong></p>
      </div>
      <div>
      <p>
      Tutti gli ebook sono validati con <a href="https://github.com/idpf/epubcheck" rel="nofollow">ePubChecker</a> e
      <a href="https://daisy.github.io/ace/" rel="nofollow"> Ace by DAISY</a>
      </p>
      <p>Questo sito è realizzato con <a href="https://www.gatsbyjs.org/" rel="nofollow">Gatsby</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
