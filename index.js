
const createIndexHtml = ({ allKeys }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta property="og:title" content="josee.link - A URL shortener">
    <meta property="og:type" content="website">
    <meta property="og:url" content="josee.link">
    <meta property="og:image" content="https://res.cloudinary.com/dwqr4s7gp/image/upload/v1618607472/logoJose_zqxawh.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Este es un acortador de urls personalizado para MEEEEEEEE!!!!!">
    <link rel="icon" href="https://www.imjosehidalgo.com/logo192.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title>josee.link - A URL shortener</title>
  </head>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }
    main {
      max-width: 1200px;
      min-height: 100vh;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-content: center;
    }
    body {
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
    }
    h1 {
      font-size: 2.8rem;
      font-weight: 600;
    }
    p {
      width: 80%;
      color: #666;
      margin: 2rem 0;
    }
    span {
      color: #8838ff;
      border-bottom: 4px solid #8838ff;
    }
    form {
      margin-top: 2.3rem;
      display: flex;
      flex-direction: column;
      width: 80%;
    }
    .input {
      position: relative;
    }
    input {
      padding: 13px 13px;
      width: 100%;
      margin-bottom: 1.5rem;
      border-radius: 10px;
      outline: none;
      border: 2px solid rgba(0,0,0,.2);
      transition: .2s;
    }
    input:hover {
      color: rgb(136, 56, 255);
      box-shadow: 1px 1px 4px rgba(136, 56, 255, .3);
      border: 2px solid rgba(136, 56, 255, .4);
    }
    input:focus {
      border: 2px solid rgba(136, 56, 255, .4);
      box-shadow: 1px 1px 4px rgba(136, 56, 255, .3);
    }
    label {
      position: absolute;
      top: -7px;
      left: 11px;
      background: #fff;
      color: #8838ff;
      padding: 0 .5px;
      font-weight: 400;
      font-size: 13px;
      letter-spacing: .5px;
    }
    button {
      margin-top: 1rem;
      cursor: pointer;
      border: none;
      width: 100%;
      padding: 11px 0;
      border-radius: 20px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      background: #8838ff;
    }
    button:hover {
      background: #DC08E9;
    }
    ul {
      margin-top: 2rem;
      background: #fff;
    }
    ul p {
      width: 100%;
      padding: 10px;
      margin: 1rem 0;
    }
    li {
      border-left: 4px solid rgba(136, 56, 255, .1);
      padding: 10px 8px;
      display: grid;
      grid-template-columns: 1fr 2fr .3fr;
      list-style: none;
    }
    li:first-child:hover {
      background: none;
    }
    li:hover {
      border-left: 4px solid rgba(136, 56, 255, .4);
      background: rgba(220, 8, 233, .1);
    }
    li:first-child strong {
      color: #8838ff;
    }
    li button {
      margin-top: 0;
      padding: 2px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 500;
    }
    strong {
      margin-right: 1rem;
    }
    p a {
      font-weight: 600;
      color: #8838ff;
    }
    a {
      color: #666;
      font-weight: 500;
      width: fit-content;
    }
    a:hover {
      color: #DC08E9;
    }
    .new-url {
      margin-top: 2rem;
      padding: 5px 0;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .new-url.active {
      background: #fff;
      border-radius: 20px;
    }
    .new-url a {
      margin: 0;
      text-decoration: underline;
      cursor: pointer;
    }
    .new-url button {
      width: fit-content;
      height: fit-content;
      margin-left: 1rem;
      margin-top: 0;
      padding: 5px 8px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 500;
      display: none;
    }
    .new-url.show button{
      display: flex;
    }
    .links {
      max-height: 70vh;
      overflow-y: auto;
      position: relative;
    }
    .links .edit-button {
      position: absolute;
      margin: 0;
      top: 10px;
      right: 8px;
      border-radius: 5px;
      padding: 5px 10px;
      width: fit-content;
    }
    .create {
      display: block;
    }
    .create.active {
      display: none;
    }
    .delete {
      display: none;
      align-content: start;
    }
    .delete.active {
      display: block;
    }
    .links::-webkit-scrollbar {
      width: 0.4rem;
    }
    .links::-webkit-scrollbar-track {
      background: #fff;
    }
    .links::-webkit-scrollbar-thumb {
      background: #8838ff;
    }
    .links::-webkit-scrollbar-thumb:active {
      background: #DC08E9;
    }
    @media only screen and (max-width: 1380px) {
      body {
        background-image: none;
      }
    }
    @media only screen and (max-width: 1024px) {
      body {
        background-image: none;
      }
      main {
        grid-template-columns: 1fr;
        max-width: 90%;
        padding: 2rem 0;
      }
      form {
        width: 100%;
      }
      #result {
        width: 100%;
      }
      .links {
        max-height: 100%;
        overflow: auto;
      }
      .links .edit-button {
        right: 0;
      }
    }
    @media only screen and (max-width: 600px) {
      h1 {
        font-size: 2.3rem;
      }
      p {
        width: 100%;
      }
      li {
        grid-template-columns: 2fr 3fr .8fr;
        padding: 10px 0px 10px 8px;
      }
      .links h1 {
        width: 80%;
      }
      .new-url {
        text-align: center;
        width: 100%;
      }
      .new-url a {
        width: fit-content;
      }
    }
  </style>
  <body>
    <main>
      <div class="delete" id='delete'>
        <h1>Delete <span>Links!</span></h1>
        <p style="width: 100%;">Introduce the hash of the url you want to delete.</p>
        <form id='form-delete'>
          <div class="input">
            <label>Hash to delete</label>
            <input id='hash-delete' required type="text" placeholder="Hash">
          </div>
          <div class="input">
            <label>Auth code</label>
            <input id='auth-delete' required type="password" placeholder="">
          </div>
          <input id='resetdel' type="reset" style="display: none;">
          <button>Delete url</button>
        </form>
        <div class='new-url'><a id='resultdel' target='_blank'></a><button onclick="copyUrl('result', 10);">copy</button></li></div>
      </div>
      <div class="create" id='create'>
        <h1>A simple link</br>but a powerful tool</br>for <span>Meeeee!!!</span></h1>
        <p>Would you like to have your own custom url shortener?</br>I leave you the repository with the code and a readme where I explain how you can modify this project to have your own shortener <a target='_blank' href='https://github.com/ImJoseHidalgo'>here.</a></p>
        <form id='form-create'>
          <div class="input">
            <label>Shorten your link</label>
            <input id='link' required type="text" placeholder="Your link">
          </div>
          <div class="input">
            <label>Hash to use for the link</label>
            <input id='hash' required type="text" placeholder="Hash"">
          </div>
          <div class="input">
            <label>Auth code</label>
            <input id='auth' required type="password" placeholder="">
          </div>
          <input id='reset' type="reset" style="display: none;">
          <button>Create a short url 🔗</button>
        </form>
        <div class='new-url' id='result-container'><a id='result' target='_blank'></a><button onclick="copyUrl('result', 10);">copy</button></li></div>
      </div>
      <div class='links'>
        <button onclick="editButton();" class="edit-button">EDIT</button>
        <h1>Already used URLs</h1>
        <ul>
          <li><strong>Hash</strong><strong>Short link</strong></li>
          ${allKeys.map((key, i) => `<li><strong>${key}</strong><a id=${i} target='_blank' href='https://josee.link/${key}'>josee.link/${key}</a><button onclick="copyUrl(${i});">copy</button></li>`).join('')}
          <p>This project was created from a streaming of <a target="_blank" href="https://www.twitch.tv/midudev">midudev</a>, you can find the original code <a target="_blank" href="https://github.com/midudev/midu-links">here.</a></p>
        </ul>
      </div>
    </main>

    <script>
      function editButton() {
        const $ = id => document.getElementById(id);
        const $createForm = $('create');
        const $deleteForm = $('delete');

        $deleteForm.classList.toggle('active');
        $createForm.classList.toggle('active');
      }

      function copyUrl(id_elemento, limit) {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML.slice(limit));
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
      }

      const $ = el => document.querySelector(el);
      const $formcreate = document.getElementById('form-create');
      const $formdelete = document.getElementById('form-delete');
      const $result = $('#result');
      const $resultdel = $('#resultdel');
      const $reset = $('#reset');
      const $resetdel = $('#resetdel');
      const $resultCont = $('#result-container');

      $formcreate.addEventListener('submit', e => {
        e.preventDefault();

        const auth = $('#auth').value;
        const hash = $('#hash').value;
        const link = $('#link').value;

        fetch(\`/\${hash}\`, {
          method: 'POST',
          headers: { 
            Authorization: auth,
            'X-Destination': link,
          }
        }).then(res => {
          const text = res.ok
            ? '✅ '
            : '❌ Something went BAD!'

            res.ok
              ? $result.setAttribute("href", res.url)
              : $result.removeAttribute("href")
            
            res.ok
              ? $resultCont.classList.add("show")
              : $resultCont.classList.remove("show")

            res.ok && $resultCont.classList.add("active")

            $result.innerText = res.ok 
              ? text + res.url
              : text

            $reset.click();
        })
      })

      $formdelete.addEventListener('submit', e => {
        e.preventDefault();

        const authdelete = $('#auth-delete').value;
        const hashdelete = $('#hash-delete').value;

        fetch(\`/\${hashdelete}\`, {
          method: 'DELETE',
          headers: { 
            Authorization: authdelete,
          }
        }).then(res => {
          const text = res.ok
            ? '✅ Link deleted! Reload the page.'
            : '❌ Something went BAD!'

          $resultdel.innerText = text;
          $resetdel.click();
        })
      })
    </script>
  </body>
</html>
`

addEventListener('fetch', event => {
  console.log('new Request');
  event.respondWith(handleRequest(event.request))
})

const respondWith = ({ body = null, contentType = 'text/html', location, status = 200 }) => 
  new Response(body, {
    status,
    headers: { Location: location, 'Content-Type': contentType }
  })

const handleGet = async ({ hash }) => {
  const location = await URLS.get(hash)
  return location
    ? respondWith({ status: 302, location })
    : respondWith({ status: 404 })
}

const handlePost = async ({ hash, headers }) => {
  hash = hash || Math.random().toString(36).slice(2,9);

  const previousDestination = await URLS.get(hash)
  if (previousDestination) respondWith({ status: 409 })
  
  const destination = headers.get('x-destination')
  await URLS.put(hash, destination);
  return respondWith({ status: 201 })
}

const handleDelete = async ({ hash }) => {
  await URLS.delete(hash)
  return respondWith({ status: 204 })
}

const handleUpdate = async () => {
}

const renderUI = async () => {
  const { keys } = await URLS.list();
  const allKeys = keys.map(key => key.name);
  const body = createIndexHtml({ allKeys });

  return respondWith({ body })
}

const checkAuth = ({ auth }, doAfterAuth) => 
  auth === AUTH_SECRET
    ? doAfterAuth()
    : respondWith({ status: 401 })

/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {
  const { headers, method, url } = request;
  const auth = request.headers.get('Authorization')

  const urlObject = new URL(url);
  const { pathname } = urlObject;
  const hash = pathname.slice(1);

  if (method === 'GET') return hash ? handleGet({ hash }) : renderUI()

  if (method === 'POST') {
    return checkAuth({ auth }, () => handlePost({ hash, headers }))
  }
  if (method === 'DELETE') {
    return checkAuth({ auth }, () => handleDelete({ hash }))
  }
  if (['PUT', 'PATCH'].includes(method)) {
    return checkAuth({ auth }, () => handleUpdate({ hash }))
  }

  return respondWith({ status: 405 })
}
