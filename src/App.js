import './App.css';
import Card from './components/Card';
import FormComment from './components/FormComment';
import { useEffect, useState } from 'react';
import { getComments } from './api'
function App() {
 
  const [dataComment, setComments]= useState([])
   const [activeComment ,setActiveComments] = useState({})
   useEffect(  ()=>{
   getComments().then((comments)=>{
   setComments(comments)
 })

   },[])
  const handleReply = (value, parentId)=>{
    console.log(value, parentId)
    setComments((prev) => [{
      id: Math.random().toString(36).substring(2, 9),
      body: value,
      parentId,
      userId: "3",
      username: "Eman",
      createdAt: new Date().toISOString(),
}, ...prev])
 setActiveComments(null)
  }
  const updateComment = (text, commentId)=>{
   const updateComments=  dataComment.map((comment)=>{
  if(comment.id === commentId){
    return {...comment, body:text }
  }
  return comment
 })
    setComments(updateComments)
  setActiveComments(null)
  }
 const deleteComment = (commentId)=> setComments(dataComment.filter((comment)=> comment.id !== commentId))
  const rootComments = dataComment.filter((rootComment) => rootComment.parentId ===null)
  const getReplies = (commentId)=>{
    return dataComment.filter((comment) => comment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date (b.createdAt).getTime)
  }

  return (
    <div className="App">
    
      {rootComments?.map((rootComment) => <Card  key={rootComment.id} comment={rootComment} 
      replies={getReplies(rootComment.id)} currentUserId="3" username={rootComment.username}  
      activeComment = {activeComment}  
        deleteComment={deleteComment}
        updateComment={updateComment}
        setActiveComments={setActiveComments}
        handleReply={handleReply}
        /> )  }
      <FormComment handleReply={handleReply} label={"Send"} />


    </div>
  );
}

export default App;
