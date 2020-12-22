import './App.css'
import { useSelector } from 'react-redux'

import SideBar from '../components/SideBar'
import Search from '../components/Search'
import SalesReport from '../components/SalesReport'
import Notepad from '../components/Notepad'
import SubGraph from '../components/SubGraph'
import Inbox from '../components/Inbox'
import ThisMonth from '../components/ThisMonth'
import LastMonth from '../components/LastMonth'
import NotificationEvent from '../components/NotificationEvent'
import RecentPost from '../components/RecentPost'

export default function App() {
  const control = useSelector(state => state.auth.addItem)
  return (
    <div className={control?'App2':'App'}>
      <SideBar/>
      {control && (
        <>
          <div>
            <RecentPost/>
          </div>
        </>
      )}
      {!control && (
        <>
          <Search/>
          <SalesReport/>
          <Notepad/>
          <SubGraph/>
          <Inbox/>
          <ThisMonth/>
          <LastMonth/>
          <NotificationEvent/>
        </>
      )}
    </div>
  );
}
