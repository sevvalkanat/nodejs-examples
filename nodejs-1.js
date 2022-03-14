//Blog oluşturma 
//postlarımızı sıralayalım , sonrasında yeni bir post oluşturalım 
//ve yeni post ile birlikte postlarımızı tekrar sıralayalım

function postList(list) {
    return new Promise((resolve, reject) => {
        console.log("postlar yüklenmeye çalışılıyor..");
        if (list) {
            resolve("post verileri alındı");
        } else {
            reject("post verileri alınamadı");
        }
    });

}
function cleanPost(receivedPost) {
    return new Promise((resolve, reject) => {
        console.log("post verileri düzenleniyor");
        if (receivedPost) {
            resolve("post verileri düzenlendi");
        } else {
            reject("post verileri düzenlenemedi");
        }

    });

}
async function processPost() {
    try {
        const receivedPost = await postList(true);
        console.log(receivedPost);
        const cleanedPost = await postList(false)
        console.log(cleanedPost);
    } catch (error) {
        console.log(error);
    }
}
processPost()

const posts = [
    { name: "post 1", author: "Yazar 1" },
    { name: "post 2", author: "Yazar 2" },
    { name: "post 3", author: "Yazar 3" },
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.name);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts)
    });
    return promise1;
};

async function showPosts() {
    try {
        await addPost({ name: "post 9", author: "Yazar 9" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}
showPosts();