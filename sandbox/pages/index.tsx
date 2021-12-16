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
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Config - Git commit message</title>
        <meta
          name="description"
          content="Create your config for vscode git commit message"
        />
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

export default Home;
