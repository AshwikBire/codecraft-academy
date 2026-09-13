/* =========================================================
   CODECRAFT ACADEMY — CERTIFICATION ASSESSMENT ENGINE
   45 Python questions (50 marks) + 45 SQL questions (50 marks)
   Pass mark: > 40 / 50 in EACH section. 3 attempts total.
   ========================================================= */

/* ---------------- QUESTION BANK: PYTHON (45) ---------------- */
const PY_QUESTIONS = [
  // Variables & Data Types
  {id:'py1', topic:'Variables', type:'mcq', q:'Which function returns the data type of a variable in Python?', options:['type(x)','typeof(x)','vartype(x)','x.type()'], a:0},
  {id:'py2', topic:'Variables', type:'mcq', q:'What is the data type of the value True in Python?', options:['str','int','bool','float'], a:2},
  {id:'py3', topic:'Variables', type:'mcq', q:'Which of these is a valid Python variable name?', options:['2value','_value','value-2','value 2'], a:1},
  // Operators
  {id:'py4', topic:'Operators', type:'mcq', q:'What does the expression 17 // 5 evaluate to?', options:['3.4','3','2','4'], a:1},
  {id:'py5', topic:'Operators', type:'mcq', q:'What is the result of 2 ** 3 in Python?', options:['6','8','9','5'], a:1},
  {id:'py6', topic:'Operators', type:'mcq', q:'Which operator checks whether two values are equal in Python?', options:['=','==','eq','equals'], a:1},
  // Strings
  {id:'py7', topic:'Strings', type:'mcq', q:'What does "Hello".upper() return?', options:['hello','HELLO','Hello','HELLo'], a:1},
  {id:'py8', topic:'Strings', type:'mcq', q:'Which method splits a string into a list using a separator?', options:['.split()','.join()','.partition() only','.cut()'], a:0},
  {id:'py9', topic:'Strings', type:'mcq', q:'What does the slice "CodeCraft"[0:4] return?', options:['Code','ode','Craf','Codec'], a:0},
  // Collections
  {id:'py10', topic:'Collections', type:'mcq', q:'Which collection type is immutable once created?', options:['list','tuple','dict','set'], a:1},
  {id:'py11', topic:'Collections', type:'mcq', q:'How do you add an item to a Python list called items?', options:['items.add(x)','items.append(x)','items.push(x)','items.insertLast(x)'], a:1},
  {id:'py12', topic:'Collections', type:'mcq', q:'What data structure automatically removes duplicate values?', options:['list','tuple','dict','set'], a:3},
  // Control flow
  {id:'py13', topic:'Control Flow', type:'mcq', q:'Which keyword checks an additional condition after an if statement fails?', options:['elseif','elif','else if','otherwise'], a:1},
  {id:'py14', topic:'Control Flow', type:'mcq', q:'What will print("yes" if 5 > 3 else "no") output?', options:['yes','no','5','True'], a:0},
  {id:'py15', topic:'Control Flow', type:'mcq', q:'Which value below is considered falsy in a Python condition?', options:['"0" (a string)','1','[] (an empty list)','"False" (a string)'], a:2},
  // Loops
  {id:'py16', topic:'Loops', type:'mcq', q:'What does range(5) generate when looped over?', options:['1 to 5','0 to 4','0 to 5','1 to 4'], a:1},
  {id:'py17', topic:'Loops', type:'mcq', q:'What is the result of [n*2 for n in range(3)]?', options:['[0, 2, 4]','[2, 4, 6]','[0, 1, 2]','[1, 2, 3]'], a:0},
  {id:'py18', topic:'Loops', type:'mcq', q:'Which keyword immediately exits a loop entirely?', options:['continue','pass','break','return'], a:2},
  // Functions
  {id:'py19', topic:'Functions', type:'mcq', q:'How do you define a default parameter value in a function?', options:['def f(x=5):','def f(x:=5):','def f(x==5):','def f(default x 5):'], a:0},
  {id:'py20', topic:'Functions', type:'mcq', q:'Which keyword creates an anonymous inline function?', options:['func','def','lambda','anon'], a:2},
  {id:'py21', topic:'Functions', type:'mcq', q:'What does *args allow a function to accept?', options:['A single string','A variable number of positional arguments','Only keyword arguments','Nothing extra'], a:1},
  // OOP
  {id:'py22', topic:'OOP', type:'mcq', q:'Which method is automatically called when a class instance is created?', options:['__new__ only','__init__','__create__','__start__'], a:1},
  {id:'py23', topic:'OOP', type:'mcq', q:'What does self refer to inside an instance method?', options:['The class itself','The parent class','The current instance','A global variable'], a:2},
  {id:'py24', topic:'OOP', type:'mcq', q:"What is it called when a child class provides its own version of a parent method?", options:['Encapsulation','Overriding','Overloading','Abstraction'], a:1},
  // Exceptions
  {id:'py25', topic:'Exceptions', type:'mcq', q:'Which block always runs, whether or not an exception occurred?', options:['try','except','finally','else'], a:2},
  {id:'py26', topic:'Exceptions', type:'mcq', q:'Which exception is raised when dividing a number by zero?', options:['ValueError','ZeroDivisionError','TypeError','IndexError'], a:1},
  {id:'py27', topic:'Exceptions', type:'mcq', q:'How do you deliberately raise an exception in Python?', options:['throw Error()','raise Exception()','error()','except()'], a:1},
  // Files
  {id:'py28', topic:'File Handling', type:'mcq', q:'Which built-in function opens a file in Python?', options:['open()','file()','read()','load()'], a:0},
  {id:'py29', topic:'File Handling', type:'mcq', q:'What is the benefit of using "with open(...) as f:"?', options:['It makes reading faster','It automatically closes the file when done','It encrypts the file','It converts the file to CSV'], a:1},
  {id:'py30', topic:'File Handling', type:'mcq', q:'Which mode opens a file for appending text to the end?', options:['"r"','"w"','"a"','"x"'], a:2},
  // NumPy
  {id:'py31', topic:'NumPy', type:'mcq', q:'What is the core data structure provided by NumPy?', options:['DataFrame','ndarray','Series','Tensor'], a:1},
  {id:'py32', topic:'NumPy', type:'mcq', q:'Which NumPy array method returns the mean of an array arr?', options:['arr.average()','arr.mean()','arr.avg()','np.center(arr)'], a:1},
  {id:'py33', topic:'NumPy', type:'mcq', q:'What does arr.reshape(2, 3) do?', options:['Sorts the array','Changes the array\'s shape without changing its data','Deletes elements','Converts it to a list'], a:1},
  // Pandas
  {id:'py34', topic:'Pandas', type:'mcq', q:'What is the two-dimensional labeled data structure in pandas called?', options:['Series','Array','DataFrame','Table'], a:2},
  {id:'py35', topic:'Pandas', type:'mcq', q:"Which method groups rows by a column's values for aggregation?", options:['.sort_values()','.groupby()','.merge()','.pivot()'], a:1},
  {id:'py36', topic:'Pandas', type:'mcq', q:'How do you select the "score" column from a DataFrame df?', options:['df.score()','df["score"]','df->score','df{score}'], a:1},
  // Matplotlib
  {id:'py37', topic:'Matplotlib', type:'mcq', q:'Which module of matplotlib is most commonly used to create charts?', options:['matplotlib.pyplot','matplotlib.draw','matplotlib.chart','matplotlib.graphics'], a:0},
  {id:'py38', topic:'Matplotlib', type:'mcq', q:'Which function draws a bar chart onto matplotlib axes ax?', options:['ax.bar()','ax.line()','ax.pie_bar()','ax.column()'], a:0},
  {id:'py39', topic:'Matplotlib', type:'mcq', q:'What does plt.savefig() do?', options:['Only displays the chart on screen','Saves the current figure to a file or buffer','Deletes the current chart','Prints chart data as text'], a:1},
  // Requests
  {id:'py40', topic:'Requests', type:'mcq', q:'What does requests.get(url) do?', options:['Sends an HTTP GET request to the URL','Deletes data at the URL','Opens a local file','Installs a package'], a:0},
  {id:'py41', topic:'Requests', type:'mcq', q:'How do you parse a JSON response from the requests library?', options:['response.json()','response.parse()','response.toJson()','json.get(response)'], a:0},
  {id:'py42', topic:'Requests', type:'mcq', q:'What does response.status_code tell you?', options:['The size of the response body','The HTTP result status (e.g. 200, 404)','The response time in seconds','The content type only'], a:1},
  // Code-writing
  {id:'py43', topic:'Code Writing', type:'code', lang:'python',
    q:'Write Python code that prints the sum of the numbers from 1 to 10 (inclusive). Expected output: a single line, 55.',
    starter:'total = 0\n# write your code below\n\nprint(total)',
    check:(output)=> output.replace(/\s+/g,'') === '55'},
  {id:'py44', topic:'Code Writing', type:'code', lang:'python',
    q:'Write a function is_even(n) that returns True if n is even and False otherwise, then print is_even(8). Expected output: True',
    starter:'def is_even(n):\n    # write your code below\n    pass\n\nprint(is_even(8))',
    check:(output)=> output.trim() === 'True'},
  {id:'py45', topic:'Code Writing', type:'code', lang:'python',
    q:'Using a list comprehension, create and print a list of the squares of 1 through 5. Expected output: [1, 4, 9, 16, 25]',
    starter:'# write your code below\nsquares = []\n\nprint(squares)',
    check:(output)=> output.replace(/\s+/g,'') === '[1,4,9,16,25]'},
];

