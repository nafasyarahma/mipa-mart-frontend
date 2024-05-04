import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const SidebarMenu = (props) => {
  const { label, icon } = props
  return (
    <li>
    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <FontAwesomeIcon icon={icon} size="lg" />
       <span className="ms-3">{label}</span>
    </a>
 </li>
  ) 
}

export default SidebarMenu