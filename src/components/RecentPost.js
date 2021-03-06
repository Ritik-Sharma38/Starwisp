import React, { useState } from 'react'

const RecentPost = () => {
    const [currentPost, setCurPost]=useState('')
    const [refresh, setRefresh]=useState(false)
    const [Posts, setPosts]=useState(
      [
        {
          Name:"Teacher",
          Time: '12:40pm',
          allowComment: true,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
          Name:"Student",
          Time: '12:40pm',
          allowComment: false,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
        },
        {
          Name:"Student",
          Time: '12:40pm',
          allowComment: false,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
        },
        {
          Name:"Student",
          Time: '12:40pm',
          allowComment: false,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
        }, 
      ]
    )
    const UpdatePost = () => {
      var data = {
        Name: "Teacher",
        Time: '12:40pm',
        allowComment: true,
        text: currentPost,
      }
      Posts.unshift(data)
      setRefresh(refresh?false:true)
    }
    const PostsItem = Posts.map((item, index)=>
      <div className="RecentPostContainer" key={index}>
        <div className="RecentPostSubContainer">
          <div className="UserImageContainer"></div>
          <div className="TextContainer">
            <div className="PostNameDate">
              <div className="Teacher">{item.Name}</div> 
              <div className="Date">{item.Time}</div> 
            </div>
            <div className="CommentText">{item.text}</div>
          </div>
        </div>
        {item.allowComment && (
          <div className="CommentContainer">
            <div className="CommentUserProfile"></div>
            <div className="Comment">Write a comment</div>
            <div className="SendIcon">
              <div className="SendIconV1">
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.536174 11.2795C0.222442 11.4093 0.0123621 11.7184 0.000297648 12.0676C-0.0117101 12.417 0.176733 12.7408 0.480723 12.8932L10.4804 17.9102L27.7931 0.000981569L0.536174 11.2795Z" fill="#733D47"/>
                </svg>
              </div>
              <div className="SendIconV2">
                <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.6875 18.1577L5.53729 28.5023C5.6803 28.8074 5.97897 28.9999 6.30488 28.9999C6.31502 28.9999 6.3251 28.9997 6.33535 28.9993C6.67304 28.9868 6.97182 28.7695 7.09734 28.445L18.0001 0.248368L0.6875 18.1577Z" fill="#733D47"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    )
    return(
      <>
      <div>
        <div className='NewPost'></div>
        <textarea className='SearchBox'
            type="message" 
            onChange={e => setCurPost(e.target.value)}
            placeholder="Share something with your class..."
            col='5'
            >
        </textarea>
        <div className='CancelButton'>
          <div onClick={()=> setCurPost('')} className='CancelText'>Cancel</div>
        </div>
        <div className='ShareEcllipse'>
          <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7613 2.46928C22.3143 -0.823093 16.7055 -0.823093 13.2583 2.46928L1.8045 13.4098C-0.6015 15.7081 -0.6015 19.4475 1.8045 21.7457C4.21033 24.0436 8.12524 24.0436 10.5315 21.7457L21.9854 10.8048C23.3502 9.5009 23.3502 7.37957 21.9854 6.07614C21.3243 5.44452 20.4452 5.09661 19.5101 5.09661C18.5751 5.09661 17.696 5.44442 17.0347 6.07603L7.46791 15.2139C7.14348 15.5237 7.14348 16.0261 7.46791 16.336C7.79228 16.6458 8.31827 16.6458 8.64264 16.336L18.2093 7.19816C18.5568 6.86627 19.0189 6.68353 19.5101 6.68353C20.0014 6.68353 20.4632 6.86622 20.8105 7.19816C21.5276 7.88298 21.5276 8.99765 20.8105 9.68274L9.35689 20.6235C7.59848 22.3029 4.73754 22.3028 2.97934 20.6236C1.22109 18.9442 1.22115 16.2114 2.97934 14.5319L14.4331 3.5914C17.2325 0.917741 21.7875 0.917688 24.5867 3.59135C25.9428 4.88664 26.6896 6.60875 26.6896 8.4405C26.6897 10.2723 25.9428 11.9945 24.5867 13.2897L15.0202 22.4276C14.6958 22.7375 14.6958 23.2398 15.0202 23.5496C15.1824 23.7046 15.395 23.782 15.6076 23.782C15.8202 23.782 16.0328 23.7046 16.1949 23.5496L25.7613 14.4117C27.4312 12.8168 28.3509 10.6961 28.3508 8.44039C28.3508 6.18483 27.4313 4.06419 25.7613 2.46928Z" fill="#FF6C40"/>
          </svg>
        </div>
        <button type='button'  onClick={()=> UpdatePost()} className='ShareContainer'>
          <div className='ShareText'>Share</div> 
        </button>
        <div className='ShareButtonDropdown'>
          <svg width="17" height="7" viewBox="0 0 17 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13354 1L8.22124 5L15.3089 1" stroke="#FF6C40" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          
        </div>
          
      </div>
      <section className="Post">
        <ul>{PostsItem}</ul>
      </section>
      </>
    )
}

export default RecentPost