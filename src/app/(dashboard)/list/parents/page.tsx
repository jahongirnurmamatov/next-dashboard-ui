
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role, studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  students: string[];
  name: string;
  email?: string;
  phone:string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell  ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const StudentPageList = () => {
  const renderRow = (item: Parent) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurple"
      >
        <td className="flex gap-2 items-center p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-400">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="h-7 w-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image alt="" src={"/view.png"} width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="h-7 w-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image alt="" src={"/delete.png"} width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image alt="" src={"/filter.png"} width={14} height={14} />
            </button>
            <button className="w-8 flex h-8 items-center justify-center rounded-full bg-lamaYellow">
              <Image alt="" src={"/sort.png"} width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 flex h-8 items-center justify-center rounded-full bg-lamaYellow">
                <Image alt="" src={"/plus.png"} width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default StudentPageList;
