import ContactTable from "../components/contact-table";
import Search from "../components/search";
import { CreateButton } from "../components/buttons";

const page = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-start justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default page;
