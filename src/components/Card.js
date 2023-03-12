import React from 'react'
import Eman from '../images/avatars/eman.png'
import ReplyIcon from './Reply'
import Counter from './Counter'
import FormComment from './FormComment'
export default function Card({ setReply, comment, replies, deleteComment,currentUserId, setActiveComments, activeComment, handleReply, updateComment }) {
  const isReplied = activeComment && activeComment.id === comment.id && activeComment.type === "replying"
  const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing"
  const parentId = comment.parentId ? comment.parentId:comment.id

  return (
    <div className='container'>
         
    <div className='card-comment'>
              <div>
                  <Counter />
              </div>
        <div> 
        <div className='header-person'> 
        <div className='info-person' > 
        <img src={Eman} alt="eman" />
              <h4> {comment.username}</h4>
              <p>{comment.createdAt} </p>
              
          </div>
            { currentUserId !== comment.userId   &&<div className='reply' onClick = {()=>setActiveComments({id:comment.id, type:"replying"})}  > 
                  <ReplyIcon />
                  <h4> Reply</h4>
          </div>}
  { comment.userId  ===currentUserId &&       
              <div className='actions-button'>
                <h4 onClick={() => setActiveComments({ id: comment.id, type: "editing" })} > Edit</h4>
                <h4 onClick={() => deleteComment(comment.id)}  > Delete</h4>
          </div>}
          </div>
            
          <div className='post-info' > 
            {isEditing?  <FormComment label= "update"  initialText =  {comment.body}  handleReply = {(text)=> updateComment(text, comment.id)}   />   :  <p className='post'>{comment.body}</p>}
          </div>
              </div>
   
    </div>
      {isReplied && <FormComment label="reply" handleReply={(text) => handleReply(text, parentId)}  /> }
      <div className="replies">
        {replies.length > 0 ? replies.map((comment) => <Card comment={comment} key={comment.id} replies={[]} setReply={setReply} currentUserId={currentUserId} 
        updateComment= {updateComment}  
        activeComment= {activeComment}
        deleteComment ={deleteComment}
        setActiveComments={setActiveComments}
          handleReply={handleReply}
        />) : null}
      </div> 
      </div>
  )
}
