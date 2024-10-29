import React from "react";

function Post() {
  return (
    <div className="posts">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2024/10/GettyImages-2181599313.jpg?resize=1200,800"></img>
      </div>
      <div className="text">
        <h2>
          Vinod Khosla calls SB 1047 author ‘clueless’ and ‘not qualified’ to
          regulate the real dangers of AI
        </h2>
        <p className="info">
          <a href="" className="author">
            Me
          </a>
          <time datetime="">2024</time>
        </p>
        <p className="summary">
          Vinod Khosla said the author of California’s recently vetoed AI bill,
          SB 1047, was clueless about the real dangers of AI, and not qualified
          to have an opinion on global national security issues. The comment
          about state Senator Scott Wiener was made during an on-stage interview
          at TechCrunch Disrupt 2024. “He’s clueless about the real dangers,
          which are national security issues,” said Khosla, referring to Senator
          Wiener, who represents San Francisco in California’s legislature. “I’m
          a huge supporter of of him when it comes to his efforts on housing and
          NIMBYism and stuff. So huge supporter on those issues because they are
          local issues. This is a global national security issue. He’s not
          qualified to have an opinion there.”
        </p>
      </div>
    </div>
  );
}

export default Post;
