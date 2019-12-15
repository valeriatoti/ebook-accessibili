import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Valeria Toti"
      description="Se hai bisgno di creare il tuo ebook, questo è il sito giusto. Vuoi un ebook ben impaginato, con una grafica che metta in risalto i tuoi contenuti? Inoltre vuoi che il tuo ebook sia accessibile anche ai disabili?"
    />
    <blockquote>
      <h1>Chi sono</h1>
      <p>
        Mi chiamo Valeria Toti, ho sviluppato gli ebook che trovi su questo
        sito.
      </p>

      <p>
        Hai presente l'artigiano che lavora nel proprio laboratorio, io immagino
        uno di quegli artigiani che lavorano il legno... L'artigiano è
        totalmente assorto in quello che fa, tutto il suo lavoro è teso a
        raggiungere un obiettivo che lui solo conosce. L'artigiano è un mago, ha
        il potere di creare. Crea per sé e per gli alri.
      </p>

      <p>
        Il progetto <em>ebookaccessibili</em> è un laboratorio e io, forse, sono
        un artigiano. Curo la grafica e l'impaginazione degli ebook poiché la
        bellezza è importante. Curo il codice e i metadati, con attenzione,
        affinché questi libri digitali li possano leggere tutti, persone
        disabili incluse.
        <br />
        Questo laboratorio esiste anche grazie ai contenuti del{' '}
        <em>dominio pubblico</em> e con licenza{' '}
        <em lang="en">creative commons</em>, contenuti che posso modificare e
        condividere liberamente.
      </p>

      <p>
        EbookAccessibili.it è inoltre un progetto che dà supporto agli editori e
        a chiunque voglia pubblicare il proprio libro in versione digitale.{' '}
        <span role="img" aria-label="Saluto vulcaniano">
          🖖
        </span>
      </p>
      <p>
        Vuoi un ebook <strong> ben impaginato</strong>, con una{' '}
        <strong>bella grafica</strong>, un ebook che possa essere letto anche da
        chi utilizza <strong>tecnologie assistive</strong>? Scrivimi:{' '}
        <a href="mailto:valeria@ebookaccessibili.it">
          {' '}
          valeria@ebookaccessibili.it
        </a>
      </p>
    </blockquote>
  </Layout>
)

export default AboutPage
