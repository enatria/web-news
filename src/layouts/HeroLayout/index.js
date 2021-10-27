import { Navbar, Hero, Footer } from "../../components/molecules";
import PropTypes from "prop-types";

const HeroLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <Hero />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

HeroLayout.propTypes = {
  children: PropTypes.node,
};
export default HeroLayout;
