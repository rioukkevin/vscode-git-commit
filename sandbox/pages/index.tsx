import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import CanvasTitle from '../components/CanvasTitle';
import CodeTitle from '../components/CodeTitle';
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
            <Heading>Git commit message configurator</Heading>
            <p className={styles.presentation}>
              This website as goal to generate settings for{' '}
              <a href="https://marketplace.visualstudio.com/items?itemName=rioukkevin.vscode-git-commit">
                VSCode Git Commit Message
              </a>{' '}
              extension, this website is a simple GUI for it.
            </p>
          </div>
          <div className={styles.right} />
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <CanvasTitle title="Template" />
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
