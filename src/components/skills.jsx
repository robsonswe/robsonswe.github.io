import Image from 'next/image'

import htmlLogo from '../../public/images/html.svg'
import cssLogo from '../../public/images/css.svg'
import jsLogo from '../../public/images/javascript.svg'
import nextLogo from '../../public/images/nextjs.svg'
import tailwindLogo from '../../public/images/tailwind.svg'
import reactLogo from '../../public/images/react.svg'
import firebaseLogo from '../../public/images/firebase.svg'
import mongoLogo from '../../public/images/mongo.svg'
import pgresLogo from '../../public/images/pgres.svg'
import mysqlLogo from '../../public/images/mysql.svg'



export default function Skills () {
    return (
        <div>
      <h1 className="font-bold text-lg">Skills</h1>
            <div className='flex flex-row gap-4 p-4 filter: grayscale opacity-60 flex-wrap w-96'>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={htmlLogo} width={30} height={30} alt='HTML' />
                    <div className='text-xs'>HTML</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={cssLogo} width={30} height={30} alt='CSS' />
                    <div className='text-xs'>CSS</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={jsLogo} width={30} height={30} alt='Javascript' />
                    <div className='text-xs'>Javascript</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={reactLogo} width={33} height={33} alt='React' />
                    <div className='text-xs'>React</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={nextLogo} width={30} height={30} alt='Next.JS' />
                    <div className='text-xs'>NextJS</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={tailwindLogo} width={40} height={40} alt='TailwindCSS' />
                    <div className='text-xs'>TailwindCSS</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={firebaseLogo} width={30} height={30} alt='Firebase' />
                    <div className='text-xs'>Firebase</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={mongoLogo} width={42} height={42} alt='MongoDB' />
                    <div className='text-xs'>MongoDB</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={pgresLogo} width={30} height={30} alt='PostgresSQL' />
                    <div className='text-xs'>PostgresSQL</div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <Image src={mysqlLogo} width={30} height={30} alt='MySQL' />
                    <div className='text-xs'>MySQL</div>
                </div>
            </div>
        </div>
    )
}