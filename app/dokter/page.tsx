import Search from "../components/search";
import { CreateButton } from "../components/buttons";
import DokterTable from "../components/dokter-table";

const page = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-start justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <DokterTable />
    </div>
  );
};

export default page;
