import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../Store/Data';
import { useNavigate } from 'react-router-dom';

const DummyPost = ({ data, index }) => {

  // const { state, dispatch, setEditPost, setEditTitle, seteditIndex } = useContext(myContext)

  const [isliked, setisliked] = useState(false);
  const router = useNavigate();

  console.log(data, 'fdasfdsfsfsdfafassdfs fsdfds fsdf asdfsd fasdf dfData');

  // useEffect(() => {
  //   // Check if the current user has already liked the post
  //   if (data.likes.includes(state.user.email)) {
  //     setisliked(true);
  //   } else {
  //     setisliked(false);
  //   }
  // }, [data.likes, state.user.email]);

  // const handleEdit = () => {
  //   seteditIndex(index)
  //   setEditTitle(data.Title)
  //   setEditPost(data.PostData)
  //   dispatch({ type: 'CREATE', payload: false })
  // }


  const handleLike = () => {
    setisliked((toggle) => !toggle)
  }

  console.log(data.likes.length, 'likes');
  console.log(isliked);






  console.log(data, 'lalalalala');
  return (
    <div className="card card3   " >
      <div className="card-body fixing addShadow">
        <h5 className="card-title h-25 text-lg font-bold text-gray-700">{data.Title}</h5>
        <p className="card-text text-md description">{data.PostData}</p>
        <p className=' text-green-600 text-lg'>{isliked ? 1 : 0} Likes</p>
        <div className=' flex justify-around'>
          <button onClick={() => handleLike()} className='px-4 py-2 flex items-center rounded-md border  text-slate-600 border-gray-500' >Like</button>
          <button onClick={() => router(`singlePostDummy/${data.id}`)} className='px-4 py-2 flex items-center rounded-md border bg-slate-600 text-white border-gray-500' >view</button>
        </div>
      </div>
    </div>
  )
}

export default DummyPost