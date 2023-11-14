import useNotification from "@/hooks/use-notification";
import { useTest } from "@/services/test";
export default function Home() {
  const { mutate: test } = useTest();
  const { showSuccess } = useNotification();
  return (
    <div className="h-full w-full flex bg-slate-500 justify-center items-center">
      <div className="flex flex-col space-y-3">
        <button
          onClick={() => test()}
          className="bg-red-500 text-white font-bold text-lg h-16 w-48 rounded-md shadow-xl"
        >
          Show Error
        </button>
        <button
          onClick={() => showSuccess("Success")}
          className="bg-green-400 text-white font-bold text-lg h-16 w-48 rounded-md shadow-xl"
        >
          Show Notification
        </button>
      </div>
    </div>
  );
}
