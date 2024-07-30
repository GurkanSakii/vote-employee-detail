import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const DetailContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin: 25px;
`;

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 15px;
`;

const Detail = styled.p`
  & > strong {
    display: inline-block;
    width: 75px;
    font-weight: bold;
  }
`;

const EmployeeDetail = ({ employee }) => {
  return (
    <CenteredContainer>
      <DetailContainer>
        <Header>
          {employee.firstName} {employee.lastName}
        </Header>
        <Detail>
          <strong>Position:</strong> {employee.jobTitle}
        </Detail>
        <Detail>
          <strong>Email:</strong> {employee.email}
        </Detail>
        <Detail>
          <strong>Phone:</strong> {employee.phone}
        </Detail>
        <Detail>
          <strong>Address:</strong> {employee.address}
        </Detail>
      </DetailContainer>
    </CenteredContainer>
  );
};

export default EmployeeDetail;
