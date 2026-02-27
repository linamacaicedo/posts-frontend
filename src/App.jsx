import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Posts from "./pages/Posts"
import CreatePost from "./pages/CreatePost"

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Posts</Link> |{" "}
          <Link to="/create">Create Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App