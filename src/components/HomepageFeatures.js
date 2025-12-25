import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Academic Rigor',
    Svg: require('../../static/img/academic-hat.svg').default,
    description: (
      <>
        All content meets university-level academic standards with clear learning outcomes,
        concept explanations, and practical examples.
      </>
    ),
  },
  {
    title: 'Structured Content',
    Svg: require('../../static/img/structured-content.svg').default,
    description: (
      <>
        Content is organized in a clear hierarchy of chapters, modules, and topics
        for effective learning.
      </>
    ),
  },
  {
    title: 'Easy Navigation',
    Svg: require('../../static/img/navigation.svg').default,
    description: (
      <>
        Intuitive navigation system with sidebar, search functionality,
        and logical content progression.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}