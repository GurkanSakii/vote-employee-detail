import styled from "styled-components";

const CardContainer = styled.li`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
  text-align: center;
  padding: 32px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const JobTitle = styled.p`
  font-size: 14px;
  color: #555;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
`;

const VoteCount = styled.p`
  height: 24px;
  margin: 8px 0;
`;

const VotingButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const EmployeeCard = ({ employee, goDetailPage, onVote }) => (
  <CardContainer onClick={() => goDetailPage(employee)}>
    <Name>{employee.name}</Name>
    <JobTitle>{employee.username}</JobTitle>
    <VoteCount>{employee.votes ? `Votes: ${employee.votes || 0}` : ""}</VoteCount>
    <VotingButton onClick={(e) => onVote(e, employee)}>Vote</VotingButton>
  </CardContainer>
);

export default EmployeeCard;
