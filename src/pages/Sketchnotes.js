import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Header from "components/headers/light.js";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (

    <AnimationRevealPage>
      <Header />
      <TabGrid
        heading={
          <>
            Checkout my <HighlightedText>#sketchnotes.</HighlightedText>
          </>
        }
      />
    </AnimationRevealPage>
  );
}
