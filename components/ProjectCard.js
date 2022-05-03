import Image from '@/components/Image'
export default function ProjectCard({ title, description, image }) {
  const convertImage = ({ w, h }) => `
         <Image src="${image}" width="${w}" height="${h}" quality="1"/>
                  `
  const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
  return (
    <div className="bg-premier-400 group relative my-5  flex aspect-auto h-64 cursor-pointer overflow-hidden rounded-xl md:my-10 md:h-72">
      <div className="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent p-3 pt-24 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <div className="translate-y-4  transform transform-gpu pb-5 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-60 ">{description}</div>
        </div>
      </div>
      <Image
        alt={title}
        className="aspect-auto object-cover transition duration-300 ease-in-out group-hover:scale-110"
        src={image}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(10, 10))}`}
        layout="fill"
      />
    </div>
  )
}