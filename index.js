const axios = require("axios");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter GitHub username: ", async (username) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        const repos = response.data.map((repo) => repo.name);

        fs.writeFileSync(`${username}.txt`, repos.join("\n"));

        console.log("Repositories saved successfully.");
    } catch (err) {
        console.log("User not found or an error occurred.");
    }

    rl.close();
});