/* ---------------- QUESTION BANK: SQL (45) ---------------- */
const SQL_QUESTIONS = [
  // SELECT & WHERE
  {id:'sql1', topic:'SELECT & WHERE', type:'mcq', q:'Which clause filters rows based on a condition?', options:['SELECT','FROM','WHERE','HAVING'], a:2},
  {id:'sql2', topic:'SELECT & WHERE', type:'mcq', q:'Which statement retrieves all columns from a table named students?', options:['SELECT * FROM students;','GET ALL FROM students;','SELECT ALL students;','FETCH * students;'], a:0},
  {id:'sql3', topic:'SELECT & WHERE', type:'mcq', q:'Which operator checks for a range of values in a WHERE clause?', options:['RANGE','BETWEEN','WITHIN','IN RANGE'], a:1},
  {id:'sql4', topic:'SELECT & WHERE', type:'mcq', q:'Which keyword matches a text pattern using wildcards in SQL?', options:['MATCH','LIKE','PATTERN','SIMILAR'], a:1},
  {id:'sql5', topic:'SELECT & WHERE', type:'mcq', q:'What does WHERE city IS NULL check for?', options:['Rows where city equals the text "NULL"','Rows where city has no stored value','Rows where city equals 0','It is invalid syntax'], a:1},
  {id:'sql6', topic:'SELECT & WHERE', type:'mcq', q:'Which symbol represents "not equal to" in SQLite?', options:['<>','!==','=/=','NOT='], a:0},
  // ORDER BY & LIMIT
  {id:'sql7', topic:'ORDER BY & LIMIT', type:'mcq', q:'Which keyword sorts query results?', options:['SORT BY','ORDER BY','ARRANGE BY','GROUP BY'], a:1},
  {id:'sql8', topic:'ORDER BY & LIMIT', type:'mcq', q:'What does ORDER BY age DESC do?', options:['Sorts ages lowest to highest','Sorts ages highest to lowest','Removes duplicate ages','Groups rows by age'], a:1},
  {id:'sql9', topic:'ORDER BY & LIMIT', type:'mcq', q:"What does LIMIT 5 do to a query's results?", options:['Skips the first 5 rows','Returns only the first 5 rows','Requires exactly 5 columns','Limits the query to 5 tables'], a:1},
  {id:'sql10', topic:'ORDER BY & LIMIT', type:'mcq', q:"What is the default sort order if you don't specify ASC or DESC?", options:['DESC','Random','ASC','Unsorted'], a:2},
  {id:'sql11', topic:'ORDER BY & LIMIT', type:'mcq', q:'Which clause combined with LIMIT lets you skip a number of rows (pagination)?', options:['SKIP','OFFSET','JUMP','START'], a:1},
  {id:'sql12', topic:'ORDER BY & LIMIT', type:'mcq', q:"Can you ORDER BY a column that isn't in the SELECT list?", options:['Never allowed','Yes, in SQLite and most SQL engines','Only for numeric columns','Only when using GROUP BY'], a:1},
  // Aggregates & GROUP BY
  {id:'sql13', topic:'Aggregates', type:'mcq', q:'Which function counts the number of rows returned?', options:['SUM()','COUNT()','TOTAL()','ADD()'], a:1},
  {id:'sql14', topic:'Aggregates', type:'mcq', q:'What does GROUP BY do?', options:['Sorts rows alphabetically','Groups rows sharing the same value(s) so aggregates apply per group','Removes NULL rows','Joins two tables'], a:1},
  {id:'sql15', topic:'Aggregates', type:'mcq', q:'Which aggregate function returns the average of a numeric column?', options:['AVG()','MEAN()','MID()','MED()'], a:0},
  {id:'sql16', topic:'Aggregates', type:'mcq', q:'Which clause filters groups after aggregation (unlike WHERE, which filters rows first)?', options:['WHERE','HAVING','FILTER','AFTER'], a:1},
  {id:'sql17', topic:'Aggregates', type:'mcq', q:'What does SELECT city, COUNT(*) FROM students GROUP BY city; return?', options:['The total student count overall','The number of students in each city','Only the city names','A syntax error'], a:1},
  {id:'sql18', topic:'Aggregates', type:'mcq', q:'Which function returns the highest value in a column?', options:['TOP()','MAX()','HIGH()','LAST()'], a:1},
  // JOINs
  {id:'sql19', topic:'JOINs', type:'mcq', q:'Which JOIN returns only rows that match in both tables?', options:['LEFT JOIN','INNER JOIN','FULL JOIN','CROSS JOIN'], a:1},
  {id:'sql20', topic:'JOINs', type:'mcq', q:"Which JOIN returns all rows from the left table, with NULLs where there's no match on the right?", options:['INNER JOIN','RIGHT JOIN','LEFT JOIN','SELF JOIN'], a:2},
  {id:'sql21', topic:'JOINs', type:'mcq', q:'What is required to JOIN two tables meaningfully?', options:['Both tables must share the same name','A related column to match on (e.g. a foreign key)','Both tables must have identical columns','Nothing — JOIN works automatically'], a:1},
  {id:'sql22', topic:'JOINs', type:'mcq', q:'What does a CROSS JOIN produce?', options:['Only matching rows','The Cartesian product — every row paired with every row','Only the first row of each table','An error'], a:1},
  {id:'sql23', topic:'JOINs', type:'mcq', q:'In "...FROM students s JOIN enrollments e ON s.id = e.student_id...", what are s and e?', options:['Table aliases','Column names','SQL keywords','Data types'], a:0},
  {id:'sql24', topic:'JOINs', type:'mcq', q:'A linking table like enrollments, connecting students and courses, is often called:', options:['A pivot column','A junction / associative table','A primary table','A view'], a:1},
  // Subqueries
  {id:'sql25', topic:'Subqueries', type:'mcq', q:'What is a subquery?', options:['A query with a typo','A query nested inside another query','A query that returns no rows','A stored procedure'], a:1},
  {id:'sql26', topic:'Subqueries', type:'mcq', q:'Which keyword checks if a value exists in the result of a subquery?', options:['IN','EXISTS ONLY','HAS','CONTAINS'], a:0},
  {id:'sql27', topic:'Subqueries', type:'mcq', q:"SELECT name FROM students WHERE id IN (SELECT student_id FROM enrollments WHERE grade='A'); returns:", options:['All students','Only students who earned an A in some course','Only courses graded A','A syntax error'], a:1},
  {id:'sql28', topic:'Subqueries', type:'mcq', q:'A subquery that runs once and returns a fixed result set for the outer query is called:', options:['A correlated subquery','A non-correlated (independent) subquery','A trigger','A view'], a:1},
  {id:'sql29', topic:'Subqueries', type:'mcq', q:'Where can a subquery legally appear in SQL?', options:['Only in WHERE','Only in SELECT','In SELECT, FROM, WHERE, and more','Only at the very end of a script'], a:2},
  {id:'sql30', topic:'Subqueries', type:'mcq', q:'What does EXISTS return?', options:['The actual matched rows','TRUE or FALSE depending on whether the subquery returns any rows','A count of rows','NULL always'], a:1},
  // DML
  {id:'sql31', topic:'DML', type:'mcq', q:'Which statement adds a new row to a table?', options:['ADD','INSERT INTO','APPEND','NEW ROW'], a:1},
  {id:'sql32', topic:'DML', type:'mcq', q:'Which clause is critical to include with UPDATE to avoid changing every row?', options:['LIMIT','WHERE','ORDER BY','GROUP BY'], a:1},
  {id:'sql33', topic:'DML', type:'mcq', q:'What does DELETE FROM students WHERE id = 5; do?', options:['Deletes the students table','Deletes the row where id equals 5','Deletes the id column','Deletes all rows'], a:1},
  {id:'sql34', topic:'DML', type:'mcq', q:'What happens if you run DELETE FROM students; with no WHERE clause?', options:['Nothing happens','Only the first row is deleted','Every row in the table is deleted','It throws a syntax error'], a:2},
  {id:'sql35', topic:'DML', type:'mcq', q:'Which statement changes existing values already stored in a table?', options:['CHANGE','UPDATE','MODIFY','ALTER ROW'], a:1},
  {id:'sql36', topic:'DML', type:'mcq', q:"In INSERT INTO courses (title, credits) VALUES ('Data Viz', 3);, what does (title, credits) specify?", options:["The table's primary key", 'Which columns the values are being inserted into','A subquery','A JOIN condition'], a:1},
  // DDL
  {id:'sql37', topic:'DDL', type:'mcq', q:'Which statement defines a brand-new table and its columns?', options:['NEW TABLE','CREATE TABLE','MAKE TABLE','DEFINE TABLE'], a:1},
  {id:'sql38', topic:'DDL', type:'mcq', q:'What does the PRIMARY KEY constraint guarantee for a column?', options:['It can repeat freely','Each value uniquely identifies a row and cannot be NULL','It stores text only','It must also be a foreign key'], a:1},
  {id:'sql39', topic:'DDL', type:'mcq', q:'What does NOT NULL enforce on a column?', options:['The column must always have a value','The column must be numeric','The column can never be updated','The column is a primary key'], a:0},
  {id:'sql40', topic:'DDL', type:'mcq', q:'Which statement removes an entire table and its data permanently?', options:['DELETE TABLE','DROP TABLE','REMOVE TABLE','CLEAR TABLE'], a:1},
  {id:'sql41', topic:'DDL', type:'mcq', q:"Which clause avoids an error if a table you're creating already exists?", options:['IF POSSIBLE','IF NOT EXISTS','ON DUPLICATE','SAFE CREATE'], a:1},
  {id:'sql42', topic:'DDL', type:'mcq', q:'Which statement changes the structure of an existing table (e.g. adding a column)?', options:['CHANGE TABLE','ALTER TABLE','MODIFY TABLE','UPDATE TABLE'], a:1},
  // Code-writing (checked against a freshly-seeded exam database)
  {id:'sql43', topic:'Code Writing', type:'code', lang:'sql',
    q:'Write a query that returns the names of students older than 22, ordered from oldest to youngest.',
    starter:'-- students(id, name, age, city)\nSELECT\n',
    check:(results)=> _sqlCheckOrderedNames(results, ['Kabir','Ashwik','Rahul'])},
  {id:'sql44', topic:'Code Writing', type:'code', lang:'sql',
    q:'Write a query that returns each city together with the number of students in that city.',
    starter:'-- students(id, name, age, city)\nSELECT\n',
    check:(results)=> _sqlCheckCityCounts(results, {Pune:2, Mumbai:2, Nagpur:1})},
  {id:'sql45', topic:'Code Writing', type:'code', lang:'sql',
    q:"Write a query joining students, enrollments, and courses to list each student's name alongside the title of every course they're enrolled in.",
    starter:'-- students(id,name,age,city) · enrollments(id,student_id,course_id,grade) · courses(id,title,credits)\nSELECT\n',
    check:(results)=> _sqlCheckPairs(results, [
      ['Ashwik','Python Programming'], ['Ashwik','SQL for Analysts'],
      ['Priya','Python Programming'], ['Rahul','SQL for Analysts'],
      ['Sneha','Power BI Essentials'], ['Kabir','Power BI Essentials']
    ])},
];

