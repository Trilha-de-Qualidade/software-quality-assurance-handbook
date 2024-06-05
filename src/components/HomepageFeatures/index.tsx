import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Para quem é este handbook',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Este handbook é destinado a todos que estão envolvidos ou interessados em garantir a qualidade do software. Se você é um profissional de QA, desenvolvedor, gerente de projeto, estudante ou entusiasta de tecnologia, encontrará informações valiosas aqui. 
      </>
    ),
  },
  {
    title: 'O que irá aprender',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aqui você encontrará uma variedade de tópicos cobrindo todos os aspectos do Software Quality Assurance. Desde conceitos básicos e terminologias até práticas avançadas de testes automatizados, gestão de qualidade e ferramentas.
      </>
    ),
  },
  {
    title: 'Opensource, colabore',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Este projeto é open-source e dependemos da colaboração da comunidade para crescer e melhorar. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
