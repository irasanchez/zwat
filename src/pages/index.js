import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import List from '../components/List';

export default function Home() {
  return (
    <>
      <Helmet></Helmet>
      <Layout>
        <List />
      </Layout>
    </>
  );
}
