import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

const CardDashboard = ({color, title, count, icon }) => {
  return (
    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div className={`flex items-center px-5 h-full bg-${color}-400`}>
        <FontAwesomeIcon icon={icon} size="2xl" style={{color: "#FFFF",}} />
      </div>
      <div className="px-4 py-3 text-gray-600">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-4xl font-bold text-gray-500">{count}</p>
      </div>
  </div>
  )
}

export default CardDashboard