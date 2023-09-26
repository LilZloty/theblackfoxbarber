import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
      <main className="">
        <div class="relative text-center">
        <Image className='opacity-40'
              src="/images/banner.jpg"
              width={1920}
              height={1080}
              alt="Fernando de The Black Fox Barber"
              style={{ width: '100%', height: 'auto' }}
            />
             <div className="flex items-center justify-center absolute inset-0">
              <h1 className='mb-20'> Experience the Best Haircuts in Guadalajara with The Black Fox Barber!</h1>
               </div>
                <div className="flex items-center justify-center absolute inset-0 mt-10">
                <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B523320205018%26data%3DARBcxQTzV4jGgnSiF4pwXNXE3-VJUJMfttN1ffh19kkLZ17hu2gHOA_XGRwdLZfLz6PBoiRs4wX6at_mzMYWJa7g7RNoH2u6oBDBVPNBD5ziaUgBrTazQaEDrJo38W4guE9tttth2lVCnKHICWYX9pCIxQ%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR1BEnhlOm8l_HgpJ6DYCDz88W1Vf1JmymelWerOEUvhmYsrwJwN3DDuu6c&h=AT0-Zc-16-Uf-xWMt9Y5IIqPYP1rWJ_uFqH6qcfRtP0DQXDI32xrjIZJHX1XlU82VRJROXysNBasgZxJsGtisXWEh607qbjfDlyX9dnGQQSMWuGTRtwM2NGGHfsJCe3NrW14xnp82_28Oww7YOLAjw" title="Share on WhatsApp">
                  <span>Contact me on Whatsapp</span>
                </Link>
                     </div>
                  </div>
                  </main>
  );
}
