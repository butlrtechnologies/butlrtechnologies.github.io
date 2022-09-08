import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create Dynamic Visuals',
    Svg: require('@site/static/img/Clay Macbook\ -\ Dashboard\ 2.svg').default,
    description: (
      <>
        Our upcoming Egress Solution will allow you to create dynamic visuals that can be used to see occupancy in near realtime.
      </>
    ),
  },
  {
    title: 'Integrate Data Visualizations',
    Svg: require('@site/static/img/Occupancy\ 1.svg').default,
    description: (
      <>
        <code>Butlr API</code> gives you powerful queries to create visualizations to compare/contrast occupancy and traffic data to provide insights into your space utilization.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
