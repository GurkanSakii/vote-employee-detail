import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import EmployeeCard from "@/components/EmployeeCard";
import { GET_EMPLOYEES } from "@/graphql/queries";

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CardList>
      {data.employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </CardList>
  );
};

export default Home;
