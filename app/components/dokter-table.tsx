import { getDokter } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "./buttons";

const DokterTable = async () => {
  const dokters = await getDokter();

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">umur</th>
          <th className="py-3 px-6">gender</th>
          <th className="py-3 px-6">Spesialis</th>
          <th className="py-3 px-6">alamat</th>
          <th className="py-3 px-6">email</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {dokters.map((dokter, index) => (
          <tr key={dokter.id} className="bg-white border">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{dokter.name}</td>
            <td className="py-3 px-6">{dokter.phone}</td>
            <td className="py-3 px-6">{dokter.umur}</td>
            <td className="py-3 px-6">{dokter.gender}</td>
            <td className="py-3 px-6">{dokter.Spesialis}</td>
            <td className="py-3 px-6">{dokter.alamat}</td>
            <td className="py-3 px-6">{dokter.email}</td>
            <td className="py-3 px-6">
              {formatDate(dokter.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={dokter.id} />
              <DeleteButton id={dokter.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DokterTable;
