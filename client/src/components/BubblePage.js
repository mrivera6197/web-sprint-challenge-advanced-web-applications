import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { fetchColors } from '../api/fetchColors'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getData = () => {
    fetchColors()
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ColorList colors={colorList} getData={getData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
