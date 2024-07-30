import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_EMPLOYEES } from "@/graphql/queries";
import { useRouter } from "next/router";
import { logEvent } from "@/utils/eventLogger";
import styled from "styled-components";
import EmployeeCard from "@/components/EmployeeCard";

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
  const [employees, setEmployees] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (data && data.employees) {
      setEmployees(data.employees);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const goDetailPage = (employee) => {
    logEvent("Navigate to Detail Page", { employeeId: employee.id });
    router.push(`/${employee.id}`);
  };

  const onVote = (e, voteEmployee) => {
    e.stopPropagation();
    setEmployees((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((employee) =>
        employee.id === voteEmployee.id ? { ...employee, votes: (employee.votes || 0) + 1 } : employee
      );
      return updatedEmployees.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    });

    logEvent("Voted to ", { employeeName: voteEmployee.firstName + " " + voteEmployee.lastName });
  };

  return (
    <CardList>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} goDetailPage={goDetailPage} onVote={onVote} />
      ))}
    </CardList>
  );
};

export default Home;
