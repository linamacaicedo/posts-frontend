import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreatePost() {
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("https://posts-backend-beta.vercel.app/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imageUrl,
        title,
        description
      })
    })

    navigate("/")
  }

  return (
    <div style={{ 
      maxWidth: "500px", 
      margin: "60px auto", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ textAlign: "center" }}>Create Post</h1>

      <form 
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button 
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreatePost