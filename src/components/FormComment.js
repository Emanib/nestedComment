import React from 'react'
import ali from '../images/avatars/ali.webp'
export default function FormComment({ handleReply, label, initialText  = ""}) {
    const [value, setValue] = React.useState(initialText)
    const onSubmit = (e)=>{
      e.preventDefault()
        handleReply(value,null)
        setValue("")

    }
  return (
      <div className="card-comment comment">
          <div className='reply-input' >
              <div>
                  <img src={ali} alt="ali" />
              </div>
              <form onSubmit={onSubmit}>
              <div>
                      <input value={value} type="text" name="reply" id="reply" placeholder='Add Comment' className='input-reply' onChange={(e) => setValue(e.target.value)} />
              </div>
              <div>
                  <button className='btn-reply' type='submit'  >{label}</button>
              </div>
              </form>
          </div>
      </div> 
  )
}
