import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(PrivateRoute);
