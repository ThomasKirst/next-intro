import Image from 'next/image';
import Paella from '../public/paella.jpg';

export default function Home() {
  return (
    <>
      <h1>Main Content on the index page (/)</h1>

      <Image
        src="https://images.unsplash.com/photo-1588276552401-30058a0fe57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
        width={5670}
        height={4000}
        alt="Paella"
      />
    </>
  );
}
