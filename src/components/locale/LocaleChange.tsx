import React, {useEffect, useState} from 'react';
import i18n from "../../i18n/i18n";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/16/solid";

interface langDto {
    id: string,
    name: string,
    img: string,
}

const lang: langDto[] = [
    {
        id: 'ky',
        name: 'KG',
        img:'https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/shop/products/flag_kirgizija_new.jpg?itok=zuUvC9J9',
    },
    {
        id: 'ru',
        name: 'RU',
        img:
            'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_rf_enl.jpg',
    },
    {
        id: 'en',
        name: 'EN',
        img:
            'https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/directory_names/flag_usa_enl.jpg?itok=j2MlyNJ6',
    },
]

const LocaleChange = () => {

    const currentLanguage = lang.find((i)=> i.id === i18n.language)

    const [selected, setSelected] = useState<langDto | undefined>(currentLanguage)

    const [firstChange, setFirstChange] = useState(true); // Отслеживать первый рендер

    useEffect(() => {
        if (firstChange && selected) {
            setFirstChange(false);
            return;
        }

        if (selected) {
            changeLanguage(selected.id);
        }
    }, [selected, firstChange]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng); // Сохранение в localStorage
    };

    return (
        <div className="flex">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                    <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                  <span className="flex items-center">
                                    <img alt="" src={selected?.img} className="h-5 w-5 flex-shrink-0 rounded-full object-cover" />
                                    <span className="ml-3 block truncate">{selected?.name}</span>
                                  </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                    </span>
                                    </ListboxButton>
                                    <ListboxOptions
                                        transition
                                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                    >
                                        {lang.map((lg: {id: string, img: string, name: string}, index: number) => (
                                            <ListboxOption
                                                key={index}
                                                value={lg}
                                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                            >
                                                <div className="flex items-center">
                                                    <img alt="" src={lg.img} className="h-5 w-5 flex-shrink-0 rounded-full object-cover " />
                                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                                      {lg.name}
                                                    </span>
                                                </div>

                                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                <CheckIcon aria-hidden="true" className="h-5 w-5" />
                              </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default LocaleChange;