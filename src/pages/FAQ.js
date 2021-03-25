import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Typography, Container } from '@material-ui/core';
export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Zero Waste Alternative"
        description="Frequently Asked Questions about Zero Waste Alternative"
      />
      <Layout>
        <main>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            FAQ
          </Typography>
          <Container>
            <Typography variant="h2">Why this project?</Typography>
            <Typography variant="body1" component="p">
              When I first learned how to code, it was because I wanted to help
              people meet their needs.
            </Typography>
            <Typography paragraph variant="body1" component="p">
              I am also deeply concerned about the amount of waste we generate
              that cannot be productively used by other creatures on Earth,
              actively hurts them, and contaminates our resource supplies. Doing
              this enables me to "feed to birds with one scone."
            </Typography>
            <Typography variant="h2">
              Why only offer 3 items per product?
            </Typography>
            <Typography paragraph variant="body1" component="p">
              Only 3 items per product are listed, because this site has 2
              goals:
              <ol>
                <li>
                  Help in the global effort to reduce non-biodegradable waste.
                </li>
                <li>
                  Help people find items that meet their needs, bearing goal 1
                  in mind.
                </li>
              </ol>
              Listing too many products on a site is the same strategy casinos
              and malls use. <i>Their</i> goal is for you to lose track of time
              and spend more money.{' '}
              <strong>Different goals, different strategies.</strong>
            </Typography>
          </Container>
        </main>
      </Layout>
    </>
  );
}
