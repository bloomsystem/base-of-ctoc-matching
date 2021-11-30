
export const fetchPost = async (id: number|string|string[]|undefined) => {
    const res = await fetch(`/api/posts/${id}`)
    return res.json()
}

export const fetchPosts = async () => {
    const res = await fetch("/api/posts")
    return res.json()
}

export const createPost = async (form: BodyInit | null | undefined) => {
    const res = await fetch("/api/posts", {
        method: "POST",
        body: form,
    })
};