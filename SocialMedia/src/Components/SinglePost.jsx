import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from '../Store/Data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const SinglePost = () => {

  const { state, dispatch, setEditPost, setEditTitle, seteditIndex } = useContext(myContext)

  const [productData, setproductData] = useState('')
  const [isliked, setisliked] = useState(false);
  const [index, setindex] = useState(null);


  const router = useNavigate();

  const { id } = useParams()
  let PostId = id
  console.log(PostId, 'postId');

  const likesLength = productData.likes ? productData.likes.length : 0;

  const handleEdit = () => {
    seteditIndex(index)
    setEditTitle(productData.Title)
    setEditPost(productData.PostData)
    dispatch({ type: 'CREATE', payload: false })
    router('/')
  }

  const handleDelete = () => {
    dispatch({ type: "REMOVEPOST", payload: { inde: index } })
    toast.success('Post Deleted')
    router('/')
  }


  const handleLike = () => {
    setisliked((toggle) => !toggle)
    seteditIndex(index)
    console.log('LIKE');
    // console.log(productData.id, 'index');
    dispatch({ type: "LIKE", payload: { editIndex: index, userLiked: state.user.email, isliked: isliked } })
    setindex(null)
  }


  useEffect(() => {
    if (productData && productData.likes && productData.likes.includes(state.user.email)) {
      setisliked(true);
    } else {
      setisliked(false);
    }



    let indeeexxx = state.postData.findIndex(val => val.id === productData.id);
    setindex(indeeexxx)


    console.log(index, 'index'); //index not showing here but it updates
  }, [productData, state.user.email]);

  useEffect(() => {
    console.log(index, 'mainIndex');
  }, [index])




  useEffect(() => {
    let [SingleProduct] = state.postData.filter((data) => {
      return data.id == PostId;
    });
    console.log(state.postData, 'post');


    setproductData(SingleProduct);
    // setlikes(productData.likes)
  }, [PostId, state]);




  return (
    <div className=' h-[100vh] bg-gray-800 text-white flex pt-24 justify-center'>
      <div className=' h-96 w-[45%]'>
        <h2 className=' text-center text-4xl text-yellow-200'>{productData.Title}</h2>
        <p className=' pt-20 text-2xl text-justify leading-10'>{productData.PostData}</p>
        <p className=' pt-10 text-green-600 text-lg'>Likes : <span className=' text-yellow-200'>{likesLength}</span></p>

        <div className=' flex justify-between mt-40'>
          <button onClick={() => handleLike()} className='px-4 py-2 flex items-center rounded-md border  bg-white text-green-800'>Like</button>
          {productData.uploaderEmail == state.user.email &&
            <>
              <button onClick={handleDelete} className='px-4 py-2 flex items-center rounded-md  bg-red-600 text-white '>delete</button>
              <button onClick={handleEdit} className='px-4 py-2 flex items-center rounded-md border bg-yellow-300 text-green-700'>edit</button>
            </>
          }
          <button onClick={() => router('/')} className='px-4 py-2 flex items-center rounded-md borderbg-white bg-white text-green-800'>back</button>

        </div>
      </div>
    </div>
  )
}

export default SinglePost