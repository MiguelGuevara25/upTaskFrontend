import Image from "next/image";

export default function Logo() {
  return (
    <Image className="object-cover" fill src="/logo.svg" alt="Logo" />
  )
}
