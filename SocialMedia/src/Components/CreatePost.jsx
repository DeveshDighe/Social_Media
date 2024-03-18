import React, { useContext, useState } from 'react'
import { myContext } from '../Store/Data'
import toast from 'react-hot-toast'

const CreatePost = () => {

  const { state, dispatch, editIndex, EditTitle, EditPost, setEditPost, setEditTitle, seteditIndex } = useContext(myContext)

  // seteditIndex(null)
  setEditTitle('')
  setEditPost('')

  const [Title, setTitle] = useState(EditTitle || '')
  const [PostData, setPostData] = useState(EditPost || '')

  console.log(state, 'kakakakaka');
  console.log(state.user, 'hahahahahahah');




  const handleSubmit = (e) => {
    e.preventDefault();

    if (PostData.length < 80) {
      return toast.error('more than 80 letters')
    }
    if (PostData.length > 555) {
      return toast.error('lesser than 147 letters')
    }
    if (Object.keys(state.user).length == 0) {
      return toast.error('Login First')
    }
    dispatch({ type: "ADDPOST", payload: { Title, PostData, editIndex, user: state.user, id: state.postData.length } });
    dispatch({ type: 'SHOW', payload: true })
    console.log(Title, 'fafafafaf');
    setTitle('');
    setPostData('');
  }

  return (
    <form onSubmit={handleSubmit} className=' py-8'>
      <div className=' w-[70%] border border-red-900 m-auto'>
        <div className="mb-3 mt-2">
          <input type="text" className="Title" id="exampleInputEmail1" aria-describedby="emailHelp" value={Title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' maxLength={80} minLength={10} />
        </div>
        <div className="mb-3">
          <div className="TextAreaHeight ">
            <textarea className={`TextAreaHeight border`} placeholder="About Post" id="floatingTextarea" value={PostData} onChange={(e) => setPostData(e.target.value)} ></textarea>
          </div>
        </div>
        {state.user && Object.keys(state.user).length == 0 && <p className='loginWarn'>Login before creating post</p>}
        <div className=' flex items-center justify-center '>
          <button type="submit" className=" py-2 px-4 rounded-md text-white bg-blue-600">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default CreatePost