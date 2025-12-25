import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';

const features = [
  { title: 'Robotics Fundamentals', desc: 'Learn the basics of physical AI & humanoid robotics.', icon: '🤖' },
  { title: 'Sensors & Actuators', desc: 'Understand how robots perceive and interact.', icon: '📡' },
  { title: 'Control Systems', desc: 'Master control algorithms and dynamics.', icon: '🎛️' },
  { title: 'Real-world Projects', desc: 'Build practical humanoid robots.', icon: '🛠️' },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      className={styles.featureCard}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {siteConfig.title}
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {siteConfig.tagline}
        </motion.p>
        <div className={styles.buttons}>
          <Link className={styles.buttonCustom} to="/docs/intro">
            Read the Textbook 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="A comprehensive academic textbook on Physical AI & Humanoid Robotics By Talat Naz"
    >
      <HomepageHeader />
      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Modules</h2>
            <div className={styles.featuresGrid}>
              {features.map((f, idx) => (
                <FeatureCard key={idx} {...f} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Start Learning Today!</h2>
            <p>Access all chapters and hands-on projects to become a robotics expert.</p>
            <Link className={styles.buttonCustom} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
