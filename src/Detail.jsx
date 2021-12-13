import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const NFTS = [
  {
    id: 1,
    name: "NFT Example #1",
    img: "/nft_1.png",
  },
  {
    id: 2,
    name: "NFT Example #2",
    img: "/nft_2.png",
  },
  {
    id: 3,
    name: "NFT Example #3",
    img: "/nft_3.png",
  },
];

function Detail() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid bg-gray-100 text-3xl mb-1 rounded mx-0.5 px-10 pt-10 pb-8 text-gray-700 border-2 border-solid border-gray-400">
        Place #1-A customization
      </div>
      <div className="container lg:mx-16 mt-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols:1">
        <div className="col-span-2">
          <div className="relative">
            <img
              className="rounded border border-solid border-gray-600"
              src="/NFT PRUEBA.png"
              alt="department"
            />
            <img className="absolute top-[7rem] left-[10.7rem] transform -rotate-13" src="/nft_1.png" alt="nft1" width="37" />
          </div>
        </div>
        <div className="col-span-2 lg:mx-10">
          <div className="text-3xl text-gray-700">Place #1-A</div>
          <div className="mt-8">
            {[...Array(3).keys()].map((val) => {
              return (
                <div key={val}>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-4 text-gray-600">
                      <Listbox.Label>NFT {val + 1}:</Listbox.Label>
                    </div>
                    <div className="relative mt-1 text-gray-500">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-500 rounded-sm shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">
                          {selected ? (
                            <div className="inline-flex">
                              <div>
                                <img
                                  src={selected.img}
                                  alt={selected.name}
                                  width="20px"
                                />
                              </div>
                              <div className="ml-1">{selected.name}</div>
                            </div>
                          ) : (
                            "Select your nft to showcase"
                          )}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {NFTS.map((nft, nftIdx) => (
                            <Listbox.Option
                              key={nftIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "text-amber-900 bg-amber-100"
                                    : "text-gray-900"
                                }
                          cursor-default select-none relative py-2 pl-5 pr-4`
                              }
                              value={nft}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? "font-medium" : "font-normal"
                                    } block truncate`}
                                  >
                                    <div className="inline-flex">
                                      <div>
                                        <img
                                          src={nft.img}
                                          alt={nft.name}
                                          width="20px"
                                        />
                                      </div>
                                      <div className="ml-1">{nft.name}</div>
                                    </div>
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active
                                          ? "text-amber-600"
                                          : "text-amber-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              );
            })}
            <div className="relative mt-12 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-20 grid bg-gray-100 text-3xl mb-1 rounded mx-0.5 px-10 pt-10 pb-8 text-gray-700 border-2 border-solid border-gray-400">
          Owned Places
        </div>
      </div>
    </>
  );
}

export default Detail;
