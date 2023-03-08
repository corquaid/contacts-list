import { ContactsList } from "../../components/ContactsList";
import { Header } from "../../components/Header";
import { Contact } from "../../types";
import { useDebouncedSearch } from "../../hooks/useDebouncedSearch";
import { useState, useEffect, useMemo } from "react";
import { Input } from "../../components/Input";
import { StyledContainer } from "./styles";

const URL = "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

export function ContactsPage() {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useDebouncedSearch(200);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error status ${response.status}`);
        }
        let jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sortedData = data.sort((a, b) => a.last_name.localeCompare(b.last_name));

  const handleOnChange = (value: string) => {
    setSearchFilter(value);
  };

  // Locally filtering data by first and/or last name
  const filteredData = useMemo(() => {
    if (sortedData && searchFilter !== "") {
      const regEx = new RegExp(searchFilter, "i");
      return sortedData.filter(contact => contact.first_name.concat(contact.last_name).search(regEx) !== -1);
    }
    return sortedData;
  }, [searchFilter, sortedData]);

  // Handle item select / deselect
  const handleItemClick = (id: number) => {
    if (!selected.includes(id)) {
      const newSelected = [...selected];
      newSelected.push(id);
      setSelected(newSelected);
    } else {
      const newSelected = selected.filter(item => item !== id);
      setSelected(newSelected);
    }
  };

  console.log("Selected Contacts: ", selected);

  return (
    <StyledContainer maxWidth="md">
      <Header />
      <Input label="Search contacts" onChange={handleOnChange} />
      <ContactsList
        loading={loading}
        error={error}
        contacts={filteredData}
        onClick={handleItemClick}
        selected={selected}
      />
    </StyledContainer>
  );
}
