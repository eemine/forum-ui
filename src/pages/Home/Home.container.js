import { connect } from "react-redux";
import * as services from "../../store/category/services";
import Home from "./Home";

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = {
  getCategories: services.getCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
