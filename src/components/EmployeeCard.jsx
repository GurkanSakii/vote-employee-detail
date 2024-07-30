import { useRouter } from "next/router";
import VotingButton from "./VotingButton";
import styled from "styled-components";
import { logEvent } from "@/utils/eventLogger";

const Card = styled.li`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  text-align: center;
  padding: 16px;
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
const EmployeeCard = ({ employee }) => {
  const router = useRouter();

  const goDetailPage = (employee) => {
    logEvent("Navigate to Detail Page", { employeeId: employee.id });
    router.push(`/${employee.id}`);
  };

  return (
    <Card onClick={() => goDetailPage(employee)}>
      <Name>
        {employee.firstName} {employee.lastName}
      </Name>
      <JobTitle>{employee.jobTitle}</JobTitle>
      <VotingButton employeeId={employee.id} />
    </Card>
  );
};

export default EmployeeCard;
