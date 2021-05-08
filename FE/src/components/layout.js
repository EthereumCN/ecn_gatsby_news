import React from "react"
import "../components/css/layout.css"
import Header from "./HeaderComponents/Header"
import { Box, Link } from "@chakra-ui/core"
import Footer from "./FooterComponents/Footer"

const Layout = ({ children }) => {
  return (
    // <Box position="relative" mx={["1rem", "1rem", "5rem", "5rem"]}>
    <Box>
      <Box position="relative" mx={["1rem", "1rem", "5rem", "5rem"]} maxW="1920px">
        <Header />
        {children}
        {/* <Box className={footer.beian}  position="relative" textAlign="center" >
        <Link
        _hover={{textDecoration:"none"}}
          position="relative"
          top={["0rem", "0rem", "0rem", "-3rem"]}
          fontSize="0.9rem"
          color="rgba(73,73,76,1)"
          href="http://beian.miit.gov.cn/"
          isExternal
        >
          {" "}
          蜀ICP备2021001286号
        </Link>{" "}
      </Box> */}
      </Box>
      <Footer/>
    </Box>
  )
}

export default Layout
