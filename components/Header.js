import styled from 'styled-components';
import Link from 'next/link';

export default function Header() {
  return (
    <PageHeader>
      <Navigation>
        <Link href="/">
          <a>Startseite</a>
        </Link>
        <Link href="/products">
          <a>Produkte</a>
        </Link>
        <Link href="/categories">
          <a>Kategorien</a>
        </Link>
      </Navigation>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
  border-bottom: 1px solid #000;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: #0385d3;
    text-decoration: none;
  }
  a:hover {
    color: #000;
  }
`;
