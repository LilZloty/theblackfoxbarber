import Image from 'next/image'

export default function Home() {
  return (
      <main className="">
        <div class="relative text-center">
        <Image className='opacity-40'
              src="/images/banner.jpg"
              width={1920}
              height={1080}
              alt="Fernando de The Black Fox Barber"
              layout="responsive"
            />
              <h1 className='absolute inset-0 flex items-center justify-center'>
                Experience the Best Haircuts in Guadalajara with The Black Fox Barber!</h1>
                  </div>
      </main>
  );
}
