import React from "react";
import HeadCarousel from "../../components/HeadCarousel";
import ContentInput from "../../components/ContentInput";
import ContentResult from "../../components/ContentResult";
import DietList from "../../components/DietList";

function Home() {
  return (
    <div>
      <HeadCarousel />
      <ContentInput />

      <ContentResult />
      <DietList />
    </div>
  );
}

export default Home;
