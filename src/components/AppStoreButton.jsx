import apple from '../assets/apple.svg'
import appleLarge from '../assets/apple-large.svg'

// size="lg" is the 198x66 hero variant; default is the 120x40 navbar one.
export default function AppStoreButton({ size = 'sm' }) {
  const lg = size === 'lg'
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className={`relative block shrink-0 overflow-clip border-solid border-[#a6a6a6] bg-black text-white ${
        lg ? 'h-[66px] w-[198px] rounded-md border-[1.65px]' : 'h-10 w-[120px] rounded-md border'
      }`}
    >
      <img
        alt=""
        src={lg ? appleLarge : apple}
        className={`absolute ${lg ? 'left-[11.55px] top-[11.55px] h-[39.6px] w-[33px]' : 'left-[7px] top-[7px] h-6 w-5'}`}
      />
      <span
        className={`absolute top-1/2 flex -translate-y-1/2 flex-col ${lg ? 'left-[57.75px] w-[128.7px]' : 'left-[35px] w-[78px]'}`}
      >
        <span className={lg ? 'text-[14.85px] leading-[14.85px]' : 'text-[9px] leading-[9px]'}>Download on the</span>
        <span className={`leading-none tracking-[-0.47px] ${lg ? 'text-[29.7px]' : 'text-lg'}`}>App Store</span>
      </span>
    </a>
  )
}
