import { Search, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Searchbar: React.FC = () => {
  const router = useRouter();

  // State for the search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to handle search action
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedSearchTerm = searchTerm.trim();

    // Use URLSearchParams to keep existing parameters and update the 'name' parameter
    const currentParams = new URLSearchParams(window.location.search);

    if (trimmedSearchTerm) {
      currentParams.set("name", trimmedSearchTerm);
    } else {
      currentParams.delete("name");
    }

    // Push updated URL with modified search parameters
    router.push(`/search?${currentParams.toString()}`);
  };

  // Function to clear the search input and remove 'name' from the URL
  const handleClearSearch = () => {
    setSearchTerm("");

    // Use URLSearchParams to keep existing parameters and remove only the 'name' parameter
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.delete("name");

    // Push updated URL with modified search parameters
    router.push(`/search?${currentParams.toString()}`);
  };

  // Effect to update searchTerm if the URL changes externally
  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    setSearchTerm(currentParams.get("name") || ""); // Sync state with URL on initial load
  }, []);

  // Determine if the search button should be disabled
  const isSearchDisabled = !searchTerm.trim();

  return (
    <form
      className="w-full h-11 flex items-center bg-[#F7F7F7] rounded-2xl drop-shadow-xs py-2 pl-3 text-sm text-black overflow-hidden"
      onSubmit={handleSearch}
    >
      <div className="relative w-full">
        <div className="w-full flex items-center justify-between">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-0 border-0 px-2 text-sm md:text-base !text-black placeholder:text-black outline-none focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm.trim() && (
          <button
            type="button"
            className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-0 text-destructive flex items-center justify-center bg-white"
            onClick={handleClearSearch}
          >
            <X size={20} />
          </button>
        )}
      </div>
      <button
        className={`cursor-pointer py-2 px-3 border-0 text-black disabled:opacity-40 text-lg flex items-center justify-center gap-2`}
        type="submit"
        disabled={isSearchDisabled}
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default Searchbar;
