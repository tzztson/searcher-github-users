import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

// NOTE: here we are using the alert component from DaisyUI which works better
// with DaisyUI themes. If you have the Light theme from DaisyUI and can't see
// the text in the alert then this is the change you need.
// We also now conditionally hide the containing div rather than conditionally
// render the alert, this prevents content shift when the alert shows.

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <div className="chat chat-start h-12">
        <div className="chat-bubble chat-bubble-error h-12">
          <strong className="text-white text-xl">{alert?.msg}</strong>
        </div>
      </div>
    </div>
  );
}

export default Alert;
