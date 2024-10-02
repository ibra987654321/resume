import {useTranslation} from "react-i18next";

const About = () => {
   const {t} = useTranslation();
    return (
        <div className="max-w-6xl mx-auto" id="about_me">
            <section className="bg-gray-100 py-10 px-5 rounded-xl">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-indigo-500 font-bold text-center mb-6">{t('myself')}</h2>
                    <div className="grid grid-cols-1 gap-8 mb-4">
                        <div className="flex flex-col items-center">
                            <p className="max-w-4xl text-center">
                                {t('headerDescription')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                            <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z"
                                      fill="#F04037" fill-opacity="0.1"/>
                                <path
                                    d="M36.3467 21.8933L44.2133 25.3867C46.48 26.3867 46.48 28.04 44.2133 29.04L36.3467 32.5333C35.4533 32.9333 33.9867 32.9333 33.0933 32.5333L25.2267 29.04C22.96 28.04 22.96 26.3867 25.2267 25.3867L33.0933 21.8933C33.9867 21.4933 35.4533 21.4933 36.3467 21.8933Z"
                                    stroke="#F04037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M23 32.6667C23 33.7867 23.84 35.08 24.8667 35.5333L33.92 39.56C34.6133 39.8667 35.4 39.8667 36.08 39.56L45.1333 35.5333C46.16 35.08 47 33.7867 47 32.6667"
                                    stroke="#F04037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M23 39.3333C23 40.5733 23.7333 41.6933 24.8667 42.2L33.92 46.2267C34.6133 46.5333 35.4 46.5333 36.08 46.2267L45.1333 42.2C46.2667 41.6933 47 40.5733 47 39.3333"
                                    stroke="#F04037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 className="text-xl font-semibold">{t('education')}</h3>
                            <p>{t('educationDescription')}</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">

                            <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z"
                                      fill="#5454D4" fill-opacity="0.1"/>
                                <path
                                    d="M31 35.3333C30.12 35.7733 29.3867 36.4267 28.84 37.24C28.5333 37.7067 28.5333 38.2933 28.84 38.76C29.3867 39.5733 30.12 40.2267 31 40.6667"
                                    stroke="#5454D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M39.28 35.3333C40.16 35.7733 40.8933 36.4267 41.44 37.24C41.7467 37.7067 41.7467 38.2933 41.44 38.76C40.8933 39.5733 40.16 40.2267 39.28 40.6667"
                                    stroke="#5454D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M31 47.3333H39C45.6667 47.3333 48.3333 44.6667 48.3333 38V30C48.3333 23.3333 45.6667 20.6667 39 20.6667H31C24.3333 20.6667 21.6667 23.3333 21.6667 30V38C21.6667 44.6667 24.3333 47.3333 31 47.3333Z"
                                    stroke="#5454D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.9734 28.68L47.6 28.6667" stroke="#5454D4" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 className="text-xl font-semibold">{t('skill')}</h3>
                            <p>JavaScript, TypeScript, React, Vue.js, Node.js, TailwindCSS, PostgreSQL.</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                            <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z"
                                      fill="#A855F7" fill-opacity="0.1"/>
                                <path
                                    d="M42.2 43.6667H27.8C25.8 43.6667 25 42.8133 25 40.6933V39.3067C25 37.1867 25.8 36.3333 27.8 36.3333H42.2C44.2 36.3333 45 37.1867 45 39.3067V40.6933C45 42.8133 44.2 43.6667 42.2 43.6667Z"
                                    stroke="#A855F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M39.5333 32.3333H30.4667C28.4667 32.3333 27.6667 31.48 27.6667 29.36V27.9733C27.6667 25.8533 28.4667 25 30.4667 25H39.5333C41.5333 25 42.3333 25.8533 42.3333 27.9733V29.36C42.3333 31.48 41.5333 32.3333 39.5333 32.3333Z"
                                    stroke="#A855F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M35 47.3333V44.1333" stroke="#A855F7" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M35 35.3333V32.6667" stroke="#A855F7" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M35 20.6667V24.2533" stroke="#A855F7" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>


                            <h3 className="text-xl font-semibold">{t('experience')}</h3>
                            <p>{t('experienceDescription')}</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;