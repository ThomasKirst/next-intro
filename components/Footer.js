import styled from 'styled-components';

export default function Footer() {
  return <AppFooter>Impressum</AppFooter>;
}

const AppFooter = styled.footer`
  padding: 1rem;
  margin: 4rem 0 0 0;
  border-top: 1px solid #000;
  color: #777;
`;
