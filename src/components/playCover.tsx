import { AiFillPlayCircle } from 'react-icons/all'

function PlayCover({ src, size }: { src: string, size: "small" | "medium" }) {
  return (
    <div className='relative'>
      <img src={src} alt="" className='w-full aspect-video' />
      {size == "small" &&
        <AiFillPlayCircle className='absolute-xy text-4xl p-px bg-white rounded-full ' />
      }
      {size == "medium" &&
        <AiFillPlayCircle className='absolute-xy text-6xl p-px bg-white rounded-full ' />
      }
    </div>
  )
}

export default PlayCover