import React from 'react';

import "./portfolio.css"
import {useTranslation} from "react-i18next";
const companies = [
    {
        name: 'Rassrochka',
        image: require('./img/rassroch.png'),
        bgColor: '#B68CFF',
        url: 'http://176.126.164.43:84/#/pages/login'
    },
    {
        name: 'Alfagas',
        image: require('./img/alfagas.png'),
        bgColor: '#818CF8',
        url: 'https://alfagas.netlify.app'
    },
    {
        name: 'Cosmetics',
        image: require('./img/cosmetics.png'),
        bgColor: '#d05fa2',
        url: 'https://kourses.netlify.app'
    },
    {
        name: 'Out source',
        image: require('./img/outsorce.png'),
        bgColor: '#d3b19a',
        url: 'https://landing-aut.netlify.app'
    },

    {
        name: 'Bananaz',
        image: require('./img/bananaz.png'),
        bgColor: '#A5B4FC',
        url: 'https://bananazz.netlify.app'
    },
    {
        name: 'Pizza',
        image: require('./img/pizza.png'),
        bgColor: '#E8B7A4',
        url: 'https://202014.netlify.app'
    },
    {
        name: 'Stroy kg',
        image: require('./img/stroykg.png'),
        bgColor: '#B4E197',
        url: 'https://stroykg.netlify.app'
    },
    {
        name: 'Data ',
        image: require('./img/excel.png'),
        bgColor: '#646bf8',
        url: 'https://table-res.netlify.app'
    },
    {
        name: 'Project',
        image: require('./img/vladilen.png'),
        bgColor: '#9FE2BF',
        url: 'https://vladilen.netlify.app'
    },
];

const Portfolio = () => {
    const {t} = useTranslation();
    return (
        <div className='max-w-6xl mx-auto' id="portfolio">
            <section className="relative py-10  bg-gray-100 rounded-xl bg-opacity-15">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4f46e5] to-[#7c3aed] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="container">
                    <div>
                        <h2 className="text-3xl text-indigo-500 font-bold text-center mb-6">{t('works')}</h2>
                        <div>
                            <div className="container_profile">
                                {companies.map((company, index) => (
                                    <div className="card transform transition-transform duration-500 hover:scale-110" key={index}>
                                        <div className="card-inner " style={{color: '#fff'}}>
                                            <div className="box ">
                                                <div className="imgBox relative inline-block group" style={{background: company.bgColor}}>
                                                     <span
                                                         className="absolute inset-0 flex items-end pb-4 justify-center text-white text-lg font-semibold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        {company.name}
                                                      </span>
                                                    <img
                                                        className="transform transition-transform duration-500 hover:scale-110 "
                                                        src={company.image} alt={company.name}
                                                    />
                                                </div>
                                                <div className='icon'>
                                                    <a href={company.url} className='iconBox' target='_blank' rel='noopener noreferrer'
                                                       style={{background: company.bgColor}}>
                                                    <span className="flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                             className="inline-block h-7 w-7 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                             aria-hidden="true"><path
                                                            fillRule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clipRule="evenodd"></path></svg>
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;