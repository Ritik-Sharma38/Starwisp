import './GlobalComponent.css'
import { useDispatch } from 'react-redux'
import { AddItemNotepad } from '../actions/authAction'

const Notepad = () => {
  const dispatch = useDispatch();
  const ListTitle =[
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
    {
      title:'Title',
      text: 'Lorem ipsum dolor sit am...'
    },
  ]
  const ListTitles = ListTitle.map((item, index)=>
    <div className='NotepadSubItem' key={index}>
      <div className="NoteItemTitle">{item.title}</div>
      <div className="NoteItemText">{item.text}</div>
    </div>
  )
  return(
    <>
      <div className='Notepad'>
        <div className='NotepadItem'>
          <ul>{ListTitles}</ul>
        </div>
      </div>
      <div className='NotepadText'>
        Notepad
      </div>
      <div className='Ellipse' ></div>
      <div className='EllipseText' onClick={()=> dispatch(AddItemNotepad(true))}>+</div>
    </>
  )
}
export default Notepad