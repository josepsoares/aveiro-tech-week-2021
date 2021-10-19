import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Emoji from '../components/Emoji';
import SEO from '../components/Seo';
import generateVariants from '../lib/utils/generateVariants';

const Team: React.FC<{}> = () => {
  const team = [
    { name: 'david', surname: 'silva', img: './assets/avatars/avatar-ds.svg' },
    { name: 'irla', surname: 'vaz', img: './assets/avatars/avatar-iv.svg' },
    { name: 'josé', surname: 'soares', img: './assets/avatars/avatar-js.svg' },
    {
      name: 'mariana',
      surname: 'gonçalves',
      img: './assets/avatars/avatar-mg.svg',
    },
    { name: 'ricardo', surname: 'cruz', img: './assets/avatars/avatar-rc.svg' },
  ];

  return (
    <>
      <SEO
        title="team - tgbf aveiro techweek 2021"
        description="a 404 do website para divulgar opinião de um grupo de mtcw da techweek de aveiro"
      />
      <div
        className="flex flex-col justify-start min-h-screen px-8 md:px-14 lg:px-24 pt-10 pb-16 md:pb-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(57deg, rgb(53, 53, 53) 0%, rgba(53, 53, 53, 0.9) 35%, rgba(53, 53, 53, 0.2) 100%), url("./assets/img/IMG_9005.jpg")',
        }}
      >
        <motion.h1
          animate={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: -10,
          }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className="font-bold text-huge md:text-gigantic leading-tight md:leading-none"
        >
          the
        </motion.h1>
        <motion.h2
          animate={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: -10,
          }}
          transition={{ ease: 'easeInOut', delay: 0.6, duration: 0.5 }}
          className="italic font-bold text-8xl md:text-quite-big leading-tight md:leading-none text-lg-green"
        >
          people
        </motion.h2>

        <motion.div
          animate="visible"
          initial="hidden"
          variants={generateVariants(1, null, null)}
          className="flex flex-row flex-wrap gap-6 md:gap-16 lg:gap-24 pt-24"
        >
          {team.map((item, i) => (
            <div key={i}>
              <img
                className="rounded-full w-full md:w-64 md:h-64 bg-gray-500 shadow-lg"
                src={item.img}
              />
              <div className="relative bottom-14 font-bold text-4xl italic">
                <h3>{item.name}</h3>
                <h3 className="pl-4">{item.surname}</h3>
              </div>
            </div>
          ))}
        </motion.div>
        <Link to="/" className="fixed bottom-10 left-10">
          <button className="rounded-lg shadow-lg bg-lg-green text-white font-medium flex p-4 pr-6 gap-2 items-center">
            <Emoji symbol="👈" label="voltar" isList={false} /> voltar
          </button>
        </Link>
      </div>
    </>
  );
};

export default Team;
