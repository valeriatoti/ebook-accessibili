import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => (
    <Layout>
        <h1>Ciao, mi chiamo Valeria Toti <span role="img" aria-label="mano che saluta">👋</span></h1>
        <p className="big-text">Hai una domanda per me?<br/> Vuoi che trasformi il tuo libro in un ebook ben impaginato e accessibile?<br/> Scrivimi, sarò felice di aiutarti se posso.<br/> Qui c'è il form per mandarmi il tuo messaggio:</p>

        <form name="form-contact" method="post" id="contact" data-netlify="true">
            <p>
                <label for="name">Il tuo nome
                <input type="text" name="name" id="name" placeholder="Nome" required  aria-required="true" autocomplete="name"/>
                </label>
            </p>
            <p>
                <label for="email">La tua email
                <input type="email" name="email" id="email" placeholder="esempio@email.com" required  aria-required="true" autocomplete="email"/>
                </label>
            </p>
            <p>
                <label for="message">Il tuo messaggio
                <textarea name="message" id="message" required  aria-required="true" rows="5"></textarea>
                </label>
            </p>
            <p>
                <button type="submit">
                INVIA
                </button>
            </p>
        </form>

    </Layout>
)

export default ContactPage