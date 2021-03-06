const topics = {
  'ACID':['https://www.geeksforgeeks.org/acid-properties-in-dbms/'],
  'Agile':['https://www.youtube.com/watch?v=502ILHjX9EE'],
  'Agile vs Scrum':['https://www.guru99.com/agile-vs-scrum.html'],
  'Agile vs Waterfall':['https://www.guru99.com/waterfall-vs-agile.html'],
  'AJAX':[],
  'Anonymous Function (JS)':[],
  'API Design':[],
  'API Security':[],
  'Async':[],
  'Big O Notation':['https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/'],
  'Breadth-First vs Depth-First':['https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/'],
  'Cache':[],
  'Cache Eviction':[],
  'Call vs Apply (JS)':['https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply'],
  'CI/CD':['https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment'],
  'Class':[],
  'Client-Side vs Server-Side Rendering':['https://medium.com/@benjburkholder/javascript-seo-server-side-rendering-vs-client-side-rendering-bc06b8ca2383'],
  'Closure (JS)':['https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4'],
  'Cloud Computing':[],
  'Cookie':[],
  'Cross-Browser Support':[],
  'Cross-Cutting Concern':['https://stackoverflow.com/questions/23700540/cross-cutting-concern-example'],
  'CRUD':['https://en.wikipedia.org/wiki/Create,_read,_update_and_delete'],
  'Currying (JS)':['https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400'],
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
  'Event Loop (JS)':[],
  'For...In (JS)':['https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea'],
  'Function':[],
  'Functional Programming':[],
  'Functional vs Class Components':[],
  'Getter vs Setter (JS)':['https://javascript.info/property-accessors'],
  'Git':[],
  'Global Variables':[],
  'Higher Order Functions':[],
  'How the Web Works':['https://github.com/vasanthk/how-web-works'],
  'Horizontal vs Vertical Scaling':['http://blakesmith.me/2012/12/08/understanding-horizontal-and-vertical-scaling.html'],
  'HTTP':[],
  'HTTPS':[],
  'ID vs Class (HTML)':['https://css-tricks.com/the-difference-between-id-and-class/'],
  'Immutability':['https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310'],
  'Imperative Programming':[],
  'Ineritance':[],
  'innerText vs innerHTML (JS)':[],
  'Instantiation Patterns':[],
  'Iterable vs Enumerable':[],
  'Javascript Anti-Patterns (JS)':[],
  'Keys (DBMS)':['https://www.guru99.com/dbms-keys.html'],
  'Local Storage':[],
  'Monolithic vs Microservices':['https://medium.freecodecamp.org/monolith-vs-microservices-which-architecture-is-right-for-your-team-bb840319d531'],
  'MVC':[],
  'NaN':[],
  'Object':[],
  'Object Composition':[],
  'Object.seal vs Object.freeze (JS)':['https://stackoverflow.com/questions/21402108/difference-between-freeze-and-seal-in-javascript'],
  'OOP':['https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260'],
  'Performance Test':[],
  'Primitive vs Reference':[],
  'Private Variables (JS)':[],
  'Procedural Pprogramming':[],
  'Programming Paradignms':[],
  'Prototype':[],
  'Pure Functions':[],
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
  'this (JS)':[],
  'TLS':['https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/'],
  'Tree Traversal':[],
  'Two-Way Binding vs One-Way Flow':[],
  'type of null (JS)':['https://stackoverflow.com/questions/18808226/why-is-typeof-null-object'],
  'Typing':[],
  'Undeclared vs Undefined (JS)':[],
  'Web-Garden vs Web-Farm':[],
}

const keys = Object.keys(topics);

let str =
`## List of technical topics (mostly javascript) and resources ##
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