import Footer from "../_components/Footer";
import Header from "../_components/Header";
import MessageAndCall from "../_components/MessageAndCall";


export default function RootLayout({ children }) {
  return (
    <>
     <Header/>
     {children}
     <MessageAndCall />
     <Footer />
    </>
  );
}
