import styled from 'styled-components';

export default function Home() {
  return <Title>Hello Next</Title>;
}

const Title = styled.h1`
  color: red;
  background: ${({ theme }) => theme.colors.darkBackground};
`;
