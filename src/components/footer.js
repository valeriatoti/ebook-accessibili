import React from 'react'
// import { Link } from 'gatsby'
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <footer>
    <div className="container-footer">
      <div>
      <a
      href="https://github.com/valeriatoti"
      rel="nofollow"
      className="social-icon"
      >
      <FaGithub
      role="img"
      aria-label="icona Github"
      />
      </a>
      <a
      href="https://www.linkedin.com/in/valeria-toti/"
      rel="nofollow"
      className="social-icon"
      >
      <FaLinkedin
      role="img"
      aria-label="icona Linkedin"
      />
      </a>
      <a
      href="https://medium.com/@valeria.toti"
      rel="nofollow"
      className="social-icon"
      >
      <FaMedium
      role="img"
      aria-label="icona Medium"
      />
      </a>
      <a
      href="https://twitter.com/valeria_toti"
      rel="nofollow"
      className="social-icon"
      >
      <FaTwitter
      role="img"
      aria-label="icona Twitter"
      />
      </a>

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