/* ---------------- SQL CODE-CHECK HELPERS ---------------- */
function _sqlCheckOrderedNames(results, expectedNamesInOrder){
  if(!results || !results.length) return false;
  const res = results[0];
  let colIdx = res.columns.findIndex((c,i)=> res.values.every(row=> typeof row[i] === 'string'));
  if(colIdx === -1) colIdx = 0;
  const got = res.values.map(r=>String(r[colIdx]).trim().toLowerCase());
  if(got.length !== expectedNamesInOrder.length) return false;
  return got.every((v,i)=> v === expectedNamesInOrder[i].toLowerCase());
}
function _sqlCheckCityCounts(results, expectedMap){
  if(!results || !results.length) return false;
  const res = results[0];
  const keys = Object.keys(expectedMap);
  if(res.values.length !== keys.length) return false;
  let textIdx=-1, numIdx=-1;
  for(let i=0;i<res.columns.length;i++){
    if(res.values.every(row=>typeof row[i]==='string')) textIdx=i;
    if(res.values.every(row=>typeof row[i]==='number')) numIdx=i;
  }
  if(textIdx===-1 || numIdx===-1) return false;
  const gotMap = {};
  res.values.forEach(row=>{ gotMap[row[textIdx]] = row[numIdx]; });
  return keys.every(k=> gotMap[k] === expectedMap[k]) && Object.keys(gotMap).length === keys.length;
}
function _sqlCheckPairs(results, expectedPairs){
  if(!results || !results.length) return false;
  const res = results[0];
  if(res.values.length !== expectedPairs.length) return false;
  const textCols = [];
  for(let i=0;i<res.columns.length;i++){
    if(res.values.every(row=> typeof row[i]==='string')) textCols.push(i);
  }
  if(textCols.length < 2) return false;
  const [c0,c1] = textCols;
  const norm = (a,b)=> new Set(res.values.map(row=> `${String(row[a]).trim().toLowerCase()}|${String(row[b]).trim().toLowerCase()}`));
  const expSet = new Set(expectedPairs.map(p=>`${p[0].toLowerCase()}|${p[1].toLowerCase()}`));
  const setsEqual = (s)=> s.size === expSet.size && [...expSet].every(x=>s.has(x));
  return setsEqual(norm(c0,c1)) || setsEqual(norm(c1,c0));
}

