import Comment from "./Comment";
const commentsData = [
  {
    name: "Gourav Parmar",
    text: "You should get an Oscar for this performance, honestly!",
    replies: [
      {
        name: "Divyansh",
        text: "Oscar-worthy indeed!",
        replies: [
          {
            name: "Gourav Parmar",
            text: "Totally agree! This was amazing!",
            replies: [
              {
                name: "Divyansh",
                text: "Oscar-worthy indeed!",
              },
              {
                name: "Jane Soni",
                text: "It deserves all the awards!",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priyanshi Parmar",
    text: "Incredible content as always! You never disappoint.",
    replies: [
      {
        name: "Gourav Parmar",
        text: "Absolutely! The quality just keeps getting better!",
        replies: [
          {
            name: "Divyansh",
            text: "For real, every video blows my mind!",
            replies: [
              { name: "Priyanshi Parmar", text: "I’m with you on that!" },
              { name: "Jane Soni", text: "Same here! So much talent!" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Disha Parmar",
    text: "This was like the roller coaster ride of entertainment. Ups, downs, and everything in between!",
    replies: [
      {
        name: "Divyansh",
        text: "That was a perfect description! Roller coasters have nothing on this!",
        replies: [
          {
            name: "Gourav Parmar",
            text: "Literally! It was all over the place and I loved it!",
          },
          {
            name: "Priyanshi Parmar",
            text: "I’m still trying to catch my breath from laughing!",
          },
        ],
      },
    ],
  },
  {
    name: "Jane Soni",
    text: "Whoever edited this deserves a standing ovation. That was cinematic genius!",
    replies: [
      {
        name: "Rudra Sharma",
        text: "I couldn’t agree more! The editing is next-level.",
        replies: [
          {
            name: "Gourav Parmar",
            text: "It’s like they’ve mastered the art of storytelling through editing.",
            replies: [
              { name: "Disha Parmar", text: "I wish I could edit like that!" },
              { name: "Divyansh", text: "It’s a true work of art!" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "John Patel",
    text: "I need to know what kind of magic you’re using to make such awesome content!",
    replies: [
      {
        name: "Rudra Sharma",
        text: "Honestly, it’s like wizardry, I need to know their secret!",
        replies: [
          {
            name: "Divyansh",
            text: "I think they have a magic wand for creating content!",
          },
          {
            name: "Priyanshi Parmar",
            text: "We need the behind-the-scenes tutorial, ASAP!",
          },
        ],
      },
    ],
  },
  {
    name: "Rudra Sharma",
    text: "I watched this while eating and almost choked from laughing. Worth it.",
    replies: [
      {
        name: "Gourav Parmar",
        text: "Happens every time! Their content always has me in stitches.",
        replies: [
          {
            name: "Rudra Sharma",
            text: "I’ve learned to pause before laughing too hard!",
          },
          {
            name: "Jane Soni",
            text: "I nearly spilled my drink from laughing!",
          },
        ],
      },
    ],
  },
  {
    name: "Rashi Panwar",
    text: "I came for the content, but stayed for the vibes. You have the best energy!",
    replies: [
      {
        name: "John Patel",
        text: "That’s the secret! The energy is everything!",
        replies: [
          { name: "Divyansh", text: "Seriously, they have the best vibes!" },
          { name: "Disha Parmar", text: "That’s why I keep coming back!" },
        ],
      },
    ],
  },
  {
    name: "Vikram Shah",
    text: "I didn’t expect to enjoy this as much as I did! Amazing!",
    replies: [
      {
        name: "Jane Soni",
        text: "I think that’s how everyone feels! Total surprise hit!",
        replies: [
          {
            name: "Gourav Parmar",
            text: "You never know what to expect, and that's the fun part!",
          },
          { name: "Rudra Sharma", text: "It’s always better than you expect!" },
        ],
      },
    ],
  },
  {
    name: "Meera Mehta",
    text: "Pure gold! This is exactly what I needed today.",
    replies: [
      {
        name: "Divyansh",
        text: "This is literally the highlight of my day, Meera!",
        replies: [
          {
            name: "Priyanshi Parmar",
            text: "Same! It turned my entire mood around.",
          },
          { name: "Jane Soni", text: "I can’t wait to watch it again!" },
        ],
      },
    ],
  },
  {
    name: "Arjun Kapoor",
    text: "I didn’t even realize how much I needed to laugh today until I saw this!",
    replies: [
      {
        name: "Rashi Panwar",
        text: "Right? I felt so down before this, but now I’m smiling non-stop!",
        replies: [
          { name: "John Patel", text: "Laughter is the best medicine!" },
          {
            name: "Ravi Sharma",
            text: "That’s exactly what this video did for me!",
          },
        ],
      },
    ],
  },
  {
    name: "Ananya Singh",
    text: "This should be a movie! It’s so good!",
    replies: [
      {
        name: "Jane Soni",
        text: "I could totally watch a feature film of this. It would be legendary!",
        replies: [
          { name: "Divyansh", text: "It’s a cinematic experience for sure!" },
          {
            name: "Rudra Sharma",
            text: "I agree! This content deserves to be seen on the big screen!",
          },
        ],
      },
    ],
  },
];
const CommentList = ({ comments}) => {
 return(
    <div>
        {comments.map((comment)=>{
           return (<div><Comment data={comment}/>
           <div>
           {comment.replies && comment.replies.length > 0 && (
              <div className="ml-4 pl-2 border border-l-black">
                <CommentList comments={comment.replies} />
              </div>
            )}
            </div></div>)
        })}
    </div>
 )
};
const CommentsContainer = () => {
  return (
    <div className="xl:w-[70%] lg:w-[73%] w-full mt-8">
      <div className="font-bold text-xl text-gray-800">Comments:</div>
      {/* <Comment data={comments[0]}/> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
