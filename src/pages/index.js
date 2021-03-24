import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Search from '../components/Search';
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Helmet></Helmet>
      <Layout style={{ maxWidth: '90vw', margin: '0 auto' }}>
        <main style={{ maxWidth: '70vw', margin: '0 auto' }}>
          <Typography variant="h1">Zero Waste Alternative</Typography>
          <Typography variant="h2" >
            Find zero waste alternatives to anything you need.
          </Typography>
          <Search />
          <Typography variant="subtitle1" style={{ marginTop: '350px' }}>
            Endless scrolling not included.
          </Typography>
        </main>
      </Layout>
    </>
  );
}
