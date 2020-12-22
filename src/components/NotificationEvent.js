import React, { useState } from 'react'
import './GlobalComponent.css'

const NotificationEvent = () => {
    const [notification, setNotification]=useState(true)
    const [ListNotification, setListNoti]=useState(
      [
        {
          userProfile: '',
          name: 'Admin',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Student',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Teacher',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Admin',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Admin',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Admin',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
        {
          userProfile: '',
          name: 'Admin',
          text: 'Your faculty uploaded the syllabus',
          status: '3 minutes ago'
        },
      ]
    )
    const NotificationList = ListNotification.map((item, index)=>
    <div className="NotificationArray" key={index}>
      <div className="Noti_UserBox"></div>
        <div className="Noti_TextSection">
          <div className="Noti_UserName">
            {item.name}
          </div>
          <div className="Noti_UserText">
            {item.text}
          </div>
          <div className="Noti_UserStatus">
            {item.status}
          </div>
        </div>
      </div>
    )
    return(
      <>
        <div className="Events"></div>
        <div className="EventText" onClick={()=> setNotification(notification?false:true)}>
          Events
        </div>
        <div className="Notifications"></div>
        <div className="NotificationText" onClick={()=> setNotification(notification?false:true)}>
          Notifications
        </div>
        {notification && (
          <>
            <div className='NotificationBox'></div>
            <div className='NotificationSubBox'>
              <ul>{NotificationList}</ul>
            </div>
          </>
        )}
        {!notification && (
          <>
            <div className='NotificationBox'></div>
            <div className='NotificationSubBox'></div>
          </>
        )}
        <div className='ViewAll'></div>
        <div className='ViewText'>
          View All
        </div>
      </>
    )
}
export default NotificationEvent