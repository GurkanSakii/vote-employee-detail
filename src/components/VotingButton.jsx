import { useMutation, gql } from '@apollo/client';
import styled from 'styled-components';

const VOTE_MUTATION = gql`
  mutation Vote($id: ID!) {
    vote(id: $id) {
      id
      votes
    }
  }
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const VotingButton = ({ employeeId }) => {
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: { id: employeeId },
    update: (cache, { data: { vote } }) => {
      // Update cache if needed
    },
  });

  return <Button onClick={() => vote()}>Vote</Button>;
};

export default VotingButton;