/* ---------------- RUNNERS (isolated from the on-page playgrounds) ---------------- */
async function runPythonForExam(code){
  const pyodide = await ensurePyodide();
  let output = '';
  pyodide.setStdout({ batched:(s)=>{ output += s + '\n'; } });
  pyodide.setStderr({ batched:(s)=>{ output += s + '\n'; } });
  try{
    await pyodide.loadPackagesFromImports(code);
    await pyodide.runPythonAsync(code);
    return { ok:true, output: output.trim() };
  }catch(err){
    return { ok:false, output: output.trim(), error: err.message || String(err) };
  }
}
async function runSqlForExam(query){
  if(!SQL){ SQL = await initSqlJs({ locateFile: file => `https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/${file}` }); }
  const exDb = new SQL.Database();
  seedDb(exDb);
  try{
    const results = exDb.exec(query);
    exDb.close();
    return { ok:true, results };
  }catch(err){
    try{ exDb.close(); }catch(e){}
    return { ok:false, error: err.message || String(err) };
  }
}

/* ---------------- EXAM STATE ---------------- */
const EXAM_ATTEMPTS_KEY = 'codecraft_exam_attempts_v1';
const EXAM_PASSED_KEY = 'codecraft_exam_passed_v1';
const EXAM_CERT_KEY = 'codecraft_cert_v1';
const EXAM_NAME_KEY = 'codecraft_candidate_name_v1';
const EXAM_END_KEY = 'codecraft_exam_end_v1';
const MAX_ATTEMPTS = 3;
const PASS_MARK = 40;
const EXAM_DURATION_MIN = 100;

let examQuestions = [];
let examIndex = 0;
let examAnswers = {};
let examCandidateName = '';
let examEndTime = 0;
let examTimerInterval = null;

function getAttempts(){ return parseInt(localStorage.getItem(EXAM_ATTEMPTS_KEY) || '0', 10); }
function setAttempts(n){ localStorage.setItem(EXAM_ATTEMPTS_KEY, String(n)); }
function hasPassed(){ return localStorage.getItem(EXAM_PASSED_KEY) === '1'; }

function refreshExamIntroUI(){
  const attemptsLeft = Math.max(0, MAX_ATTEMPTS - getAttempts());
  const num = document.getElementById('attemptsLeftNum');
  if(num) num.textContent = attemptsLeft;

  const ids = allTopicIds();
  const done = ids.filter(id => progress[id]).length;
  const complete = ids.length > 0 && done === ids.length;

  const lockedNote = document.getElementById('examLockedNote');
  const outNote = document.getElementById('examOutOfAttempts');
  const startBtn = document.getElementById('startExamBtn');
  const sideDot = document.getElementById('examSideDot');
  const nameInput = document.getElementById('candidateNameInput');

  if(nameInput && !nameInput.value){
    const savedName = localStorage.getItem(EXAM_NAME_KEY);
    if(savedName) nameInput.value = savedName;
  }

  if(lockedNote){
    lockedNote.style.display = complete ? 'none' : 'block';
    lockedNote.textContent = `Finish marking every lesson above as complete to unlock the exam (${done}/${ids.length} done so far).`;
  }
  if(outNote) outNote.style.display = (!hasPassed() && attemptsLeft <= 0) ? 'block' : 'none';
  if(startBtn) startBtn.classList.toggle('is-locked', !complete || (!hasPassed() && attemptsLeft <= 0));
  if(sideDot) sideDot.classList.toggle('done', hasPassed());

  const savedCert = loadCert();
  if(savedCert && hasPassed()){
    renderCertificate(savedCert, {scroll:false});
    document.getElementById('examIntro').style.display = 'none';
  }
}

function flashLockNote(el){
  if(!el) return;
  el.style.display = 'block';
  el.classList.remove('shake');
  // force reflow so the animation can restart on repeated clicks
  void el.offsetWidth;
  el.classList.add('shake');
  el.scrollIntoView({behavior:'smooth', block:'center'});
}

