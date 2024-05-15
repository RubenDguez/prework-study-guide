const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics we learned through Prework:')
topics.forEach((topic) => console.log(topic));

console.log('Which topic should we study first?');
console.log(`Let's study ${randomTopic}`);
