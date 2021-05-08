import React, { useState, useEffect } from "react"
import axios from "axios"
import { Spinner } from "@chakra-ui/core"

const Epoch = () => {
  const [data2, setData2] = useState(0)

  const [data3, setData3] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await axios("https://beaconcha.in/api/v1/epoch/latest")

      const result3 = await axios(
        "https://beaconcha.in/api/v1/epoch/latest/blocks"
      )

      setData2(result2.data.data)
      setData3(result3.data.data[0].slot)
    }

    fetchData(data2)
    fetchData(data3)
  }, [])

  return (
    <>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span>
        {" "}
        Epoch&nbsp;/&nbsp;Slot :{" "}
        {data2 === 0 && data3 === 0 ? (
          <Spinner size="sm" />
        ) : (
          <span style={{ color: "rgba(238,119,28,0.65)" }}>
            {data2.epoch} / {data3}
          </span>
        )}
      </span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span>
        活跃验证者 :{" "}
        {data2 === 0 ? (
          <Spinner size="sm" />
        ) : (
          <span style={{ color: "rgba(238,119,28,0.65)" }}>
            { data2.validatorscount}
          </span>
        )}
      </span>
    </>
  )
}

export default Epoch
