import React, { createContext, useEffect, useReducer, useState } from 'react'
import toast from 'react-hot-toast';

export const myContext = createContext();

const postDatamain = () => {
  let AllData = JSON.parse(localStorage.getItem('myPost'))
  if (AllData) {
    return AllData;
  }
  else return []

}

const currentUSER = () => {
  let user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) {
    return user
  }
  else return {}
}

const initialVal = { postClicked: true, postData: postDatamain(), user: currentUSER() }

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return { ...state, postClicked: action.payload }

    case 'SHOW':
      return { ...state, postClicked: action.payload }

    case 'LOGIN':
      return { ...state, user: action.payload }

    case 'LIKE':
      if (action.payload.editIndex != null) {
        if (!state.user || !state.user.email) {
          toast.error('Login First');
      return state
    }
        const postDataCopy = [...state.postData];
        console.log(postDataCopy, 'llllllllllllllllllllll');
        console.log(postDataCopy[action.payload.editIndex], '22222222222222222222');

        if (!postDataCopy[action.payload.editIndex].likes.includes(action.payload.userLiked)) {
          postDataCopy[action.payload.editIndex] = {
            ...postDataCopy[action.payload.editIndex],
            likes: [...postDataCopy[action.payload.editIndex].likes, action.payload.userLiked]
          }
          // toast.success('Liked')
          console.log('Krishna');
        }
        else if (action.payload.isliked == true) {
          console.log('hare ram');
          let obje = postDataCopy[action.payload.editIndex]
          console.log(obje, ' obje');
          obje = {
            ...obje,
            likes: obje.likes.filter(users => users != action.payload.userLiked)
          }
          console.log(obje, ' obje2');
          postDataCopy[action.payload.editIndex] = obje;
          // localStorage.setItem('myPost', JSON.stringify(postDataCopy))

        }

        console.log(postDataCopy, 'cpot');
        // state.postData = postDataCopy;
        return { ...state, postData: postDataCopy };
      }
      return state

    case 'LOGOUT':
      localStorage.removeItem('currentUser')
      toast.success('User Logged Out')
      return { ...state, user: {} }

    case 'ADDPOST':
      if (action.payload.editIndex != null) {
        const postDataCopy = [...state.postData];
        console.log(postDataCopy, 'llllllllllllllllllllll');
        postDataCopy[action.payload.editIndex] = { ...postDataCopy[action.payload.editIndex], Title: action.payload.Title, PostData: action.payload.PostData, uploaderEmail: action.payload.user.email, likes: [action.payload.PostData.likes] }

        console.log(postDataCopy, 'cpot');
        toast.success('Post Edited')

        // state.postData = postDataCopy;
        return { ...state, postData: postDataCopy };
      }
      toast.success('Post Uploaded')
      return { ...state, postData: [...state.postData, { Title: action.payload.Title, PostData: action.payload.PostData, uploaderEmail: action.payload.user.email, likes: [], id: Date.now() }] };

    case 'REMOVEPOST':
      const postDataCurent = state.postData;
      const removedData = postDataCurent.filter((_, index) => {
        return index !== action.payload.inde
      })

      return { ...state, postData: removedData };


    default:
      break;
  }
}




const Data = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const [editIndex, seteditIndex] = useState(null)
  const [EditTitle, setEditTitle] = useState('')
  const [EditPost, setEditPost] = useState('')



  useEffect(() => {
    if (state.postData) {
      localStorage.setItem('myPost', JSON.stringify(state.postData))
    }
  }, [state.postData])


  useEffect(() => {
    postDatamain();
    currentUSER();
  }, [])

  console.log(state.user, 'yoyoyoyoyoyoyoyoyyoyo');
  return (
    <myContext.Provider value={{ state, dispatch, setEditPost, setEditTitle, seteditIndex, editIndex, EditTitle, EditPost }}>
      {children}
    </myContext.Provider>
  )
}

export default Data