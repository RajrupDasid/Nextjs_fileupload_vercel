//show case section
import { list } from '@vercel/blob';
import Image from 'next/image';
 
import React from 'react'

const Images = async () => {
async function allImages() {
    "use server"
        const blobs = await list();
        return blobs;
      }
    const images = await allImages();
  return (
    <section>
    {images.blobs.map((image) => (
      <Image
        priority
        key={image.pathname}
        src={image.url}
        alt="Image"
        width={200}
        height={200}
      />
    ))}
  </section>
  )
}

export default Images