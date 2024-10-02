import meImage from '../../assets/images/Me.png';
import FrameWorkIcons from "./frameworkIcons/FrameWorkIcons";
import {useTranslation} from "react-i18next";
import {getDownloadURL, ref} from "firebase/storage"
import {storage} from "../../firebase";

export default function Header({children}: any) {
    const {t} = useTranslation();

    const handleDownload = async () => {
        const fileRef = ref(storage, `gs://mysite-79cac.appspot.com/documents/resume.pdf`);
        try {
            const url = await getDownloadURL(fileRef);
            window.open(url); // Открыть URL в новой вкладке
        } catch (error) {
            console.error("Ошибка получения URL:", error);
        }
    };

    return (
        <div className="bg-white" id="main">
            {children}
            <div className="relative isolate px-6 pt-14 lg:px-8 max-w-6xl mx-auto">
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
                <div className="py-10 md:flex items-center">
                    <div className=" max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-left">
                            {t('fio')}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600  md:text-left">
                            {t('headerTitle')}
                        </p>
                        <FrameWorkIcons/>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div
                                onClick={handleDownload}
                                className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white cursor-pointer shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {t('downloadCV')}
                            </div>

                        </div>
                    </div>
                    <div>
                        <img src={meImage} alt=""/>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#7c3aed] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />

                </div>
                {/*<img className="max-w-3xl mx-auto" alt="is-bottom" src={hero}/>*/}
            </div>
        </div>
    )
}
