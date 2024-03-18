import React, { useContext } from 'react'
import Post from './Post'
import { myContext } from '../Store/Data'
import DummyPost from './DummyPost'

const AllPost = ({ searched }) => {

  const { state } = useContext(myContext)

  let dummyDataArr = [
    { PostData: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.", Title: "All he wanted was a candy bar", id: 1, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.", Title: " One can cook on and with an open fire.", id: 2, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he  delude himself into believing.", Title: "It wasn't quite yet time to panic.", id: 3, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.", Title: "The paper was blank.", id: 4, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.", Title: "She wanted rainbow hair.", id: 5, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.", Title: "There was only one way to do things in the Statton house.", id: 6, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.", Title: "Things aren't going well at all", id: 7, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it.", Title: "Ten more steps.", id: 8, likes: [], uploaderEmail: "gfg@gmail.com" },

    { PostData: "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.", Title: "She has seen this scene before.", id: 9, likes: [], uploaderEmail: "gfg@gmail.com" },

  ]

  const data = state?.postData;
  console.log(data, 'fdafadfsafsafsdfsfsfasdfdfd gagagagaggg');

  return (
    <>
      <div className='postaligning grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {data.length ?
          data.map((data, index) => (
            data?.Title?.includes(searched) && <Post key={index} data={data} index={index} />
          ))
          :
          dummyDataArr.map((data, index) => (
            data?.Title?.includes(searched) && <DummyPost key={index} data={data} index={index} />
          ))
        }
      </div>


    </>
  )
}

export default AllPost