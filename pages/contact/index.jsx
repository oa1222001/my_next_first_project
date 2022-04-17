import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";

function ContactPage() {
    return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us"/>
      </Head>
    <ContactForm/>
    </Fragment>
    );
  }
  
  export default ContactPage;
  
