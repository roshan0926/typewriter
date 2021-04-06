const sentence = "hello there from lighthouse labs\n";

for (let i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  },50 * i);
};