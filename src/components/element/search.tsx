import React from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export default function SearchBar() {
  const placeholders = [
    "Perfect mentors?",
    "Software engineer",
    "Product designer",
    "Mentor name 'jhon cena'",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
