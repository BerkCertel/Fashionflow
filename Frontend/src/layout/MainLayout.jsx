import PropTypes from "prop-types";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import ModalDialog from "../components/Modals/ModalDialog/ModalDialog";
import { useEffect, useState } from "react";

function MainLayout({ children }) {
  const [isDialogShow, setIsDialogShow] = useState(true);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog");

    // Dialog durumu varsa, onu oku, yoksa varsayılan olarak true ayarla
    if (dialogStatus === null) {
      localStorage.setItem("dialog", JSON.stringify(true));
    } else {
      setIsDialogShow(JSON.parse(dialogStatus));
    }

    // Modalı 5 saniyede bir açma fonksiyonu
    const interval = setInterval(() => {
      if (JSON.parse(localStorage.getItem("dialog"))) {
        setIsDialogShow(true);
      }
    }, 2000);

    // Temizlik işlemi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ModalDialog
        isDialogShow={isDialogShow}
        setIsDialogShow={setIsDialogShow}
      />
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
