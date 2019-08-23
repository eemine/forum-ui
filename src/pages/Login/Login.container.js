import { connect } from "react-redux";
import * as services from "../../store/user/services";
import Login from "./Login";

const mapStateToProps = ({ user }) => ({
  token: user.token
});

const mapDispatchToProps = {
  login: services.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
