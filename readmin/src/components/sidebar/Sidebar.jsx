import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">readmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <DashboardIcon/>
            <span>Dashboard</span>
          </li>
            <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon/>
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon/>
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon/>
            <span>Delivery</span>
          </li>
            <p className="title">USEFUL LINKS</p>
          <li>
            <InsertChartOutlinedSharpIcon/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon/>
            <span>Notifications</span>
          </li>
            <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon/>
            <span>System Health</span>
          </li>
          <li>
            <AutoAwesomeMotionOutlinedIcon/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
