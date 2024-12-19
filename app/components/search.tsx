"use client";

import { IoSearch } from "react-icons/io5";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("querry", term);
    } else {
      params.delete("querry");
    }
    replace(`${pathname}?${params.toString()}`);
    return (
      <div className="relative flex flex-1">
        <input
          type="text"
          className="w-full border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
          placeholder="Search...."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("querry")?.toString()}
        />
        <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
      </div>
    );
  };
};
export default Search;
