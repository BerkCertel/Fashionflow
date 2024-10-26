import FooterSection from "./FooterSection";
import FooterLogoSubs from "./FooterLogoSubs";
import FooterMap from "./FooterMap";
import FooterSocials from "./FooterSocials";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <div className="footer-main-div w-full h-full mt-5 ">
      <FooterIcons />

      <div className="  bg-black text-white p-5">
        <FooterLogoSubs />

        {/* Footer Sections */}

        <FooterSection />

        <div className=" container mx-auto  flex gap-6 mt-5">
          {/*FooterMap Section */}
          <FooterMap />

          {/*Socials Section */}
          <FooterSocials />
        </div>
      </div>
    </div>
  );
}

export default Footer;
