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
        description={<>A <strong>full stack developer</strong> with more than six years of experience in the industry. In addition to working full-time as a senior dev, I also love to create blog posts on <strong>dev.to</strong> & videos on my YouTube channel <strong>Comscience Simplified</strong>.</>}
        imageSrc={profile}
        imageCss={imageCss}
        imageDecoratorBlob={true}
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
            title: "3300+ Subscribers",
            description: <strong>YouTube Channel</strong>,
            url: "https://bit.ly/CsSimpl"
          },
          {
            imageSrc: shopIconImageSrc,
            title: "3200+ Followers",
            description: <strong>Dev.to Blog</strong>,
            url: "https://dev.to/comscience"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "10+ Sketchnotes",
            description: <strong>Twitter Handle</strong>,
            url: "https://twitter.com/Kokaneka"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature
        subheading={<Subheading>Giving back to the community</Subheading>}
        heading={
          <>
            Been a content creator for the
            <wbr /> <HighlightedText>last 3 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            In addition to creating <strong>tech videos</strong>, I also create <strong>blog posts</strong> on dev.to as well as <strong>technical #sketchnotes</strong> on twitter.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Let's connect"
        primaryButtonUrl="https://www.linkedin.com/in/%F0%9F%91%A4kapeel-kokane-30b81973/"
        imageSrc={codingImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      
      {/* <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr"><a href="https://t.co/Tc8pt6MIRy">pic.twitter.com/Tc8pt6MIRy</a></p>&mdash; Comscience Simplified (@Kokaneka) <a
          href="https://twitter.com/Kokaneka/status/1304755202663182336?ref_src=twsrc%5Etfw"></a>
      </blockquote> */}
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <MainFeature2
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
      /> */}
      {/*<Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <div id="test" />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      />
      <Footer /> */}
    </AnimationRevealPage>
  );
}
