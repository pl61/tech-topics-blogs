const topics = {
  'ACID':['https://www.geeksforgeeks.org/acid-properties-in-dbms/'],
  'Agile':['https://www.youtube.com/watch?v=502ILHjX9EE'],
  'Agile vs Scrum':['https://www.guru99.com/agile-vs-scrum.html'],
  'Agile vs Waterfall':['https://www.guru99.com/waterfall-vs-agile.html'],
  'AJAX':[],
  'Anonymous Function':[],
  'API Design':[],
  'API Security':[],
  'Async':[],
  'Big O Notation':['https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/'],
  'Breadth-First vs Depth-First':['https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/'],
  'Cache':[],
  'Cache Eviction':[],
  'Call vs Apply':['https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply'],
  'CI/CD':['https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment'],
  'Class':[],
  'Client-Side vs Server-Side Rendering':[],
  'Closure':[],
  'Cloud Computing':[],
  'Cookie':[],
  'Cross-Browser Support':[],
  'Cross-Cutting Concern':['https://stackoverflow.com/questions/23700540/cross-cutting-concern-example'],
  'CRUD':['https://en.wikipedia.org/wiki/Create,_read,_update_and_delete'],
  'Currying':['https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400'],
  'Data vs Accessor Properties':['http://www.tuanhuynh.com/blog/2014/defineproperty-data-properties-and-accessor-properties/'],
  'Database Optimization':[],
  'Deferred Scripts':[],
  'DNS':[],
  'DOM':[],
  'Dynamic Programming':[],
  'ECMAScript':[],
  'Escapes':[],
  'Event Bubbling':[],
  'Event Handlers':[],
  'Event Loop':[],
  'For...In':['https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea'],
  'Function':[],
  'Functional Programming':[],
  'Functional vs Class Components':[],
  'Getter vs Setter':['https://javascript.info/property-accessors'],
  'Git':[],
  'Global Variables':[],
  'Higher Order Functions':[],
  'How the Web Works':['https://github.com/vasanthk/how-web-works'],
  'HTTP':[],
  'HTTPS':[],
  'ID vs Class':[],
  'Immutability':['https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310'],
  'Imperative Programming':[],
  'Ineritance':[],
  'innerText vs innerHTML':[],
  'Instantiation Patterns':[],
  'Iterable vs Enumerable':[],
  'Javascript Anti-Patterns':[],
  'Local Storage':[],
  'Monolithic vs Microservices':['https://medium.freecodecamp.org/monolith-vs-microservices-which-architecture-is-right-for-your-team-bb840319d531'],
  'MVC':[],
  'NaN':[],
  'Object':[],
  'Object Composition':[],
  'Object.seal vs Object.freeze':['https://stackoverflow.com/questions/21402108/difference-between-freeze-and-seal-in-javascript'],
  'OOP':['https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260'],
  'Performance Test':[],
  'Primary Key':[],
  'Primitive vs Reference':[],
  'Private Variables':[],
  'Procedural Pprogramming':[],
  'Programming Paradignms':[],
  'Prototype':[],
  'Pure Functions':[],
  'Read-Heavy vs Write-Heavy':[],
  'Regular Expression':[],
  'Relational vs Non-Relational':['https://medium.com/@zhenwu93/relational-vs-non-relational-databases-8336870da8bc'],
  'REST Interface Constraints':['http://exyus.com/articles/rest-the-short-version/'],
  'RESTful API':['https://restfulapi.net/'],
  'Scripting Language':[],
  'SEO':[],
  'Session Storage':[],
  'Side-Effects':[],
  'Software Development Cycle':[],
  'Sorting Algorithms':[],
  'SSH':[],
  'Stack Queues':[],
  'Stateful vs Stateless':[],
  'Static vs Dynamic Web Design':['http://www.spiderwriting.co.uk/static-dynamic.php'],
  'Strict Mode':[],
  'Target Property':[],
  'TCP':[],
  'TDD':['https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2'],
  'Terminal vs Shell vs Bash':[],
  'Testing':[],
  'this':[],
  'TLS':['https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/'],
  'Tree Traversal':[],
  'Two-Way Binding vs One-Way Flow':[],
  'type of null':['https://stackoverflow.com/questions/18808226/why-is-typeof-null-object'],
  'Typing':[],
  'Undeclared vs Undefined':[],
  'Web-Garden vs Web-Farm':[],
}

const keys = Object.keys(topics);

let str =
`## List of technical topics (mostly javascript) to study ##
Topic | Links
-|-
`;

for (let i = 0; i < keys.length; i += 1) {
  let links = '';
  const topic = topics[keys[i]]

  if (topic.length) {
    for (let j = 0; j < topic.length; j += 1) {
      links += ` [(${j + 1})](${topic[j]})`
    }
  }

  links += '\n';

  str += `${keys[i]} | ${links}`;
}

document.getElementById('output').innerText = str;