import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width: 300px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ResultItem = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedData, setFetchedData] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getEmployees/${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else {
        setFetchedData({ error: 'Error fetching data' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchedData({ error: 'Error fetching data' });
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search by employee name..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <ResultContainer>
        {fetchedData ? (
          fetchedData.error ? (
            <div>{fetchedData.error}</div>
          ) : (
            <ResultItem>
              <div>Name: {fetchedData.name}</div>
              <div>Surname: {fetchedData.surname}</div>
              <div>Department: {fetchedData.department}</div>
              <div>Email: {fetchedData.email}</div>
              <div>Roles: {fetchedData.roles}</div>
              <div>startDate: {fetchedData.startDate}</div>
              <div>endDate: {fetchedData.endDate}</div>
              <div>Tel: {fetchedData.tel}</div>
            </ResultItem>
          )
        ) : (
          <div>Loading...</div>
        )}
      </ResultContainer>
    </div>
  );
};

export default SearchComponent;