function startExam(){
  const ids = allTopicIds();
  const done = ids.filter(id => progress[id]).length;
  if(ids.length === 0 || done !== ids.length){
    flashLockNote(document.getElementById('examLockedNote'));
    return;
  }
  if(!hasPassed() && getAttempts() >= MAX_ATTEMPTS){
    flashLockNote(document.getElementById('examOutOfAttempts'));
    return;
  }
  const nameInput = document.getElementById('candidateNameInput');
  const name = nameInput ? nameInput.value.trim() : '';
  if(!name){
    if(nameInput){
      nameInput.focus();
      nameInput.classList.remove('flash-warn');
      void nameInput.offsetWidth;
      nameInput.classList.add('flash-warn');
      nameInput.scrollIntoView({behavior:'smooth', block:'center'});
    }
    return;
  }
  examCandidateName = name;
  try{ localStorage.setItem(EXAM_NAME_KEY, name); }catch(e){}

  examQuestions = [...PY_QUESTIONS, ...SQL_QUESTIONS];
  examIndex = 0;
  examAnswers = {};
  document.getElementById('examIntro').style.display = 'none';
  document.getElementById('examResult').style.display = 'none';
  document.getElementById('certOutput').style.display = 'none';
  document.getElementById('examRunner').style.display = 'block';
  document.getElementById('examCandidateLabel').textContent = `Candidate: ${examCandidateName}`;

  // Reuse a still-active timer if this is a page-reload mid-attempt, so refreshing
  // doesn't grant extra time; otherwise start a fresh full-duration attempt.
  let existingEnd = 0;
  try{ existingEnd = parseInt(localStorage.getItem(EXAM_END_KEY) || '0', 10); }catch(e){}
  if(existingEnd && existingEnd > Date.now()){
    examEndTime = existingEnd;
  } else {
    examEndTime = Date.now() + EXAM_DURATION_MIN * 60 * 1000;
    try{ localStorage.setItem(EXAM_END_KEY, String(examEndTime)); }catch(e){}
  }
  startExamTimer();

  renderExamQuestion();
}

function startExamTimer(){
  stopExamTimer();
  updateExamTimerDisplay();
  examTimerInterval = setInterval(updateExamTimerDisplay, 1000);
}
function stopExamTimer(){
  if(examTimerInterval){ clearInterval(examTimerInterval); examTimerInterval = null; }
}
function updateExamTimerDisplay(){
  const el = document.getElementById('examTimer');
  if(!el) return;
  const remainingMs = examEndTime - Date.now();
  if(remainingMs <= 0){
    el.textContent = '⏱ 00:00 remaining';
    el.classList.add('low-time');
    stopExamTimer();
    submitExam();
    return;
  }
  const totalSec = Math.floor(remainingMs / 1000);
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;
  el.textContent = `⏱ ${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')} remaining`;
  el.classList.toggle('low-time', totalSec <= 300);
}


function renderExamQuestion(){
  const q = examQuestions[examIndex];
  const total = examQuestions.length;
  const sectionLabel = examIndex < PY_QUESTIONS.length
    ? `Section 1 of 2 — Python  ·  Question ${examIndex+1} of ${PY_QUESTIONS.length}`
    : `Section 2 of 2 — SQL  ·  Question ${examIndex - PY_QUESTIONS.length + 1} of ${SQL_QUESTIONS.length}`;
  document.getElementById('examSectionLabel').textContent = sectionLabel;
  document.getElementById('examProgressFill').style.width = Math.round(((examIndex+1)/total)*100) + '%';
  document.getElementById('examQCount').textContent = `Q${examIndex+1} / ${total}`;
  document.getElementById('examPrevBtn').style.visibility = examIndex === 0 ? 'hidden' : 'visible';
  document.getElementById('examNextBtn').textContent = examIndex === total - 1 ? 'Submit Exam' : 'Next →';

  const container = document.getElementById('examQuestions');
  container.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'exam-q-card neu-raised';

  const head = document.createElement('div');
  head.className = 'exam-q-head';
  head.innerHTML = `<span class="exam-q-num">${q.topic}</span><span class="exam-q-marks">${(50/45).toFixed(2)} marks</span>`;
  card.appendChild(head);

  const qtext = document.createElement('div');
  qtext.className = 'exam-q-text';
  qtext.textContent = q.q;
  card.appendChild(qtext);

  if(q.type === 'mcq'){
    const opts = document.createElement('div');
    opts.className = 'exam-options';
    q.options.forEach((opt, i)=>{
      const label = document.createElement('label');
      label.className = 'exam-option neu-inset' + (examAnswers[q.id] === i ? ' picked' : '');
      label.innerHTML = `<input type="radio" name="${q.id}" ${examAnswers[q.id]===i?'checked':''}> <span>${opt}</span>`;
      label.querySelector('input').addEventListener('change', ()=>{
        examAnswers[q.id] = i;
        renderExamQuestion();
      });
      opts.appendChild(label);
    });
    card.appendChild(opts);
  } else if(q.type === 'code'){
    const note = document.createElement('div');
    note.className = 'exam-code-note';
    note.textContent = q.lang === 'python' ? '▶ PYTHON — write and run your code, then check it' : '▶ SQL — write and run your query, then check it';
    card.appendChild(note);

    const shell = document.createElement('div');
    shell.className = 'editor-shell';
    const ta = document.createElement('textarea');
    ta.className = 'code-editor';
    ta.spellcheck = false;
    ta.style.minHeight = '110px';
    ta.value = (examAnswers[q.id] && examAnswers[q.id].code) || q.starter;
    shell.appendChild(ta);
    card.appendChild(shell);

    const checkRow = document.createElement('div');
    checkRow.className = 'exam-check-row';
    const checkBtn = document.createElement('button');
    checkBtn.className = 'run-btn' + (q.lang === 'sql' ? ' sql-run' : '');
    checkBtn.textContent = '▶ Run & Check';
    const resultSpan = document.createElement('span');
    resultSpan.className = 'exam-check-result';
    if(examAnswers[q.id] && examAnswers[q.id].checked){
      resultSpan.textContent = examAnswers[q.id].passed ? '✓ Correct — check passed' : '✗ Not quite — keep trying';
      resultSpan.classList.add(examAnswers[q.id].passed ? 'pass' : 'fail');
    }
    checkRow.appendChild(checkBtn);
    checkRow.appendChild(resultSpan);
    card.appendChild(checkRow);

    checkBtn.addEventListener('click', async ()=>{
      checkBtn.disabled = true;
      const original = checkBtn.textContent;
      checkBtn.textContent = 'Running…';
      resultSpan.textContent = '';
      resultSpan.className = 'exam-check-result';
      try{
        let passed = false;
        if(q.lang === 'python'){
          const r = await runPythonForExam(ta.value);
          passed = r.ok && q.check(r.output);
        } else {
          const r = await runSqlForExam(ta.value);
          passed = r.ok && q.check(r.results);
        }
        examAnswers[q.id] = { code: ta.value, checked:true, passed };
        resultSpan.textContent = passed ? '✓ Correct — check passed' : '✗ Not quite — review your logic and try again';
        resultSpan.classList.add(passed ? 'pass' : 'fail');
      }catch(e){
        examAnswers[q.id] = { code: ta.value, checked:true, passed:false };
        resultSpan.textContent = '✗ Error running your code';
        resultSpan.classList.add('fail');
      }finally{
        checkBtn.disabled = false;
        checkBtn.textContent = original;
      }
    });

    ta.addEventListener('input', ()=>{
      if(!examAnswers[q.id]) examAnswers[q.id] = {};
      examAnswers[q.id].code = ta.value;
    });
  }

  container.appendChild(card);
}

