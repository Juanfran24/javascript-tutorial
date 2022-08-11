const getAuthorCommitier = async () => {
  const author = await fetch('https://api.github.com/repos/pushdev-code/javascript-tutorial/commits');
  const authorJson = await author.json();
  return authorJson;
}


const showCommitier = async () => {
  const arrCommitiers = await getAuthorCommitier();
  let html = `
    <ul>
      ${arrCommitiers.map(author => `
        <li>
          <h2>${author?.author?.login}</h2>
          <img src="${author?.author?.avatar_url}" alt="${author?.author?.login}">
        </li>
      `).join('')}
    </ul>
  `;
  document.body.innerHTML = html;
}

showCommitier();