import Link from 'next/link'

export default function Button({ className, text, onClick }) {
  return (
    <Link href="/">
      <a className={`text-[18px] font-bold cursor-pointer text-white heading ${className} tracking-[1.5px] py-[6px] px-[12px] rounded-full bg-light hover:bg-medium transition-all duration-300`} onClick={onClick}>
        {text}
      </a>
    </Link>
  )
}
