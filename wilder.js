
const chalk = require("chalk")

const wilder = [
{
    name: "Nelson",
},
{
    name:"Clement",
},
{
    name:"Felix",
},
{
    name:"Nawfel",
},
]

console.log(chalk.cyan(`${wilder[0].name}`),chalk.red(`${wilder[1].name}`),chalk.green(`${wilder[2].name}`),chalk.blue(`${wilder[3].name}`))
