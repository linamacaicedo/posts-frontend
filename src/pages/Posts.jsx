import { useEffect, useState } from "react"

function Posts() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch("https://posts-backend-beta.vercel.app/posts")
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    await fetch(`https://posts-backend-beta.vercel.app/posts/${id}`, {
      method: "DELETE"
    })
    fetchPosts()
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "42px",
          color: "#fffefe"
        }}
      >
        Posts
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px"
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "18px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <h2 style={{ marginTop: "15px", color: "#222" }}>
              {post.title}
            </h2>

            <p style={{ color: "#555" }}>
              {post.description}
            </p>

            <button
              onClick={() => handleDelete(post.id)}
              style={{
                marginTop: "auto",
                padding: "10px",
                backgroundColor: "#111",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts