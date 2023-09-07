function main() {
  let user = { name: 'aaron' };

  mutateProps({ user, change });

  function change(name) {
    user.name = name;
  }

  checkName(user.name);
}

function checkName(name) {
  if (name === 'aaron') {
    console.log('nothing');
  } else {
    console.log('name changed');
  }
}

function mutateProps(props) {
  // change user name to 'other'
  props.change('other');
}

main();
