import { AboutUs, ContactUs, SocialMedia, Help } from "./import";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 z-10 bg-teal-300 text-black w-[100%] flex items-center">
      <AboutUs />
      <ContactUs />
      <SocialMedia />
      <Help />
    </footer>
  );
};

export default Footer;
