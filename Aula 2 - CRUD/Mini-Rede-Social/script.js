// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

const pessoa = {
    nome: "Eduardo",
    idade: 18,
    "Cidade Natal": "São Paulo",
    isAdmin: true
}

window.onload = function(){
    showPosts();
    document.querySelector("#postForm").addEventListener("submit", addPost)
}

//CREATE
function addPost(evento) {
    evento.preventDefault();

    // Captura os dados da postagem
    const postText = document.querySelector("#postText").value;
    const postCategory = document.querySelector("#postCategory").value
    const postImage = document.querySelector("#postImage").value;
    const postData = new Date().toLocaleString()

    // Cria um objeto com os dados capturados da postagem
    const newPost = {
        text: postText,
        category: postCategory,
        image: postImage,
        date: postData
    }

    // Adiciona no começo da lista de posts
    posts.unshift(newPost);
    showPosts()
}

//READ
function showPosts() {
    // Pega o elemento HTML do espaço da lista de posts
    const postList = document.querySelector("#postList");
    // Deixa o espaço de posts vazio
    postList.innerHTML = '';

    // Para cada item no array "posts", cria um post
    posts.forEach(post => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card-post");

        if (post.image) {
            cardPost.innerHTML = `
            <h2>${post.text}</h2>
            <img src=${post.image}>
            <p>Categoria: ${post.category}</p>
            <p>Data e Hora: ${post.date}</p>
            `
        } else {
            cardPost.innerHTML = `
            <h2>${post.text}</h2>
            <p>Categoria: ${post.category}</p>
            <p>Data e Hora: ${post.date}</p>
            `     
        }

        // Adiciona o post no HTML
        postList.appendChild(cardPost);
    })
}

//UPDATE
function editPost() {

}

//DELETE
function deletePost() {
    
}