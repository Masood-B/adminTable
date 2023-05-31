let products = [
    {
    id: 1,
    picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
    name:"Monster Musume no Iru Nichijou",
    price:"R 399",
    },
    {
    id: 2,
    picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
    name: "No Game No Life",
    price:"R 499",
    },
    {
    id: 3,
    picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
    name:"Yuragi-sou no Yuuna-san",
    price:"R 299",
    },
    {
    id: 4,
    picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
    name:"Saikin Yatotta Maid ga Ayashii",
    price:"R 399",
    },
    {
    id: 5,
    picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
    name:"Mato Seihei no Slave",
    price:"R 299",
    }
]
// Name, Price, Image, Add and Delete



// let table = document.querySelector("section#admin .row:last-child")
let table = document.querySelector("#data")
// products.forEach((buyer)=>{
//     table.innerHTML += `
//     <table>
//     <thead class="header">
//     <th>Name</th>
//     <th>Price</th>
//     <th>Image</th>
//     <th>Add</th>
//     <th>Delete</th>
//     </thead>
//     <tbody class="table">
//     <td>${buyer.name}</td>
//     <td>${buyer.price}</td>
//     <td><img src="${buyer.picture}" alt="${buyer.name}" loading="lazy"></td>
//     <td><button>add</button></td>
//     <td><button>delete</button></td>
//     </table>
//     `
// })
products.forEach((buyer)=>{
    table.innerHTML += `
    <tr>
        <td>${buyer.name}</td>
        <td>${buyer.price}</td>
        <td><img src="${buyer.picture}" alt="${buyer.name}" loading="lazy"></td>
        <td><button>add</button></td>
        <td><button>delete</button></td>
    </tr>
    `
})
