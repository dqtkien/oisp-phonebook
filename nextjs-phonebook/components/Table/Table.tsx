import { FC } from 'react'
import { IPhoneBookData } from '../../interface/IPhoneBook'

interface ITableProps {
  data: IPhoneBookData[]
}

const Table: FC<ITableProps> = ({ data }) => (
  <div className="px-5 overflow-auto max-h-[975px] h-5/6">
    <table className="text-sm text-left shadow-md text-gray-500 dark:text-gray-400 border-collapse border overflow-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Extension
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Department/ Team
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              key={item.extension + item.name}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{item.extension}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.team}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Table
