// Globals - No Window!!

// __dirname - path to current dir
// __filename - file name
// requre - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('callback fun');
}, 1000)