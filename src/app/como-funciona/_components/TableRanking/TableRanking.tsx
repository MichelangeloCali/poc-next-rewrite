'use client'

import Image from 'next/image'
import { Search } from 'lucide-react'
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
    <div className="bg-neutral-700 rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="border-r flex items-center justify-center font-sans text-xs font-extralight">
                Classificação
              </div>
            </TableHead>
            <TableHead>
              <div className="border-r flex items-center justify-center px-12 font-sans text-xs font-extralight">
                Acertos
              </div>
            </TableHead>
            <TableHead>
              <div className="border-r flex items-center justify-center px-12 font-sans text-xs font-extralight">
                Prêmio
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center justify-center font-sans text-xs font-extralight">
                Detalhes
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="p-0 py-1.5 bg-primary-pink">
              <div className="text-start pl-8 w-full text-white font-sans text-xs font-extralight">
                Formato de Premiação: Acertar todos os placares das partidas.
              </div>
            </TableCell>
            <TableCell className="p-0 bg-primary-pink" />
            <TableCell className="p-0 bg-primary-pink" />
            <TableCell className="p-0 bg-primary-pink" />
          </TableRow>

          <TableRow>
            <TableCell className="pl-8">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-xs">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p className="font-sans text-xs font-extralight">
                      29/ABR - 15:28:09
                    </p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                2
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell>
              <div className="min-h-10 flex items-center justify-center ml-8 pr-8">
                <Search className="text-primary-pink" size={22} />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="pl-8">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-xs">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p className="font-sans text-xs font-extralight">
                      29/ABR - 15:28:09
                    </p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                2
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell>
              <div className="min-h-10 flex items-center justify-center ml-8 pr-8">
                <Search className="text-primary-pink" size={22} />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="pl-8">
              <div className="flex gap-2 border-r">
                <Image
                  src="./user.svg"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div className="flex-col">
                  <p className="row-span-1 font-sans font-normal text-xs">
                    Tester #43534
                  </p>
                  <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
                    <p>Participação 1</p>
                    <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
                    <p className="font-sans text-xs font-extralight">
                      29/ABR - 15:28:09
                    </p>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                2
              </div>
            </TableCell>
            <TableCell>
              <div className="border-r min-h-10 flex items-center justify-center font-sans text-xs font-extralight">
                SUPER PRÊMIO
              </div>
            </TableCell>
            <TableCell>
              <div className="min-h-10 flex items-center justify-center ml-8 pr-8">
                <Search className="text-primary-pink" size={22} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

// 'use client'

// import Image from 'next/image'
// import {
//   TableHeader,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Table,
// } from '../../../../components/ui/table'

// export const TableRanking = () => {
//   return (
//     <div className="bg-neutral-700 rounded-lg relative">
//       <div className="text-start pl-8 bg-primary-pink w-full text-white font-sans text-xs font-extralight absolute top-12 h-6 flex items-center">
//         Formato de Premiação: Acertar todos os placares das partidas.
//       </div>
//       <div className="px-8">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>
//                 <div className="border-r min-h-6 flex items-center justify-center">
//                   Classificação
//                 </div>
//               </TableHead>
//               <TableHead>
//                 <div className="border-r min-h-6 flex items-center justify-center">
//                   Acertos
//                 </div>
//               </TableHead>
//               <TableHead>
//                 <div className="border-r min-h-6 flex items-center justify-center">
//                   Prêmio
//                 </div>
//               </TableHead>
//               <TableHead>Detalhes</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             <TableRow>
//               <TableCell>
//                 <div className="flex gap-2 border-r">
//                   <Image
//                     src="./user.svg"
//                     width={40}
//                     height={40}
//                     alt="user"
//                     className="rounded-full"
//                   />
//                   <div className="flex-col">
//                     <p className="row-span-1 font-sans font-normal text-sm">
//                       Tester #43534
//                     </p>
//                     <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
//                       <p>Participação 1</p>
//                       <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
//                       <p>29/ABR - 15:28:09</p>
//                     </div>
//                   </div>
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   2
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   SUPER PRÊMIO
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">Pesquisar</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell className="">
//                 <div className="flex gap-2 border-r">
//                   <Image
//                     src="./user.svg"
//                     width={40}
//                     height={40}
//                     alt="user"
//                     className="rounded-full"
//                   />
//                   <div className="flex-col">
//                     <p className="row-span-1 font-sans font-normal text-sm">
//                       Tester #43534
//                     </p>
//                     <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
//                       <p>Participação 1</p>
//                       <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
//                       <p>29/ABR - 15:28:09</p>
//                     </div>
//                   </div>
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   2
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   SUPER PRÊMIO
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">Pesquisar</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell className="">
//                 <div className="flex gap-2 border-r">
//                   <Image
//                     src="./user.svg"
//                     width={40}
//                     height={40}
//                     alt="user"
//                     className="rounded-full"
//                   />
//                   <div className="flex-col">
//                     <p className="row-span-1 font-sans font-normal text-sm">
//                       Tester #43534
//                     </p>
//                     <div className="flex gap-2 row-span-2 font-sans font-extralight text-xs">
//                       <p>Participação 1</p>
//                       <div className="inline-block h-100 w-0.5 self-stretch bg-white dark:bg-white/10" />
//                       <p>29/ABR - 15:28:09</p>
//                     </div>
//                   </div>
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   2
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">
//                 <div className="border-r min-h-10 flex items-center justify-center">
//                   SUPER PRÊMIO
//                 </div>
//               </TableCell>
//               <TableCell className="text-center">Pesquisar</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )
// }
