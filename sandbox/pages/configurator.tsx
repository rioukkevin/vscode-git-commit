/* eslint-disable @next/next/no-img-element */

import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import CanvasTitle from '../components/CanvasTitle';
import CodeTitle from '../components/CodeTitle';
import InsertionModeInput from '../components/InsertionModeInput';
import InsertionModeRenderer from '../components/InsertionModeRenderer';
import TemplateInput from '../components/TemplateInput';
import TemplateRenderer from '../components/TemplateRenderer';
import VariableInput from '../components/VariablesInput';
import VariablesRenderer from '../components/VariablesRenderer';
import styles from '../styles/Configurator.module.css';

const TITLE = 'Configurator - VSCode Git commit message';
const DESCRIPTION =
  'A settings generator for the extension Git commit message of VSCode';

const Configurator: NextPage = () => {
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
        <meta
          name="og:url"
          content="https://gcm-config.netlify.com/configurator"
        />
        <meta name="og:site_name" content="Config - Git commit message" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.line}>
          <div className={styles.left}>
            <Heading>
              <img src="/logo.png" alt="logo" className={styles.logo} /> Git
              commit message configurator
            </Heading>
            <p className={styles.presentation}>
              This website as goal to generate settings for{' '}
              <a href="https://marketplace.visualstudio.com/items?itemName=rioukkevin.vscode-git-commit">
                VSCode Git Commit Message
              </a>{' '}
              extension, this website is a simple GUI for it.
            </p>
            <div className={styles.stats}>
              <img
                src="https://vsmarketplacebadge.apphb.com/version-short/rioukkevin.vscode-git-commit.svg?style=for-the-badge&amp;color=dd4739"
                alt="version"
              />
              <img
                src="https://vsmarketplacebadge.apphb.com/installs/rioukkevin.vscode-git-commit.svg?style=for-the-badge&amp;color=dd4739"
                alt="install"
              />
              <img
                src="https://vsmarketplacebadge.apphb.com/rating-star/rioukkevin.vscode-git-commit.svg?style=for-the-badge&amp;color=dd4739"
                alt="rating"
              />
            </div>
          </div>
          <div className={styles.right} />
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <CanvasTitle title="Insertion Mode" />
            <p className={styles.default}>DEFAULT: Concatenate</p>
            <InsertionModeInput />
          </div>
          <div className={styles.right}>
            <CodeTitle title="Insertion Mode" />
            <InsertionModeRenderer />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <CanvasTitle title="Template" />
            <p className={styles.default}>
              DEFAULT: {'{feat}({scope}):{message}'}
            </p>
            <TemplateInput />
          </div>
          <div className={styles.right}>
            <CodeTitle title="Template" />
            <TemplateRenderer />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <CanvasTitle title="Variables" />
            <p className={styles.default}>DEFAULT: {'{}'}</p>
            <VariableInput />
          </div>
          <div className={styles.right}>
            <CodeTitle title="Variables" />
            <VariablesRenderer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configurator;
