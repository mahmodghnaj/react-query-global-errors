import {
  ReactNode,
  createContext,
  useEffect,
  useSyncExternalStore,
} from "react";

import { getError, subscribe } from "./query-client-provider";
import { ToastContainer } from "react-toastify";
import useNotification from "@/hooks/use-notification";

interface NewContractProps {
  children: ReactNode;
}

export const NewContractContext = createContext<NewContractProps | null>(null);

export const NewContractProvider = ({ children }: NewContractProps) => {
  const { handleErrorResponse } = useNotification();

  const error = useSyncExternalStore(subscribe, getError, () => "");

  useEffect(() => {
    if (error) {
      handleErrorResponse(error);
    }
  }, [error]);
  return (
    <>
      <NewContractContext.Provider value={null}>
        {children}
        <ToastContainer />
      </NewContractContext.Provider>
    </>
  );
};
export default NewContractProvider;
