import { useDebounce } from "ahooks";
import { Dispatch, SetStateAction, useState } from "react";

export function useDebouncedSearch(delay: number): [string, Dispatch<SetStateAction<string>>] {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, { wait: delay });
  return [debouncedSearch, setSearch];
}
