import React, {useEffect} from 'react';
import {ExperienceData, ExperienceDataDto} from "./ExperienceData";
import {useTranslation} from "react-i18next";
import {db} from "../../firebase"
import { collection, getDoc, doc } from "firebase/firestore";


const Experience = () => {
    const {i18n, t} = useTranslation()
    const reversedExperienceData = [...ExperienceData].reverse();

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const docRef = doc(db, "experience"); // Указываем коллекцию и документ
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // Получаем данные и приводим к интерфейсу CityData
                    console.log(docSnap.data())
                } else {
                    console.log("Документ не найден");
                }
            } catch (error) {
                console.error("Ошибка получения документа:", error);
            } finally {
            }
        };

        fetchCityData();
    }, []);

    return (
        <div className="max-w-6xl md:mx-auto md:grid grid-cols-3 my-20 mx-10" id="experience">
            <div className="md:col-span-3 mb-20">
                <h2 className="text-3xl text-indigo-500 font-bold text-center mb-6">{t('experience')}</h2>
            </div>
            <div className="md:col-span-1 ">
            </div>
            <div className="md:col-span-2 relative">
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
                <ol className="relative border-s border-gray-200 dark:border-gray-700">

                    {
                        reversedExperienceData.map((i: ExperienceDataDto, idx: number) => (
                            <li className="mb-10 ms-6" key={idx}>
                                <span
                                    className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-indigo-700 dark:bg-indigo-500">
                                    <svg className="w-2.5 h-2.5 text-blue-300 " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                    <a href={i.link}
                                       className=" transform transition-transform duration-500 hover:text-indigo-500">{i[`name_${i18n.language === 'ru-RU' ? 'ru' : i18n.language}` as keyof ExperienceDataDto]}</a>
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{i[`period_${i18n.language === 'ru-RU' ? 'ru' : i18n.language}` as keyof ExperienceDataDto]}
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{i[`description_${i18n.language === 'ru-RU' ? 'ru' : i18n.language}` as keyof ExperienceDataDto]}</p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {
                                        i.tags.map((tag: string, index: number) => (
                                            <li className="mr-1.5 mt-2" key={index}>
                                                <div
                                                    className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-600 ">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

export default Experience;