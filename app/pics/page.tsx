import React from 'react'
import Image from 'next/image'

export default function Pics() {
  return (<>
      <p className="pb-2">me with some pretty cool people ;)</p>
      <Image src='/image/grid/vegas-tree.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/grid/lana-eli.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/grid/tallyween-cam-carissa-sami.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/blog/serc/kyle-nina-i-serc.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/grid/emi.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/grid/canyons.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/grid/riceball-cat-lana-eva.jpg' width={600} height={250} alt='vegas'/>
      <Image src='/image/blog/atlanta/group-photobooth.jpg' width={600} height={250} alt='vegas'/>

      
    </>)
}
