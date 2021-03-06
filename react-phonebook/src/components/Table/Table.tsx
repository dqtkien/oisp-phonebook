import { FC } from 'react'
import { IPhoneBookData } from '../../interface/IPhoneBook'

interface ITableProps {
  data: IPhoneBookData[]
}

export const Table: FC<ITableProps> = ({ data }) => (
  <div className="px-5 py-1 max-h-[500px] h-3/6 overflow-y-auto mx-auto flex justify-center align-text-top">
    <table className="text-base text-left shadow-md text-gray-500 w-4/5 dark:text-gray-400 border-collapse border lg:w-[900px] md:w-[700px]">
      <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-2 w-2/12">
            No
          </th>
          <th scope="col" className="px-6 py-2 w-2/12">
            Ext.
          </th>
          <th scope="col" className="px-6 py-2 w-5/12">
            Name
          </th>
          <th scope="col" className="px-6 py-2 w-3/12">
            Department/ Team
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700  align-text-top"
              key={Math.random()}
            >
              <th
                scope="row"
                className="px-6 pt-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 pt-2">{item.extension}</td>
              <td className="px-6 pt-2">{item.name}</td>
              <td className="px-6 pt-2">{item.team}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
