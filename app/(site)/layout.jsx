import NavBar from "@/components/HomePage/Navbar/NavBar";
import Footer from "@/components/HomePage/Footer";
import ScrollToTop from "@/lib/ScrollToTop";
import RouteTransition from "@/components/RouteTransition";
import { MapContextProvider } from "@/lib/MapContext";
import WhatsAppIcon from "@/components/ContactUs/WhatsAppIcon";
import CallIcon from "@/components/ContactUs/CallIcon";
import Emergency from "@/components/ContactUs/Emergency";
import EmailIcon from "@/components/ContactUs/EmailIcon";
import CookieBanner from "@/components/CookieBanner";

export default function SiteLayout({ children }) {
  return (
    <div className="inset-0 w-full overflow-x-hidden md:overflow-visible">
      <MapContextProvider>
        <NavBar />
        <ScrollToTop />
        <RouteTransition>{children}</RouteTransition>
        <Footer />
        {/* TODO */}
        {/* <ChatBotWidget /> */}
        <Emergency />
        <EmailIcon />
        <WhatsAppIcon />
        <CallIcon />
        <CookieBanner />
      </MapContextProvider>
    </div>
  );
}
