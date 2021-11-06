import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { Descendant } from 'slate';
import CanvasTitle from '../components/CanvasTitle';
import CodeTitle from '../components/CodeTitle';
import TemplateInput from '../components/TemplateInput';
import TemplateRenderer from '../components/TemplateRenderer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [template, setTemplate] = useState<Descendant[]>([]);

  const handleInputChange = (newValue: Descendant[]) => {
    console.log(newValue);
    setTemplate(newValue);
  };

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
        <div className={styles.left}>
          <CanvasTitle title="Template" />
          <TemplateInput onType={handleInputChange} />
        </div>
        <div className={styles.right}>
          <CodeTitle title="Template" />
          <TemplateRenderer template={template} />
        </div>
      </main>

      <footer className={styles.footer}>Powered by @Me</footer>
    </div>
  );
};

export default Home;
