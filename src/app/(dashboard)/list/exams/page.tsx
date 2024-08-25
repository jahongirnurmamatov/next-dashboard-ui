import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { examsData, lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

const columns = [
  {
    header: "Subject",
    accessor: "class",
  },
  {
    header: "Class Name",
    accessor: "capacity",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const ExamsListPage = () => {
  const renderRow = (item: Exam) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurple"
      >
        <td>{item.subject}</td>
        <td className="">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            
            {role === "admin" && (
              // <button className="h-7 w-7 flex items-center justify-center rounded-full bg-lamaPurple">
              //   <Image alt="" src={"/delete.png"} width={16} height={16} />
              // </button>
              <>
              <FormModal type="update" table="exam" />
              <FormModal type="delete" table="exam" />
              </>
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
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
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
              // <button className="w-8 flex h-8 items-center justify-center rounded-full bg-lamaYellow">
              //   <Image alt="" src={"/plus.png"} width={14} height={14} />
              // </button>
              <FormModal type="create" table="exam" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ExamsListPage;
