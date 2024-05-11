import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

const IconButton = (props) => {
  const { icon, color, dataModalTarget, dataModalToggle, onClick } = props;

  return (
    <button
      type="button"
      data-modal-target={dataModalTarget}
      data-modal-toggle={dataModalToggle}
      onClick={onClick}
      className={`dark:text-white bg-${color}-500 hover:bg-${color}-600 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2`}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
