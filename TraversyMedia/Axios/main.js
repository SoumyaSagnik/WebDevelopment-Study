// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// by doing above every request will have this header in config

// GET REQUEST
function getTodos() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // })
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));

    //! Or

    // axios
    //     .get('https://jsonplaceholder.typicode.com/todos', {
    //         params: { _limit: 5 }
    //     })
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err));

    //! Short version
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => showOutput(res))
        .catch(err => console.error(err));

    //! We can skip even .get as lone axios is defaulted with .get by this is cleaner
}

// POST REQUEST
function addTodo() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
//! Put vs Patch: Put will replace the entire resource whereas pathch will update it incrementally.
function updateTodo() {
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'Updated Todo',
            completed: true
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

    // /1 here in the url as this api takes /id of what you wanna update
    // put o/p: 
    // {
    // "title": "Updated Todo",
    // "completed": true,
    // "id": 1
    // }

    // patch o/p:
    // {
    // "userId": 1,
    // "id": 1,
    // "title": "Updated Todo",
    // "completed": true
    // }
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
        .then(axios.spread((todos, posts) => {
            console.log(todos);
            console.log(posts);
            showOutput(posts);
        }))
        .catch(err => console.error(err));

    // axios.spread takes in a funtion
}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'sometoken'
        }
    }

    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        }, config)
        .then(res => showOutput(res))
        .catch(err => console.error(err));

    // check Config in UI. You can send any information to the back-end via this apporach
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            name: 'SSK'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.name = data.name.toLowerCase();
            return data;
        })
    }
    axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
    axios
        .get('https://jsonplaceholder.typicode.com/todoss', {
            // validateStatus: function (status) {
            //     return status < 500; // Reject only if status is greater or equal to 500. So for 404 it would not do catch thus commented
            // }
        })
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // Server responded with a status other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                // Request was made but no response
                console.error(err.request);
            } else {
                console.error(err.message);
            }
        });

    // Giving wrong url to test out the error
}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source();

    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            }
        });

    source.cancel("because you're a pig");

    // incase you wanna cancel the request sent maybe cause it's taking too long or for some other reason!
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config;
}, error => {
    return Promise.reject(error);
});
// basically the above function is like a log

// AXIOS INSTANCES
// const axiosInstance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// });
// axiosInstance.get('/comments').then(res => showOutput(res));

// ! In order to set max timeout for fetching something
// axios
//     .get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout: 5 })
//     .then(res => showOutput(res))
//     .catch(err => console.error(err));
// 5 here is in ms

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// ! Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
