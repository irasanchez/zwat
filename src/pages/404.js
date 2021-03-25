import * as React from 'react';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
// markup
const NotFoundPage = () => {
  return (
    <>
      <SEO title="" description="" />
      <Layout>
        <main>
          <Typography variant="h1" component="h1">
            Sorry, we don't have a recommendation for the item you're looking
            for. The list is growing as more products are found.
          </Typography>
          <Link to="/">Click here to look for something else.</Link>
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
