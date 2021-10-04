import React from "react";
import Hero from "../../components/HeroSection";
import WhyDonate from "../../components/WhyDonate";
import WhoWeAre from "../../components/WhoWeAre";
import RecentBlogs from "../../components/RecentBlogs/Index";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhyDonate />
      <RecentBlogs />
    </div>
  );
};

export default Home;
