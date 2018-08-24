var users = ["Tyler", "Sarah", "Dan"]

function getUsers() {
  return users
}function usersWrapper () {
  var users = ["Tyler", "Sarah", "Dan"]

  function getUsers() {
    return users
  }

  APP.getUsers = getUsers
}

usersWrapper()