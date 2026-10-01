import background from '../assets/background.png'
import mascot from '../assets/mascot.png'
import AppStoreButton from '../components/AppStoreButton.jsx'

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-102px)] overflow-hidden">
      <img
        alt=""
        src={background}
        className="pointer-events-none absolute inset-0 size-full object-cover object-bottom opacity-78"
      />
      <img
        alt="PlayFeat mascot waving"
        src={mascot}
        className="pointer-events-none absolute bottom-0 right-0 hidden aspect-square w-[563px] max-w-[45%] object-cover md:block"
      />
      <section className="relative mx-auto max-w-[1440px] px-6 pb-40 pt-20 lg:pl-[127px]">
        <h1 className="text-[40px] font-bold leading-normal text-tertiary lg:text-[64px]">
          Fun While <br />
          Staying Accessible
        </h1>
        <p className="mt-10 max-w-[741px] text-2xl text-black lg:text-[32px]">
          PlayFeat! is a cooking game you play with your hands in the air.
        </p>
        <div className="mt-12">
          <AppStoreButton size="lg" />
        </div>
      </section>
    </main>
  )
}
