import React from 'react'
import Layout from '../components/layout'

const ResourcePage = () => (
    <Layout>
        <h1>Risorse per gli editori</h1>
        <p>Strumenti e documentazione di riferimento per chi realizza e pubblica libri digitali accessibili.</p>
        <h2>Standard</h2>
        <ul>
        <li><a href="https://www.w3.org/TR/html/">HTML – [W3C]</a></li>
        <li><a href="https://www.w3.org/Translations/WCAG21-it/">WCAG 2.1 – [W3C]</a></li>
        <li><a href="https://www.w3.org/Submission/2017/SUBM-epub-a11y-20170125/">EPUB Accessibility 1.0 – [W3C]</a></li>
        <li><a href="https://www.w3.org/TR/2017/REC-dpub-aria-1.0-20171214/">Digital Publishing WAI-ARIA – [W3C]</a></li>
        <li><a href="https://www.w3.org/Submission/2017/SUBM-epub-a11y-20170125/#sec-disc-package">Metadata – [W3C]</a></li>
        </ul>
        <h2>Documentazione</h2>
        <ul>
        <li><a href="http://kb.daisy.org/publishing/docs/">Accessible Publishing Knowledge Base – [DAISY]</a></li>
        <li><a href="https://www.vitalsource.com/products/guida-di-riferimento-rapido-all-39-editoria-bisg-the-book-industry-study-vbisgaccessibilityit">Guida all'editoria accessibile – [BISG]</a></li>
        <li><a href="http://diagramcenter.org/59-image-guidelines-for-epub-3.html">Image Guidelines for EPUB 3 – [DIAGRAM CENTER]</a></li>
        <li><a href="http://kb.daisy.org/publishing/docs/html/images.html">Image Descriptions – [DAISY]</a></li>
        <li><a href="http://kb.daisy.org/publishing/docs/metadata/schema-org.html">Accessibility Metadata – [DAISY]</a></li>
        </ul>
        <h2>Strumenti</h2>
        <ul>
        <li><a href="https://github.com/w3c/epubcheck">EPUBCheck validator for EPUB – [DAISY]</a></li>
        <li><a href="https://inclusivepublishing.org/toolbox/accessibility-checker/">ACE, Accessibility Checking Tool – [DAISY]</a></li>
        <li><a href="https://webaim.org/resources/contrastchecker/">Color Contrast Checker – [WebAIM]</a></li>
        <li><a href="http://diagramcenter.org/making-images-accessible.html">Accessible Images – [DIAGRAM CENTER]</a></li>
        <li><a href="https://mathmlcloud.org/">MathML Cloud – [DIAGRAM CENTER]</a></li>
        </ul>
    </Layout>
)


export default ResourcePage