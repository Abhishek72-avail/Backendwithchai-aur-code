import express from "express";

const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//get  a list of 5 jokes id  content jokes add one title


app.get("/api/jokes", (req, res) => {
    res.json([
        {
            id: 1,
            title : "Joke 1",
            content: "Why did the tomato turn red? Because it saw the salad dressing!",
        },
        {
            id: 2,
            title : "Joke 2",
            content: "Why did the chicken cross the playground? To get to the other slide!",
        },
        {
            id: 3,
            title : "Joke 3",
            content: "Why don't scientists trust atoms? Because they make up everything!",
        },
        {
            id: 4,
            title : "Joke 4",
            content: "Why did the bicycle fall over? Because it was two-tired!",
        },
        {
            id: 5,
            title : "Joke 5",
            content: "Why did the cookie go to the doctor? Because it was feeling crummy!",
        },
    ]);

}); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    
    console.log("Example app listening on port 3000");
})