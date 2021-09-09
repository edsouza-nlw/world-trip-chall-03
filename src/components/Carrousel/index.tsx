import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import CarouselImage from './CarouselImage'

SwiperCore.use([Navigation, Pagination])

// import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'
//
//  import '../styles/slider.css'
// import '../../styles/slider.css'

interface Continent {
  id: number
  name: string
  description: string
  carrouselImage: string
}

interface CarouselProps {
  continents: Continent[]
}

import {
  Box,
  Flex,
  Text,
  Divider,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react'

export default function CarrouselSection({ continents }: CarouselProps) {
  // const isWideScreen = useBreakpointValue({
  //   sm: false,
  //   md: true,
  // })

  return (
    <Flex w="90%" justifyContent="center" alignItems="center" mb="8">
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        onInit={(swiper) => console.log('Swiper initialized', swiper)}
        onSlideChange={(swiper) =>
          console.log('slide change', swiper.activeIndex)
        }
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={0}
      >
        {continents.map((continent) => (
          <SwiperSlide key={`slide-${continent.id}`}>
            <CarouselImage
              id={continent.id}
              name={continent.name}
              image={continent.carrouselImage}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
