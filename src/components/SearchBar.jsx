function SearchBar({ search, setSearch, companies }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search interview by company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div className="company-suggestions">
          {companies
            .filter((company) =>
              company.toLowerCase().includes(search.toLowerCase())
            )
            .map((company) => (
              <div
                key={company}
                className="suggestion"
                onClick={() => setSearch(company)}
              >
                {company}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;