import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Checklist = styled.ul`
    list-style-type: none;
    margin-left: 0;
    li {
        margin-bottom: 1.5em;
    }
    input {
        width:30px;
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
<h1>Checklist</h1>
<p>Creare libri digitali accessibili è un processo impegnativo e — nelle varie fasi di questo processo — si rischia di dimenticare qualcosa di importante o di non rispettare i requisiti di accessibilità. Quindi, per non sbagliare e non tralasciare nulla, ho stilato una <b>checklist</b>. È una buona base di partenza per garantire l'accessibilità dell'ePub. Forse nel tuo caso questa lista potrebbe non risultare esaustiva, allora puoi fare riferimento alla <Link to="/risorse/">documentazione sull'accessibilità digitale</Link>.</p>
<Checklist>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="lang-html"
            />
            <code><b>html</b> lang="it" xml:lang="it"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="title-tag"
            />
            <code><b>title</b></code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="cover"
            />
            <code><b>body</b> epub:type="cover"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="frontmatter"
            />
            <code><b>body</b> epub:type="frontmatter"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="bodymatter"
            />
            <code><b>body</b> epub:type="bodymatter"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="backmatter"
            />
            <code><b>body</b> epub:type="backmatter"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="titlepage"
            />
            <code><b>section</b> epub:type="titlepage"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="credits"
            />
            <code><b>section</b> epub:type="credits" role="doc-credits"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="foreword"
            />
            <code><b>section</b> epub:type="foreword" role="doc-foreword"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="chapter"
            />
            <code><b>section</b> epub:type="chapter" role="doc-chapter"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="afterword"
            />
            <code><b>section</b> epub:type="afterword" role="doc-afterword"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="nav"
            />
            <code><b>nav</b> epub:type="toc" role="doc-toc"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="landmarks"
            />
            <code><b>nav</b> epub:type="landmarks" role="directory"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="page-list"
            />
            <code><b>nav</b> epub:type="page-list" hidden="hidden"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="page-pagebreak"
            />
            <code><b>span</b> epub:type="page-pagebreak" role="doc-pagebreak"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            />
            <code><b>span</b> lang="en" xml:lang="en"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="img-alt"
            />
            <code><b>img</b> epub:type="doc-cover"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="img-alt"
            />
            <code><b>img</b> alt="" role="presentation"</code>
            <span>||</span>
            <code><b>img</b> alt="descrizione breve"</code>
        </label>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="img-long-description"
            />
            <code>Descrizione lunga dell'immagine</code>
        </label>
        <p id="img-long-description"><a href="http://kb.daisy.org/publishing/docs/html/images.html#ex-03">Una soluzione di descrizione lunga</a></p>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="accessibility-metadata"
            />
            <code>Metadati schema.org</code>
        </label>
        <p id="accessibility-metadata"><a href="http://kb.daisy.org/publishing/docs/metadata/schema-org.html">Alcuni esempi di metadati</a></p>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="onix-file"
            />
            <code>ONIX lista 196</code>
        </label>
        <p id="onix-file"><a href="https://www.editeur.org/files/ONIX%20for%20books%20-%20code%20lists/ONIX_BookProduct_Codelists_Issue_44.html#codelist196">Lista 196 dedicata all'accessibilità</a></p>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="epubcheck"
            />
            <code>Convalida dell'ePub</code>
        </label>
        <p id="epubcheck"><a href="https://github.com/w3c/epubcheck">EpubCheck</a></p>
    </li>
    <li>
        <label>
            <input
            type="checkbox"
            aria-describedby="ace"
            />
            <code>Convalida dell'accessibilità</code>
        </label>
        <p id="ace"><a href="https://inclusivepublishing.org/toolbox/accessibility-checker/getting-started/#install-ace">ACE by DAISY</a></p>
    </li>
</Checklist>
</Layout>
)

export default ChecklistPage