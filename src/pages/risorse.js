import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import {
  FaCrown,
  FaFileAlt,
  FaToolbox,
  FaBookReader,
  FaVideo,
} from 'react-icons/fa'

const ResourcePage = () => (
  <Layout>
    <SEO
      title="Risorse per editori e sviluppatori di ebook"
      description="Ecco un elenco di strumenti e risorse di riferimento per chi desidera creare e pubblicare libri digitali accessibili"
    />
    <h1>Risorse per gli editori</h1>
    <p>
      Strumenti e documentazione di riferimento per chi realizza e pubblica
      libri digitali accessibili.
    </p>
    <h2>
      <FaCrown aria-hidden="true" /> Standard
    </h2>
    <ul>
      <li>
        <a href="https://www.w3.org/TR/html/">HTML – [by W3C]</a>
      </li>
      <li>
        <a href="https://www.w3.org/Translations/WCAG21-it/">
          WCAG 2.1 – [by W3C]
        </a>
      </li>
      <li>
        <a href="https://www.w3.org/Submission/2017/SUBM-epub-a11y-20170125/">
          EPUB Accessibility 1.0 – [by W3C]
        </a>
      </li>
      <li>
        <a href="https://www.w3.org/TR/2017/REC-dpub-aria-1.0-20171214/">
          Digital Publishing WAI-ARIA – [by W3C]
        </a>
      </li>
      <li>
        <a href="https://www.w3.org/Submission/2017/SUBM-epub-a11y-20170125/#sec-disc-package">
          Metadata – [by W3C]
        </a>
      </li>
    </ul>
    <h2>
      <FaFileAlt aria-hidden="true" /> Documentazione
    </h2>
    <ul>
      <li>
        <a href="http://kb.daisy.org/publishing/docs/">
          Accessible Publishing Knowledge Base – [by DAISY]
        </a>
      </li>
      <li>
        <a href="http://www.idpf.org/epub/profiles/edu/structure/">
          EPUB for Education Structural Semantics – [IDPF]
        </a>
      </li>
      <li>
        <a href="https://www.vitalsource.com/products/guida-di-riferimento-rapido-all-39-editoria-bisg-the-book-industry-study-vbisgaccessibilityit">
          Guida all'editoria accessibile – [by BISG]
        </a>
      </li>
      <li>
        <a href="http://diagramcenter.org/59-image-guidelines-for-epub-3.html">
          Image Guidelines for EPUB 3 – [by DIAGRAM CENTER]
        </a>
      </li>
      <li>
        <a href="http://kb.daisy.org/publishing/docs/html/images.html">
          Image Descriptions – [by DAISY]
        </a>
      </li>
      <li>
        <a href="http://kb.daisy.org/publishing/docs/metadata/schema-org.html">
          Accessibility Metadata – [by DAISY]
        </a>
      </li>
      <li>
        <a href="https://www.editeur.org/files/ONIX%20for%20books%20-%20code%20lists/ONIX_BookProduct_Codelists_Issue_44.html#codelist196">
          ONIX Code List 196: EPUB Accessibility Details – [by Editeur]
        </a>
      </li>
    </ul>
    <h2>
      <FaToolbox aria-hidden="true" /> Strumenti
    </h2>
    <ul>
      <li>
        <a href="https://github.com/w3c/epubcheck">
          EPUBCheck validator for EPUB – [by DAISY]
        </a>
      </li>
      <li>
        <a href="https://inclusivepublishing.org/toolbox/accessibility-checker/">
          ACE, Accessibility Checking Tool – [by DAISY]
        </a>
      </li>
      <li>
        <a href="https://webaim.org/resources/contrastchecker/">
          Color Contrast Checker – [by WebAIM]
        </a>
      </li>
      <li>
        <a href="https://contrast-ratio.com/">
          WCAG 2.0 on contrast ratio – [by Lea Verou]
        </a>
      </li>
      <li>
        <a href="http://diagramcenter.org/making-images-accessible.html">
          Accessible Images – [by DIAGRAM CENTER]
        </a>
      </li>
      <li>
        <a href="https://mathmlcloud.org/">
          MathML Cloud – [by DIAGRAM CENTER]
        </a>
      </li>
    </ul>
    <h2>
      <FaBookReader aria-hidden="true" /> Libri
    </h2>
    <ul>
      <li>
        <a href="https://amzn.to/2GrnU5o">
          Accessible EPUB 3 – [by Matt Garrish]
        </a>
      </li>
    </ul>
    <h2>
      <FaVideo aria-hidden="true" /> Video
    </h2>
    <ul>
      <li>
        <a href="https://youtu.be/D47t8UDOXXw">
          Guidelines for Creating Accessible Ebooks – [by All Children Reading &
          Charles LaPierre]
        </a>
      </li>
      <li>
        <a href="https://youtu.be/u4IzKmpmEU0">
          Accessibility Metadata for EPUB and the Web – [by DIAGRAM CENTER]
        </a>
      </li>
    </ul>
  </Layout>
)

export default ResourcePage
