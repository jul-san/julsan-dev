import React from 'react'
import Image from 'next/image'

const IMAGE_PATHS = [
  '/image/grid/boston-bench.jpg',
  '/image/grid/lana-eli.jpg',
  '/image/grid/last-night.jpg',
  '/image/grid/hike.jpg',
  '/image/grid/mit-id.jpg',
  '/image/grid/best-chinese-res.jpg',
  '/image/grid/tallyween-cam-carissa-sami.jpg',
  '/image/grid/nyc.jpg',
  '/image/grid/dragon-festival.jpg',
  '/image/blog/serc/kyle-nina-i-serc.jpg',
  '/image/grid/rock-climbing.jpg',
  '/image/grid/rachel.jpg',
  '/image/grid/emi.jpg',
  '/image/grid/game-night.jpg',
  '/image/grid/nyc-uri.jpg',
  '/image/grid/riceball-cat-lana-eva.jpg',
  '/image/grid/celtics.jpg',
  '/image/blog/atlanta/group-photobooth.jpg',
  '/image/grid/beach.jpg',
  '/image/grid/nerds.jpg',
  '/image/grid/uri-selfie.jpg',
  '/image/grid/friendship-bbq.jpg',
  '/image/grid/car-sami.jpg',
  '/image/grid/matt-hotpot.jpg',
  '/image/grid/fair-eva-lana-i.jpg',
  '/image/grid/kimball-farms.jpg',
  '/image/grid/filipinos.jpg',
  '/image/grid/hunan.jpg',
  '/image/grid/heart.jpg',
  '/image/grid/ken-chess.jpg',
  '/image/grid/hmart-eva-selfie.jpg',
  '/image/grid/kbbq-gainesville.jpg',
  '/image/grid/eva-pie.jpg'
];

export default function Pics() {
  return (
  <>
    <p className="pb-2">me with some cool people</p>
    
    {IMAGE_PATHS.map((IMAGES, index) =>(
      <Image key={index} 
        style={{margin: '15px 0'}} 
        src={IMAGES} 
        width={600} 
        height={250} 
        alt=''/>)
    )}

  </>)
}
