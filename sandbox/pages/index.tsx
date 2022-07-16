/* eslint-disable @next/next/no-img-element */
import { Heading, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import styles from '../styles/Home.module.css';

import ReactMarkdown from 'react-markdown';

import { doc } from '../generated/doc.md';
import * as customs from '../components/md';
import { Menu } from '../components/core/Menu';

const TITLE = 'Home - VSCode Git commit message';
const DESCRIPTION =
  'A settings generator for the extension Git commit message of VSCode';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="image" content="/logo.png" />
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESCRIPTION} />
        <meta itemProp="image" content="/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:site" content="@RiouKevin6" />
        <meta name="twitter:creator" content="@RiouKevin6" />
        <meta name="twitter:image:src" content="/logo.png" />
        <meta name="og:title" content={TITLE} />
        <meta name="og:description" content={DESCRIPTION} />
        <meta name="og:image" content="/logo.png" />
        <meta name="og:url" content="https://gcm-config.netlify.com" />
        <meta name="og:site_name" content="Config - Git commit message" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading>
          <img src="/logo.png" alt="logo" className={styles.logo} /> Git commit
          message
        </Heading>
        <Menu />
        <ReactMarkdown
          components={{
            ...ChakraUIRenderer(),
            ...customs,
          }}
        >
          {doc}
        </ReactMarkdown>
      </main>
    </div>
  );
};

export default Home;
