import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Text } from "@chakra-ui/core"
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "swiper/swiper.scss"
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])


// 走马图
const Swipers = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiExpresses (filter: {}, limit: 4, sort: {fields: date, order: DESC}){
        nodes {
          body
        }
      }
    }
  `)

  let { nodes } = data.allStrapiExpresses

  return (

    <>
     <Heading textAlign="center" fontSize="2rem" backgroundColor="#161a1f" color="#fff" pb="2rem">ΞXPRΞSS</Heading>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {nodes.map((body, index) => {
        return (
          <SwiperSlide key={index}>
            <Box  minH="100%" h="145px" textAlign="center" px="5rem">
              <Text fontSize="1.2rem">{body.body}</Text>
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </>
  )
}

export default Swipers
