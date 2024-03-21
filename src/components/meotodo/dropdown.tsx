'use client'

import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useState, ReactNode } from 'react';
import { MagicMotion } from 'react-magic-motion';

interface DropdownProps {
  children: ReactNode;
  title: string;
  module?: string;
}

export default function Dropdown({ children, title, module }: DropdownProps) {
  const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false);

  function toggleDropdown() {
    setIsDropdownActived(!isDropdownActived);
  }

  return (
    <MagicMotion
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div className="overflow-hidden max-w-2xl">
        <button
          onClick={() => toggleDropdown()}
          className={`relative cursor-pointer p-2 sm:p-4 sm:pe-12 pe-12 bg-zinc-100 text-left w-full bg-client-pallet-2 font-medium rounded-xl ${isDropdownActived && 'rounded-b-none'} flex flex-col gap-2 items-start`}
        >
          <p className={` flex items-center justify-between text-lg font-medium`}>
            <span>{title}</span>
          </p>
          <PlusSmallIcon className={`absolute top-2 right-4 sm:h-4 sm:w-4 h-6 w-6 transition  ${isDropdownActived ? "rotate-45" : "rotate-0"}`} />
        </button>
        {isDropdownActived && (
          <div className={`bg-zinc-100 text-zinc-600 bg-client-pallet-2 rounded-b-xl p-4 sm:p-6`} >
            {children}
          </div>
        )}
      </div>
    </MagicMotion>
  );
}
