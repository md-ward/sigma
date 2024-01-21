import { useEffect } from "react";
import AppRouter from "./router";
import NotificationServiceClient from "./global/notifications/controllers/notificationWebSocket";
import { getCookie } from "./useCookie";

const App = () => {
  useEffect(() => {
    if (getCookie("jwt_user")) {
      new NotificationServiceClient();
    }
  }, []);
  return <AppRouter />;
};

export default App;
