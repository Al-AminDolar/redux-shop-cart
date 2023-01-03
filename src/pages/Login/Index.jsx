import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import LoginPage from "./LoginPage";

const Protected = ({ Component }) => {
  const user = useSelector(selectUser);

  return (
    <div className=" flex  justify-center p-5">
      {user &&
      user.name === "Md Razu Ahammed Molla" &&
      user.password === "123" ? (
        <Component />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Protected;
