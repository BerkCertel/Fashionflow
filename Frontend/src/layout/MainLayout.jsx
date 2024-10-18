import PropTypes from "prop-types";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import ModalDialog from "../components/Modals/ModalDialog/ModalDialog";
import { useEffect } from "react";
import SearchDialog from "../components/Modals/SearchDialog/SearchDialog";
import { useDispatch, useSelector } from "react-redux";
import { setIsDialogShow, setIsSearchShow } from "../redux/modalSlice";

function MainLayout({ children }) {
  const dispatch = useDispatch();
  const isDialogShow = useSelector((state) => state.modal.isDialogShow);
  const isSearchShow = useSelector((state) => state.modal.isSearchShow);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog");

    if (dialogStatus === null) {
      localStorage.setItem("dialog", JSON.stringify(true));
    } else {
      dispatch(setIsDialogShow(JSON.parse(dialogStatus)));
    }

    const interval = setInterval(() => {
      if (JSON.parse(localStorage.getItem("dialog"))) {
        dispatch(setIsDialogShow(true));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  console.log(isSearchShow);

  return (
    <div className="flex flex-col min-h-screen">
      <ModalDialog
        isDialogShow={isDialogShow}
        setIsDialogShow={(value) => dispatch(setIsDialogShow(value))}
      />
      <SearchDialog
        isSearchShow={isSearchShow}
        setIsSearchShow={(value) => dispatch(setIsSearchShow(value))}
      />
      <Header setIsSearchShow={(value) => dispatch(setIsSearchShow(value))} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
