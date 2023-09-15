import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useInsertDocument } from '../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const navigate = useNavigate();

  //context
  const { user } = useAuthContext()

  //hooks
  const { insertDocument, response } = useInsertDocument("posts")

  function handleSubmit(e) {
    e.preventDefault()
    setFormError("")

    // validate image
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  }



  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name="title" required placeholder='Pense num bom título ...' value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input type="text" name="image" required placeholder='Insira uma imagem que represente seu post' value={image} onChange={e => setImage(e.target.value)} />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea type="text" name="body" required placeholder='Insira o conteúdo do post' value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <label>
          <span>Tags:</span>
          <input type="text" name="tags" required placeholder='Insira as tags separadas por vírgula' value={tags} onChange={e => setTags(e.target.value)} />
        </label>
        {!response.loading && <button className="btn">Criar post</button>}
        {response.loading && (
          <button className="btn" disabled>Aguarde...</button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>


    </div>
  )
}

export default CreatePost