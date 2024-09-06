import Link from 'next/link';
import Image from 'next/image';
import ArrowBack from '../../public/icons/arrow-back.svg';

export default function Navbar({
  repoLink,
  backLink = '/',
}: {
  repoLink: string;
  backLink?: string;
}) {
  return (
    <>
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href={backLink}>
          <Image src={ArrowBack} alt={'Back Arrow'} />
        </Link>

        <Link href={repoLink} target="_blank">
          Repo
        </Link>
      </div>
    </>
  );
}
