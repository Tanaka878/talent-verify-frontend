import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width: 300px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const ResultItem = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const ResultLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ResultValue = styled.div`
  color: #555;
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
    <Container>
      <Title>Talent Verify</Title>
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
              <ResultLabel>Name:</ResultLabel>
              <ResultValue>{fetchedData.name}</ResultValue>
              <ResultLabel>Surname:</ResultLabel>
              <ResultValue>{fetchedData.surname}</ResultValue>
              <ResultLabel>Department:</ResultLabel>
              <ResultValue>{fetchedData.department}</ResultValue>
              <ResultLabel>Email:</ResultLabel>
              <ResultValue>{fetchedData.email}</ResultValue>
              <ResultLabel>Roles:</ResultLabel>
              <ResultValue>{fetchedData.roles}</ResultValue>
              <ResultLabel>Start Date:</ResultLabel>
              <ResultValue>{fetchedData.startDate}</ResultValue>
              <ResultLabel>End Date:</ResultLabel>
              <ResultValue>{fetchedData.endDate}</ResultValue>
              <ResultLabel>Tel:</ResultLabel>
              <ResultValue>{fetchedData.tel}</ResultValue>
            </ResultItem>
          )
        ) : (
          <div>Loading...</div>
        )}
      </ResultContainer>
    </Container>
  );
};

export default SearchComponent;