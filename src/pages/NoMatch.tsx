import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/Seo';

const NoMatch: React.FC = () => {
  return (
    <>
      <SEO
        title="404 not found - tgbf aveiro techweek 2021"
        description="a equipa de mtcw que criou o website para divulgar a sua opinião da techweek de aveiro"
      />
      <article className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="py-4 text-secondary text-9xl italic">404 - not found</h1>
        <p className="text-center pb-8">
          aparentemente está numa página que não existe...
        </p>
        <Link to="/">voltar à página inicial</Link>
      </article>
    </>
  );
};

export default NoMatch;
