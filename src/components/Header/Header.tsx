'use client'

import Image from 'next/image'

export const Header = () => {
  return (
    <div className="bg-stone-900 text-white flex justify-between items-center px-8 h-14">
      <Image src="./logo.svg" width={110} height={110} alt="logo" />
      <div className="flex gap-8">
        <text className="font-sans text-sm font-extralight">
          O que é o Batalha Esportiva?
        </text>
        <div className="inline-block h-100 min-h-[1em] w-0.5 self-stretch bg-neutral-600 dark:bg-white/10" />
        <text className="font-sans text-sm font-extralight">Torneios</text>
        <div className="inline-block h-100 min-h-[1em] w-0.5 self-stretch bg-neutral-600 dark:bg-white/10" />
        <text className="font-sans text-sm font-extralight">Saldo</text>
        <div className="inline-block h-100 min-h-[1em] w-0.5 self-stretch bg-neutral-600 dark:bg-white/10" />
        <text className="font-sans text-sm font-extralight">Perfil</text>
      </div>
    </div>
  )
}
