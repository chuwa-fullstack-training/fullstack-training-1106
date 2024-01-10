function main() {
  let user = { name: 'aaron' };
  userInfo({ user, change });

  function change(name) {
    user.name = name;
  }

  checkName(user.name);
}

function userInfo({ user, change }) {
  // user.name = 'alex';
  change('alex')
}

function checkName(name) {
  if (name === 'aaron') {
    console.log('nothing');
  } else {
    console.log('name changed');
  }
}

main();
