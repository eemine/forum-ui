import { connect } from "react-redux";
import * as services from "../../store/user/services";
import Home from "./Home";

const mapStateToProps = ({ user }) => ({
  token: user.token
});

const mapDispatchToProps = {
  login: services.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
