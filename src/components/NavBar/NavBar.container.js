import { connect } from "react-redux";
import * as services from "../../store/user/services";
import NavBar from "./NavBar";

const mapStateToProps = ({ user }) => ({
  token: user.token
});

const mapDispatchToProps = {
  logout: services.logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
