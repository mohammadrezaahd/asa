'use client'

import getConvertedFile from '@/api/convert'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const Model = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Model), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [isFileExist, setIsFileExist] = useState<boolean>(false)
  const [fileUrl, setFileUrl] = useState(null)

  const fileInputHandler = (e) => {
    // const asd = e.target.files[0]
    // const asdUrl = URL.createObjectURL(asd)

    // setFileUrl(asdUrl)
    // setIsFileExist(true)

    const data = getConvertedFile(e.target.files[0])
  }

  return (
    <>
      {(isFileExist && fileUrl && (
        <>
          {/* <div className='relative h-screen w-full md:mb-40'>
            <View orbit className='relative h-screen'>
              <Suspense fallback={null}>
                <Model scale={1} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} modelUrl={fileUrl} />
                <Common color={'lightpink'} />
              </Suspense>
            </View>
          </div> */}
          AS
        </>
      )) || (
        <>
          <div>
            <input type='file' accept='.fbx' onChange={fileInputHandler} />
          </div>
        </>
      )}
    </>
  )
}
