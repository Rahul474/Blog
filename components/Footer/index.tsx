import Image from 'next/image'
import Link from 'next/link'
import logoUrl from '@/public/logo/white.png'

type Props = {}

function Footer({}: Props) {
  const year = new Date().getFullYear()

  return (
    <div className='w-full p-4 text-white bg-[#2b3a42] dark:bg-[#101619]'>
      <div className='flex justify-center mb-4 lg:mb-0 md:justify-between'>
        <div className='items-center gap-4 hidden md:flex'>
          <div>
            <Image alt='logo' src={logoUrl} width={60} height={50} />
          </div>
          <div>Rahul Arora</div>
        </div>

        <div>
          <ul className='list-none lg:mr-11 flex flex-row md:flex-col justify-center gap-4 flex-wrap '>
            <li className='underline'>
              {' '}
              <Link target='_blank' href={'https://rahul-profile-ten.vercel.app/#about'}>About</Link>{' '}
            </li>
            <li className='underline'>
              {' '}
              <Link target='_blank' href={'https://rahul-profile-ten.vercel.app/#contact-me'}>Contact Me</Link>{' '}
            </li>
            <li className='pointer underline'>
              <Link
                href={
                  'https://drive.google.com/file/d/1PyMyhCw7SUBsHvYTpWICd47WJLnkT04Q/view'
                }
                target='_blank'
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        @Copyright {year} | Developer{' '}
        <Link href='https://rahul-profile-ten.vercel.app/' className='underline'>
          Rahul Arora
        </Link>
      </div>
    </div>
  )
}

export default Footer
