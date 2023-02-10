import { data } from "./data";
import { useState } from "react";

function App() {
  const [post, setPost] = useState(data);

  return (
    <div>
      {post.map((item => {
        const {id, text} = item;
        return (
          <div key={id}>
            <p>{id} - {text}</p>
          </div>
        )
      }))}
      <button onClick={() => setPost([])}>Delete All</button>
    </div>
  )
}

export default App;