function examNext(){
  if(examIndex === examQuestions.length - 1){
    submitExam();
    return;
  }
  examIndex++;
  renderExamQuestion();
}
function examPrev(){
  if(examIndex === 0) return;
  examIndex--;
  renderExamQuestion();
}

function submitExam(){
  stopExamTimer();
  try{ localStorage.removeItem(EXAM_END_KEY); }catch(e){}

  let pyCorrect = 0, sqlCorrect = 0;
  PY_QUESTIONS.forEach(q=>{
    const ans = examAnswers[q.id];
    if(q.type === 'mcq' && ans === q.a) pyCorrect++;
    if(q.type === 'code' && ans && ans.passed) pyCorrect++;
  });
  SQL_QUESTIONS.forEach(q=>{
    const ans = examAnswers[q.id];
    if(q.type === 'mcq' && ans === q.a) sqlCorrect++;
    if(q.type === 'code' && ans && ans.passed) sqlCorrect++;
  });

  const pyScore = Math.round((pyCorrect/PY_QUESTIONS.length)*50*10)/10;
  const sqlScore = Math.round((sqlCorrect/SQL_QUESTIONS.length)*50*10)/10;
  const total = Math.round((pyScore+sqlScore)*10)/10;
  const passed = pyScore > PASS_MARK && sqlScore > PASS_MARK;

  if(!hasPassed()){
    setAttempts(getAttempts()+1);
  }
  if(passed){
    localStorage.setItem(EXAM_PASSED_KEY, '1');
  }

  document.getElementById('examRunner').style.display = 'none';
  renderExamResult({pyScore, sqlScore, total, passed, pyCorrect, sqlCorrect});
  refreshExamIntroUI();
}

function renderExamResult({pyScore, sqlScore, total, passed, pyCorrect, sqlCorrect}){
  const box = document.getElementById('examResult');
  const attemptsLeft = Math.max(0, MAX_ATTEMPTS - getAttempts());
  const pyPass = pyScore > PASS_MARK;
  const sqlPass = sqlScore > PASS_MARK;
  const nameLine = examCandidateName ? `<p style="font-family:var(--mono); font-size:12.5px; color:var(--secondary-2); margin:0 0 10px;">Candidate: ${escapeHtml(examCandidateName)}</p>` : '';
  box.innerHTML = `
    <div class="result-verdict ${passed?'pass':'fail'}">${passed ? '🎉 You passed the assessment!' : 'Not a pass yet'}</div>
    ${nameLine}
    <p style="color:var(--ink-dim); margin:0 0 6px;">${passed
      ? 'Both sections cleared the 40-mark bar. Your certificate has been generated below.'
      : 'You need more than 40 marks in <b>both</b> the Python and SQL sections to pass.'}</p>
    <div class="result-score-row">
      <div class="result-score-card ${pyPass?'pass':'fail'}">
        <b>${pyScore}<span style="font-size:16px;color:var(--ink-faint);">/50</span></b>
        <span>Python (${pyCorrect}/${PY_QUESTIONS.length} correct)</span>
      </div>
      <div class="result-score-card ${sqlPass?'pass':'fail'}">
        <b>${sqlScore}<span style="font-size:16px;color:var(--ink-faint);">/50</span></b>
        <span>SQL (${sqlCorrect}/${SQL_QUESTIONS.length} correct)</span>
      </div>
      <div class="result-score-card ${passed?'pass':'fail'}">
        <b>${total}<span style="font-size:16px;color:var(--ink-faint);">/100</span></b>
        <span>Total score</span>
      </div>
    </div>
  `;

  if(passed){
    autoGenerateCertificate({pyScore, sqlScore, total});
  } else if(attemptsLeft > 0){
    const retryBtn = document.createElement('button');
    retryBtn.className = 'run-btn cert-btn';
    retryBtn.style.marginTop = '8px';
    retryBtn.textContent = `Retry Exam (${attemptsLeft} attempt${attemptsLeft===1?'':'s'} left)`;
    retryBtn.onclick = startExam;
    box.appendChild(retryBtn);
  } else {
    const lockedMsg = document.createElement('div');
    lockedMsg.className = 'note';
    lockedMsg.style.marginTop = '10px';
    lockedMsg.style.color = 'var(--danger)';
    lockedMsg.textContent = "You've used all 3 attempts. Use the reset option below if you'd like to study further and try again.";
    box.appendChild(lockedMsg);
    const resetBtn = document.createElement('button');
    resetBtn.className = 'icon-btn exam-nav-btn';
    resetBtn.style.marginTop = '10px';
    resetBtn.textContent = 'Reset Attempts';
    resetBtn.onclick = resetExamProgress;
    box.appendChild(resetBtn);
  }
  box.style.display = 'block';
}

