import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const SidebarMenu = (props) => {
  const { label, icon, link, badgeCount } = props;
  return (
    <li>
      <Link
        to={link}
        className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div>
          <FontAwesomeIcon icon={icon} size="lg" />
          <span className="ms-3">{label}</span>
        </div>
        {badgeCount > 0 && (
          <span className="align-right text-xs font-semibold text-white bg-red-500 rounded-full px-2 py-0.5">
            {badgeCount}
          </span>
        )}
      </Link>
    </li>
  );
};

export default SidebarMenu;
