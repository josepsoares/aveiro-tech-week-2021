import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variant } from 'framer-motion';
import { a } from '@react-spring/web';

import { goodArr, badArr, futurArr, companyArr } from '../lib/content';

import { IntroContext } from '../lib/hooks/useIntroContext';
import generateVariants from '../lib/utils/generateVariants';
import TechWeekLogo from '../lib/assets/logo.png';
import TechWeekImg from '../lib/assets/IMG_9049.png';

import ArticleContainer from '../components/ArticleContainer';
import InfiniteSlider from '../components/Slider';
import BadCard from '../components/BadCard';
import Emoji from '../components/Emoji';
import EnterDirectionWhenVisible from '../components/animations/EnterDirectionWhenVisible';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import SEO from '../components/Seo';

const Home: React.FC<{}> = () => {
  const [displayContents, setDisplayContents] = useState(false);
  const intro = useContext(IntroContext);
  const animateIntro = intro.playIntro;

  useEffect(() => {
    intro.checkIntroInLocalStorage();
  }, []);

  const animateInitialIntro = !animateIntro ? 'mainVisible' : false;
  const initialIntro = !animateIntro ? 'mainHidden' : false;

  const containerVariants: { mainVisible: Variant; mainHidden: Variant } = {
    mainVisible: animateIntro
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            type: 'tween',
            duration: 1.25,
          },
        },
    mainHidden: animateIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: -75 },
  };

  return (
    <>
      <SEO
        title="home - tgbf aveiro techweek 2021"
        description="website para divulgar opinião de um grupo de mtcw da techweek de aveiro"
      />
      {intro.loading === true ? (
        <p>loading...</p>
      ) : (
        <>
          <motion.div
            variants={containerVariants}
            animate={!animateIntro ? animateInitialIntro : false}
            initial={!animateIntro ? initialIntro : undefined}
            className="flex flex-col justify-start min-h-screen px-8 md:px-14 lg:px-24 pt-10 pb-16 md:pb-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(57deg, rgb(53, 53, 53) 0%, rgba(53, 53, 53, 0.9) 35%, rgba(53, 53, 53, 0.2) 100%), url("./assets/img/IMG_9005.jpg")',
            }}
          >
            <motion.h1
              variants={generateVariants(null, -10, 0)}
              animate={animateIntro ? 'visible' : false}
              initial={animateIntro ? 'hidden' : false}
              className="font-bold text-huge md:text-gigantic leading-tight md:leading-none"
            >
              the
            </motion.h1>
            <motion.h2 className="italic font-bold text-8xl md:text-quite-big leading-tight md:leading-none">
              <motion.span
                animate={animateIntro ? 'visible' : false}
                initial={animateIntro ? 'hidden' : false}
                variants={generateVariants(2, -10, 0)}
                className="text-primary inline-flex"
              >
                good,&nbsp;
              </motion.span>
              <motion.span
                animate={animateIntro ? 'visible' : false}
                initial={animateIntro ? 'hidden' : false}
                variants={generateVariants(3, -20, 0)}
                className="text-secondary inline-flex"
              >
                bad,&nbsp;
              </motion.span>
              <motion.span
                animate={animateIntro ? 'visible' : false}
                initial={animateIntro ? 'hidden' : false}
                variants={generateVariants(4, -25, 0)}
                className="text-tertiary inline-flex"
              >
                future
              </motion.span>
            </motion.h2>
            <a
              rel="noopener noreferrer"
              href="https://techweek.aveirotechcity.pt/pt/"
              target="_blank"
              className="w-full md:w-96"
            >
              <motion.img
                variants={generateVariants(5, null, null)}
                animate={animateIntro ? 'visible' : false}
                initial={animateIntro ? 'hidden' : false}
                src={TechWeekLogo}
                className="py-16 object-contain w-full md:w-96"
                alt="aveiro tech week logo"
              />
            </a>
            <motion.aside
              className="pb-0 md:pb-6"
              variants={generateVariants(6.5, null, null)}
              animate={animateIntro ? 'visible' : false}
              initial={animateIntro ? 'hidden' : false}
              onAnimationComplete={() => {
                setDisplayContents(true);
              }}
            >
              <p className="text-lg">2021</p>
              <p className="italic text-xs text-lg-grey">
                opiniões são da autoria de{' '}
                <Link to="/team">estudantes do mestrado de tcw</Link> da{' '}
                <a
                  rel="noopener noreferrer"
                  href="https://www.ua.pt"
                  target="_blank"
                >
                  ua
                </a>
              </p>
            </motion.aside>
          </motion.div>
          <div className={displayContents ? 'block' : 'hidden'}>
            <div
              style={{ backgroundColor: '#6f7e4e' }}
              className="py-16 px-8 md:px-14 lg:px-24 min-h-screen  flex flex-col align-center"
            >
              <EnterDirectionWhenVisible dir="left" delay={0}>
                <h1 className="font-bold text-7xl md:text-really-big leading-tight  md:leading-none italic">
                  intro
                </h1>
              </EnterDirectionWhenVisible>
              <EnterDirectionWhenVisible dir="right" delay={0.5}>
                <h1 className="pl-0 md:pl-6 lg:pl-28 font-bold text-7xl md:text-really-big leading-tight italic relative bottom-6 md:bottom-10">
                  duction
                </h1>
              </EnterDirectionWhenVisible>

              <FadeInWhenVisible delay={0.65}>
                <p className="pl-0 md:pl-6 lg:pl-28 pb-4 text-3xl">
                  a{' '}
                  <a
                    rel="noopener noreferrer"
                    href="https://techweek.aveirotechcity.pt/pt/"
                    target="_blank"
                  >
                    aveiro tech week
                  </a>{' '}
                  é um evento de uma semana com várias ações e eventos dedicados
                  à tecnologia, arte e cultura. A decorrer entre os dias 11 e 17
                  de outubro, o evento é composta pelos eventos CRIATECH,
                  TECHDAYS Aveiro e PRISMA / Art Light Tech, aliando tecnologia,
                  arte e cultura através de exposições, instalações artísticas,
                  performances, conferências, laboratórios e outras
                  experiências.
                </p>
                <p className="pl-0 md:pl-8 lg:pl-36 text-2xl italic text-lg-grey">
                  este website foi concebido para dar feedback acerca do evento,
                  criado por{' '}
                  <Link to="/team">
                    um grupo de estudantes do mestrado de tcw
                  </Link>{' '}
                  da{' '}
                  <a
                    rel="noopener noreferrer"
                    href="https://www.ua.pt"
                    target="_blank"
                  >
                    ua
                  </a>
                </p>
              </FadeInWhenVisible>
            </div>

            <ArticleContainer
              type="good"
              colors={['text-primary-lg', 'bg-primary-bg']}
            >
              <div className="pt-8 md:pt-24 pl-0 md:pl-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                <EnterDirectionWhenVisible dir="left" delay={0.7}>
                  <ul>
                    {goodArr.map((item, i) => (
                      <li
                        key={i}
                        className="gray-700 pb-2 inline-flex gap-4 items-start"
                      >
                        <span className="flex-none">
                          <Emoji symbol="👉🏽‍" label="apontar" isList={true} />
                        </span>

                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </EnterDirectionWhenVisible>

                <EnterDirectionWhenVisible dir="right" delay={0.8}>
                  <img
                    className="mt-4 md:mt-16 h-4/5 w-full object-cover shadow-lg rounded-md"
                    src={TechWeekImg}
                  />
                </EnterDirectionWhenVisible>
              </div>
              <FadeInWhenVisible delay={0.85}>
                <h3 className="text-5xl text-big leading-tight md:leading-none opacity-75 italic pt-10 pb-10 md:pb-20">
                  o grupo destaca as empresas abaixo:
                </h3>
                <div style={{ height: '400px' }}>
                  <InfiniteSlider
                    items={companyArr}
                    width={700}
                    visible={2}
                    renderChildren={(
                      {
                        css,
                        title,
                        url,
                      }: {
                        css: string;
                        title: string;
                        url: string;
                      },
                      i: number,
                    ) => {
                      return (
                        <div className="w-full h-full py-4 px-6">
                          <div className="text-white font-bold absolute bottom-0 left-16 z-10">
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              href={url}
                            >
                              <h3 className="text-white text-4xl">{title}</h3>
                            </a>
                          </div>
                          <a.div
                            className="w-full h-full bg-center bg-cover shadow-lg rounded-md opacity-50"
                            style={{ backgroundImage: css }}
                          />
                        </div>
                      );
                    }}
                  />
                </div>
              </FadeInWhenVisible>
            </ArticleContainer>
            <ArticleContainer
              type="bad"
              colors={['text-secondary-lg', 'bg-secondary-bg']}
            >
              <FadeInWhenVisible
                className="pt-8 md:pt-24 pl-0 md:pl-4"
                delay={0.7}
              >
                <h3 className="gray-700 text-3xl pb-10">
                  Apesar dos pontos positivos referidos, o grupo também
                  reconheceu alguns aspetos que poderiam ter sido melhor geridos
                  quando visitou o evento, aqui estão alguns deles:
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 pb-16">
                  {badArr.map((item, i) => {
                    return (
                      <BadCard
                        key={i}
                        imgSrc={item.img}
                        title={item.title}
                        text={item.text}
                        emoji={item.emoji}
                        emojiLabel={item.emojiLabel}
                      />
                    );
                  })}
                </div>
              </FadeInWhenVisible>
            </ArticleContainer>
            <ArticleContainer
              type="future"
              colors={['text-tertiary-lg', 'bg-tertiary-bg']}
            >
              <div className="pt-8 md:pt-24 pl-0 md:pl-4 grid grid-cols-1 lg:grid-cols-4 justify-center gap-20 items-baseline">
                <EnterDirectionWhenVisible
                  dir="left"
                  delay={0.7}
                  className="col-span-1 lg:col-span-2"
                >
                  <h3 className="gray-700 pb-6 text-3xl">
                    Para a próxima edição do evento e posteriormente, o grupo
                    salienta as seguintes melhorias/sugestões para a direção do
                    evento:
                  </h3>
                  <ul className="pl-4">
                    {futurArr.map((item, i) => (
                      <li
                        key={i}
                        className="pb-2 inline-flex gap-4 items-start"
                      >
                        <span className="flex-none">
                          <Emoji symbol="👉🏻‍" label="apontar" isList={true} />
                        </span>
                        <span className="flex-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </EnterDirectionWhenVisible>

                <EnterDirectionWhenVisible
                  dir="right"
                  delay={0.8}
                  className="col-span-1 lg:col-span-2 w-full lg:w-3/4 bg-white p-8 rounded-lg text-lg-grey shadow-lg static md:relative bottom-0 md:bottom-32"
                >
                  <h3 className="pb-6 text-center flex items-center justify-center gap-2">
                    <Emoji symbol="📅" label="calendário" isList={false} />
                    <span className="text-lg md:text-3xl">outubro - 2022</span>
                  </h3>

                  <div className="grid grid-cols-7">
                    {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((item, i) => (
                      <span className="text-center font-medium italic" key={i}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 pt-2">
                    {[...Array(31).keys()].map((item, i) => {
                      const date = (item += 1);
                      return (
                        <span
                          className={
                            date === 1
                              ? 'col-start-6 text-center p-1'
                              : item >= 11 && item <= 17
                              ? 'font-bold text-center p-1 text-tertiary'
                              : 'text-center p-1'
                          }
                          key={i}
                        >
                          {date}
                        </span>
                      );
                    })}
                  </div>
                </EnterDirectionWhenVisible>
              </div>
            </ArticleContainer>
            <article className="min-h-screen py-16 px-8 md:px-14 lg:px-24 flex flex-col justify-center">
              <EnterDirectionWhenVisible dir="left" delay={0}>
                <h1 className="font-bold text-7xl md:text-really-big leading-tight md:leading-none italic">
                  over
                </h1>
              </EnterDirectionWhenVisible>

              <EnterDirectionWhenVisible dir="right" delay={0.6}>
                <h1 className="pl-6 md:pl-6 lg:pl-52 font-bold text-7xl md:text-really-big leading-tight md:leading-none italic relative bottom-6 md:bottom-10">
                  all
                </h1>
              </EnterDirectionWhenVisible>

              <FadeInWhenVisible delay={0.8}>
                <p className="pl-0 md:pl-6 lg:pl-52 pt-0 md:pt-6">
                  No geral, o grupo considerou{' '}
                  <b className="text-primary">
                    a Aveiro Tech Week um evento impactante e crucial para a
                    cidade de Aveiro
                  </b>
                  , dinamizando a mesma e atraindo pessoas, investimentos,
                  empresas e novidades.
                </p>
                <p className="pl-0 md:pl-6 lg:pl-52 pt-4">
                  Como grupo e indivíduos fora do contexto universitário,
                  consideramos{' '}
                  <b className="text-primary">
                    que qualquer pessoa interessada em tecnologia, cultura,
                    entretenimento e/ou educação deve sem dúvida participar na
                    futura edição em 2022 deste evento.
                  </b>
                </p>
                <p className="pl-0 md:pl-6 lg:pl-52 pt-4">
                  Vindo do mestrado de comunicação e tecnologias web, o grupo
                  enriqueceu a sua perspetiva do mercado de trabalho com esta
                  oportunidade de participar em algumas atividades do evento
                  oferecida pela universidade de aveiro.
                </p>
              </FadeInWhenVisible>
            </article>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
