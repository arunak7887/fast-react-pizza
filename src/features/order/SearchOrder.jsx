import { useState, useNavigate } from "react";

export function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}
