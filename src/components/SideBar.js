import './GlobalComponent.css'
import { useDispatch } from 'react-redux';
import { AddItemNotepad } from '../actions/authAction';

const SideBar = () => {
  const dispatch = useDispatch();
  const SwitchDashoard = () => {
    dispatch(AddItemNotepad(false))
  }
    return(
      <div className='Rectangle'>
        <div onClick={()=> SwitchDashoard()} className='DashboardRect'></div>
        <div onClick={()=> SwitchDashoard()}>
          <div className='path1'></div>
          <div className='path2'></div>
          <div className='path3'></div>
          <div className='path4'></div>
        </div>
        <div onClick={()=> SwitchDashoard()} className='DashboardText'>
          Dashboard
        </div>
        <div className="School">
          <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 12L22 0L44 12V28H40V14.18L22 24L0 12ZM8 28.36V20.36L22 28L36 20.36V28.36L22 36L8 28.36Z" fill="white"/>
          </svg>
        </div>
        <div className="Settings">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M31.5001 18C31.5001 18.594 31.4461 19.17 31.3741 19.746L35.1721 22.734C35.5141 23.004 35.6041 23.49 35.3881 23.886L31.7881 30.114C31.5721 30.51 31.0861 30.654 30.6901 30.51L26.2081 28.692C25.2721 29.412 24.3001 30.006 23.1661 30.474L22.5001 35.244C22.4281 35.676 22.0501 36 21.6001 36H14.4001C13.9501 36 13.5721 35.676 13.5001 35.244L12.8341 30.474C11.7001 30.024 10.7281 29.412 9.7921 28.692L5.3101 30.51C4.9141 30.654 4.4281 30.51 4.2121 30.114L0.612102 23.886C0.378102 23.49 0.486102 23.004 0.828102 22.734L4.6261 19.746C4.5541 19.17 4.5001 18.594 4.5001 18C4.5001 17.406 4.5541 16.812 4.6261 16.2L0.828102 13.266C0.486102 12.996 0.378102 12.51 0.612102 12.114L4.2121 5.886C4.4281 5.49 4.9141 5.328 5.3101 5.49L9.7921 7.29C10.7281 6.588 11.7001 5.976 12.8341 5.526L13.5001 0.756C13.5721 0.324 13.9501 0 14.4001 0H21.6001C22.0501 0 22.4281 0.324 22.5001 0.756L23.1661 5.526C24.3001 5.976 25.2721 6.588 26.2081 7.29L30.6901 5.49C31.0861 5.328 31.5721 5.49 31.7881 5.886L35.3881 12.114C35.6041 12.51 35.5141 12.996 35.1721 13.266L31.3741 16.2C31.4461 16.812 31.5001 17.406 31.5001 18ZM11.7001 18C11.7001 21.4794 14.5207 24.3 18.0001 24.3C21.4795 24.3 24.3001 21.4794 24.3001 18C24.3001 14.5206 21.4795 11.7 18.0001 11.7C14.5207 11.7 11.7001 14.5206 11.7001 18Z" fill="white"/>
          </svg>
        </div>
        <div className='LoremRect'>
          Lorem
        </div>
        <div className='LpsummRect'>
          Lpsum
        </div>
      </div>
    )
}
export default SideBar