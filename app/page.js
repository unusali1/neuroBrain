import Header from "./_components/Header";
import Banner from "./_components/Banner";
import CustomersExperience from "./_components/customersExperience";
import MessageAndCall from "./_components/MessageAndCall";
import Footer from "./_components/Footer";
import Blogs from "./_components/Blogs";
import CallToAction from "./_components/CallToAction";
import YoutubeVideo from "./_components/YoutubeVideo";
import OmniChannelSection from "./_components/OmniChannelSection";
import TestimonialSection from "./_components/TestimonialSection";
import LookingCustomChatBot from "./_components/LookingCustomChatBot";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CustomersExperience />
      <YoutubeVideo />
      <OmniChannelSection />
      <MessageAndCall />
      <Blogs />
      <TestimonialSection />
      <LookingCustomChatBot />
      <Footer />
    </>
  );
}
