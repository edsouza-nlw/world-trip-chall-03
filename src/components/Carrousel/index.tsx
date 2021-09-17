import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

import CarouselImage from './CarouselImage'

SwiperCore.use([Navigation, Pagination, Autoplay])

interface Continent {
  id: number
  slug: string
  name: string
  description: string
  carrouselImage: string
}

interface CarouselProps {
  continents: Continent[]
}

import { Box, Flex } from '@chakra-ui/react'

export default function CarrouselSection({ continents }: CarouselProps) {
  return (
    <Box
      justify="center"
      align="center"
      bgColor="base_white.50"
      pt="0.25rem"
      pb="3rem"
      mt="-0.05rem"
    >
      <Flex w="90%">
        <Swiper
          wrapperTag="ul"
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={0}
          navigation
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // onInit={(swiper) => console.log('initial', swiper)}
          // onSlideChange={(swiper) =>
          //   console.log('slide change', swiper.activeIndex)
          // }
          // onSwiper={(swiper) => console.log('on', swiper)}
        >
          {continents.map((continent) => (
            <SwiperSlide key={`slide-${continent.slug}`}>
              <CarouselImage
                id={continent.id}
                slug={continent.slug}
                name={continent.name}
                image={continent.carrouselImage}
                description={continent.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  )
}
