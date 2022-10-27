const express = require('express')
var cors = require('cors')
const app= express()
const port= 8000


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
    console.log("request");
    res.json([
        {
            imgurl: "https://cyan-relieved-gopher.cyclic.app/flower.jpg",
            user: 'sambit',
            title: 'title one',
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dgshdjhasgdhsagdjsgahdgjsadgjh",
        },
        {
            user: 'malvika',
            title: 'title two',
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dgshdjhasgdhsagdjsgahdgjsadgjh",
        },
        {
            user: 'sukriti',
            title: 'title one',
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dgshdjhasgdhsagdjsgahdgjsadgjh",
        },
        {
            imgurl: "https://cyan-relieved-gopher.cyclic.app/flower.jpg",
            user: 'samim',
            title: 'title two',
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dgshdjhasgdhsagdjsgahdgjsadgjh",
        },
    ])
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`)})