import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Melodiya",
            artist: "Psalm Trees, FloFliz",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16060"
        },
        {
            name: "Soul Samba",
            artist: "Screen Jazzmaster, Zmeyev",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16063"
        },
        {
            name: "Black Sands",
            artist: "ODYSSEE",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16072"
        },
        {
            name: "Minus Five in Moscow",
            artist: "Psalm Trees, ALEXANDER",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16074"
        },
        {
            name: "Cruising",
            artist: "Evil Needle",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-150x150.jpg",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://chillhop.com/?spotifylogin"
        }
    ];
}


export default chillHop;
