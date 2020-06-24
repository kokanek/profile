import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "components/headers/light.js";

import chefIconImageSrc from "images/yt-logo.png";
import celebrationIconImageSrc from "images/twitter.png";
import shopIconImageSrc from "images/devto.svg";
import profile from "images/undraw_developer.svg";
import codingImage from "images/coding.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (

    <AnimationRevealPage>
      <Header />
      <Hero
        heading={<>Hey there! I'm <HighlightedText>Kapeel Kokane</HighlightedText></>}
        description={<>I'm a <strong>full stack developer</strong> with five years of experience in the industry. In addition to working full-time as a senior dev, I also love to create videos, blog posts & #sketchnotes around programming.</>}
        imageSrc={profile}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Let's Connect!"
        primaryButtonUrl="#"
        watchVideoButtonText="My Youtube Channel"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/bPPHjJOyx1Y" // https://www.youtube.com/watch?v=bPPHjJOyx1Y
      />
      <Features
        heading={
          <>
            My <HighlightedText>Content.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: chefIconImageSrc,
            title: "2500+ Subscribers",
            description: "YouTube Channel",
            url: "https://timerse.com"
          },
          {
            imageSrc: shopIconImageSrc,
            title: "3000+ Followers",
            description: "Dev.io Blog",
            url: "https://google.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "10+ Sketchnotes",
            description: "Twitter Handle",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature
        subheading={<Subheading>Graduated in 2014</Subheading>}
        heading={
          <>
            In the industry for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Let's connect"
        imageSrc={codingImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <div id="test" />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
