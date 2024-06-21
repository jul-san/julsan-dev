import React from 'react'
import Image from 'next/image'

export default function Pics() {
  const imageStyle = { margin: '15px 0' }; // Adjust the value as needed

  return (<>
      <p className="pb-2">me with some pretty cool people</p>
      <Image style={imageStyle} src='/image/grid/vegas-tree.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/lana-eli.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/tallyween-cam-carissa-sami.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/blog/serc/kyle-nina-i-serc.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/rachel.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/emi.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/riceball-cat-lana-eva.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/blog/atlanta/group-photobooth.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/nerds.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/uri-selfie.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/car-sami.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/matt-hotpot.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/fair-eva-lana-i.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/filipinos.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/faye.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/heart.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/ken-chess.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/dean-rhea.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/hmart-eva-selfie.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/kbbq-gainesville.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/eva-pie.jpg' width={600} height={250} alt='vegas'/>
      <Image style={imageStyle} src='/image/grid/bonding.jpg' width={600} height={250} alt='vegas'/>
    </>)
}
