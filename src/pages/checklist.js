import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/SEO'

const Checklist = styled.ul`
  list-style-type: none;
  margin-left: 0;
  li {
    margin-bottom: 1.5em;
  }
  input {
    width: 30px;
  }
  code {
    font-size: 1em;
  }
  span {
    font-size: 1em;
  }
  p {
    margin-left: 30px;
  }
`

const ChecklistPage = () => (
  <Layout>
    <SEO
      title="Checklist accessibilità"
      description="Qui trovi una checklist utile al momento della creazione di un ePub. Lista importante per verificare che i passi essenziali siano stati implementati: una solida base per un ebook accessibile. "
    />
    <h1 id="checklist">Checklist per sviluppatori di ePub</h1>
    <p>
      <strong>Creare libri digitali accessibili</strong> è un processo impegnativo e — nelle
      varie fasi di questo processo — si rischia di dimenticare qualcosa di
      importante o di non rispettare i requisiti di accessibilità. Pertanto, ho stilato una <strong>checklist</strong> da utilizzare durante la fase di sviluppo.
    </p>
    <Checklist aria-labelledby="checklist" role="group">
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>html</b> lang="it" xml:lang="it"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>title</b>
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>body</b> epub:type="cover"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>body</b> epub:type="frontmatter"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>body</b> epub:type="bodymatter"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>body</b> epub:type="backmatter"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>section</b> epub:type="titlepage"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>section</b> epub:type="credits" role="doc-credits"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>section</b> epub:type="foreword" role="doc-foreword"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>section</b> epub:type="chapter" role="doc-chapter"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>section</b> epub:type="afterword" role="doc-afterword"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>nav</b> epub:type="toc" role="doc-toc"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>nav</b> epub:type="landmarks" role="directory"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>nav</b> epub:type="page-list" hidden="hidden"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>span</b> epub:type="page-pagebreak" role="doc-pagebreak"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>span</b> lang="en" xml:lang="en"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>img</b> epub:type="doc-cover"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>
            <b>img</b> alt="" role="presentation"
          </code>
          <span>||</span>
          <code>
            <b>img</b> alt="descrizione breve"
          </code>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>Descrizione lunga dell'immagine</code>
        </label>
        <p id="img-long-description">
          <a href="http://kb.daisy.org/publishing/docs/html/images.html#ex-03">
            Una soluzione di descrizione lunga
          </a>
        </p>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>Metadati schema.org</code>
        </label>
        <p id="accessibility-metadata">
          <a href="http://kb.daisy.org/publishing/docs/metadata/schema-org.html">
            Alcuni esempi di metadati
          </a>
        </p>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>ONIX lista 196</code>
        </label>
        <p id="onix-file">
          <a href="https://www.editeur.org/files/ONIX%20for%20books%20-%20code%20lists/ONIX_BookProduct_Codelists_Issue_44.html#codelist196">
            Lista 196 dedicata all'accessibilità
          </a>
        </p>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>Convalida dell'ePub</code>
        </label>
        <p id="epubcheck">
          <a href="https://github.com/w3c/epubcheck">EpubCheck</a>
        </p>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <code>Convalida dell'accessibilità</code>
        </label>
        <p id="ace">
          <a href="https://inclusivepublishing.org/toolbox/accessibility-checker/getting-started/#install-ace">
            ACE by DAISY
          </a>
        </p>
      </li>
    </Checklist>
  </Layout>
)

export default ChecklistPage
