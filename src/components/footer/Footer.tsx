import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

import {db} from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';

import { toast } from 'react-toastify';

const Footer = () => {
    const {t}= useTranslation()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            // Сохранение письма в Firestore
            await addDoc(collection(db, "emails"), {
                name,
                email,
                subject,
                message,
                timestamp: new Date()
            });
            toast.success('Письмо успешно отправлено и сохранено!', {
                position: "top-right",
                autoClose: 3000, // время в миллисекундах
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error("Ошибка при сохранении письма: ", error);
            toast.error('Ошибка при отправке письма.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div id="contacts">
            <h2 className="text-3xl text-indigo-500 font-bold text-center mb-10">{t('contacts')}</h2>
            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-indigo-900 rounded-xl">

                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-bold text-white">{t('footerTitle')}</h1>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">{t('footerDescription')}</p>

                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                     viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000"/>
                                </svg>
                                <a  href="mailto:ibragimmadiyarov@gmail.com" target="_blank" className="text-white text-sm ml-4">
                                    ibragimmadiyarov@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                     viewBox="0 0 482.6 482.6">
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                        data-original="#000000"></path>
                                </svg>
                                <a href="https://wa.me/996220168363" target="_blank" className="text-white text-sm ml-4">
                                   +996 220 16 83 63
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4">
                            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://t.me/iorozobaev" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fff"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.457 7.558l-1.398 6.593c-.106.47-.38.626-.77.443l-2.165-1.604-1.045 1.005c-.115.114-.211.21-.43.21l.154-2.204 4.015-3.647c.174-.154-.04-.24-.268-.086l-4.957 3.12-2.135-.667c-.465-.144-.476-.465.098-.685l8.34-3.224c.378-.14.71.086.588.64z"
                                        />
                                    </svg>

                                </a>
                            </li>
                            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/in/ibragim-orozobaev-8205b9208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#fff"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.53c-1.12 0-2.03-.91-2.03-2.03s.91-2.03 2.03-2.03 2.03.91 2.03 2.03-.91 2.03-2.03 2.03zm14.14 12.92h-3.5v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.94v5.7h-3.5V9h3.36v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.57 0 4.23 2.35 4.23 5.4v6.31z"
                                        />
                                    </svg>

                                </a>
                            </li>
                            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://github.com/ibra987654321?tab=overview&from=2024-09-01&to=2024-09-22">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.338.73-4.043-1.61-4.043-1.61-.545-1.38-1.33-1.75-1.33-1.75-1.086-.74.083-.73.083-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.77.42-1.31.76-1.61-2.665-.3-5.467-1.33-5.467-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.38 11.38 0 0 1 3-.4c1.02.004 2.05.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.3 0 .32.22.7.82.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <p className="text-sm font-semibold text-gray-800">{t('interesting')}</p>

                        <div className="space-y-4 max-lg:mt-4">
                            <button type="button"
                                    className="px-4 py-2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">Web
                                dev
                            </button>
                            <button type="button"
                                    className="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">Front End dev
                            </button>
                            <button type="button"
                                    className="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300">Back End dev
                            </button>
                        </div>

                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <input type='text' placeholder={t('name')} required
                                   value={name} onChange={(e) => setName(e.target.value)}
                                   className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"/>
                            <input type='email' placeholder={t('email')} required
                                   value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"/>
                            <input type='text' placeholder={t('subject')}
                                   value={subject} onChange={(e) => setSubject(e.target.value)}
                                   className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"/>
                            <textarea placeholder={t('message')} required
                                      value={message} onChange={(e) => setMessage(e.target.value)}
                                      className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
                            <button type='submit'
                                    disabled={loading}
                                    className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">

                                {
                                    loading ? <svg aria-hidden="true" role="status"
                                                   className="inline w-4 h-4 me-3 text-white animate-spin"
                                                   viewBox="0 0 100 101" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"/>
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"/>
                                        </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                             className="mr-2" viewBox="0 0 548.244 548.244">
                                            <path fillRule="evenodd"
                                                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                                  clipRule="evenodd" data-original="#000000"/>
                                        </svg>
                                }
                                {t('submitBtn')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;