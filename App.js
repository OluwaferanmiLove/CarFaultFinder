import { ToastProvider } from "react-native-toast-notifications";
import AppContextProvider from "./src/context/AppContext";
import CarFaultFinder from "./src/navigation";
import { initializeApp } from "firebase/app";
import { colors } from "./src/constants/colors";
import { hp } from "./src/util/dimension";
import { deleteFromStorage } from "./src/util/storageUtil";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAqKGwwF5M1MRK_rvcM6CCgnpIoCnGH2AM",
    authDomain: "carfaultfinder.firebaseapp.com",
    projectId: "carfaultfinder",
    storageBucket: "carfaultfinder.appspot.com",
    messagingSenderId: "977673208314",
    appId: "1:977673208314:web:4ebfdd60236667ea5b6443"
  };

  initializeApp(firebaseConfig);

  return (
    <AppContextProvider>
      <ToastProvider
        placement="top"
        duration={2000}
        // successColor="green"
        // dangerColor="red"
        // warningColor="orange"
        // normalColor="#6610F2"
        normalColor={colors.primaryLighter}
        offsetTop={hp(40)}
        // renderType={{
        //   normal: (toast) => (
        //     <Toast text={toast.message} bgColor="#6610F2" />
        //   ),
        //   danger: (toast) => (
        //     <Toast text={toast.message} bgColor="#F83C33" />
        //   ),
        //   success: (toast) => (
        //     <Toast text={toast.message} bgColor="#45D988" />
        //   ),
        // }}
        swipeEnabled={true}>
        <CarFaultFinder />
      </ToastProvider>
    </AppContextProvider>
  );
}
