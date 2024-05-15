const supportedTopics = ['HTML', 'CSS', 'Git', 'JavaScript']

const topic = 'HTML';

if (supportedTopics.includes(topic)) console.log(`Let's study ${topic}!`);
else console.log('Please try again!');

supportedTopics.forEach((topic) => console.log(topic));