function resetExamProgress(){
  const msg = hasPassed()
    ? 'This clears your certificate and exam attempts so you can retake the exam. Your topic checklist stays intact. Continue?'
    : "This clears your used attempts so you can try the exam again. Continue?";
  if(!confirm(msg)) return;
  stopExamTimer();
  localStorage.removeItem(EXAM_ATTEMPTS_KEY);
  localStorage.removeItem(EXAM_PASSED_KEY);
  localStorage.removeItem(EXAM_CERT_KEY);
  localStorage.removeItem(EXAM_END_KEY);
  document.getElementById('examResult').style.display = 'none';
  document.getElementById('certOutput').style.display = 'none';
  document.getElementById('examIntro').style.display = 'block';
  refreshExamIntroUI();
}

/* ---------------- CERTIFICATE ---------------- */
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
function generateCertId(){
  const year = new Date().getFullYear();
  const rand = () => Math.floor(100000 + Math.random()*900000);
  return {
    certId: `CERT-PYSQL-${year}-${rand()}`,
    refId: `REF-PYSQL-${year}-${rand()}`
  };
}
function loadCert(){
  try{ return JSON.parse(localStorage.getItem(EXAM_CERT_KEY)); }catch(e){ return null; }
}
function saveCert(cert){
  try{ localStorage.setItem(EXAM_CERT_KEY, JSON.stringify(cert)); }catch(e){}
}

function autoGenerateCertificate({pyScore, sqlScore, total}){
  const ids = generateCertId();
  const cert = {
    name: examCandidateName || 'Certified Learner',
    id: ids.certId,
    refId: ids.refId,
    date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' }),
    total, pyScore, sqlScore,
    score: `${total}/100`,
    scoreSub: `Python ${pyScore}/50 · SQL ${sqlScore}/50`
  };
  saveCert(cert);
  renderCertificate(cert, {scroll:true});
}

function renderCertificate(cert, opts){
  const shouldScroll = opts && opts.scroll;
  document.getElementById('certNameOut').textContent = cert.name;
  document.getElementById('certDateOut').textContent = cert.date;
  document.getElementById('certScoreOut').textContent = cert.score || (cert.total ? `${cert.total}/100` : '—/100');
  document.getElementById('certScoreSubOut').textContent = cert.scoreSub || '';
  document.getElementById('certIdOut').textContent = cert.id;
  document.getElementById('certRefOut').textContent = cert.refId || '—';
  document.getElementById('certOutput').style.display = 'block';
  if(shouldScroll){
    document.getElementById('certOutput').scrollIntoView({behavior:'smooth', block:'start'});
  }
}

function downloadCertificatePNG(evt){
  const el = document.getElementById('certificateFrame');
  const btn = evt && evt.target;
  const original = btn ? btn.textContent : null;
  if(typeof html2canvas === 'undefined'){
    alert('The PNG renderer failed to load (usually a blocked script or no internet connection). Please check your connection and try again.');
    return;
  }
  if(btn){ btn.disabled = true; btn.textContent = 'Rendering…'; }
  Promise.resolve()
    .then(()=> html2canvas(el, { backgroundColor:'#0A0C14', scale:2 }))
    .then(canvas=>{
      const cert = loadCert();
      const link = document.createElement('a');
      link.download = `CodeCraft-Certificate-${cert ? cert.id : 'Ashwik-Bire'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    })
    .catch(()=>{
      alert("Couldn't render the certificate image. Please check your connection and try again.");
    })
    .finally(()=>{
      if(btn){ btn.disabled = false; btn.textContent = original; }
    });
}

function shareCertificateLinkedIn(){
  const cert = loadCert();
  const caption = cert
    ? `I just earned the Python & SQL Certification from CodeCraft Academy (presented by Ashwik Bire)! Certificate ID: ${cert.id}. #Python #SQL #CodeCraftAcademy`
    : 'I just earned a certification from CodeCraft Academy!';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(caption).catch(()=>{});
  }
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`;
  window.open(shareUrl, '_blank', 'noopener,noreferrer');
}

/* ---------------- INIT ---------------- */
window.addEventListener('load', ()=>{
  refreshExamIntroUI();
});
document.addEventListener('change', (e)=>{
  if(e.target.matches('.complete-toggle input')){
    setTimeout(refreshExamIntroUI, 0);
  }
});
