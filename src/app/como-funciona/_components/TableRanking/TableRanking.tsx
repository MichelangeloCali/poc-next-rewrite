'use client'

import Image from 'next/image'
import {
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from '../../../../components/ui/table'

export const TableRanking = () => {
  return (
    <div className="bg-neutral-700 rounded-lg p-4 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="border-r min-h-6 flex items-center justify-center">
                Classificação
              </div>
            </TableHead>
            <TableHead>
              <div className="border-r min-h-6 flex items-center justify-center">
                Acertos
              </div>
            </TableHead>
            <TableHead>
              <div className="border-r min-h-6 flex items-center justify-center">
                Prêmio
              </div>
            </TableHead>
            <TableHead>Detalhes</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-sm">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p>29/ABR - 15:28:09</p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                2
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell className="text-center">Pesquisar</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-sm">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p>29/ABR - 15:28:09</p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                2
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell className="text-center">Pesquisar</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-sm">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p>29/ABR - 15:28:09</p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                2
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="border-r min-h-10 flex items-center justify-center">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell className="text-center">Pesquisar</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
