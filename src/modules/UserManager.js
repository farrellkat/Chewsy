import settings from "./settings"

export default {
  get(id) {
    return fetch(`${settings.appDataURL}/users/${id}`).then(e => e.json())
  },
  matchLoginEmail(email) {
    return fetch(`${settings.appDataURL}/users/?email=${email}`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${settings.appDataURL}/users/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  addUser(obj) {
    return fetch(`${settings.appDataURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  getAllUsers() {
    return fetch(`${settings.appDataURL}/users`).then(e => e.json())
  },
  updateFavorite(id, obj) {
    return fetch(`${settings.appDataURL}/favorites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  deleteFavorite(id) {
    return fetch(`${settings.appDataURL}/favorites/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  getUserFavorites(id) {
    return fetch(`${settings.appDataURL}/favorites/?userId=${id}`).then(e => e.json())
  },
  getOneUserFavorite(id) {
    return fetch(`${settings.appDataURL}/favorites/${id}`).then(e => e.json())
  },
  addUserFavorite(obj) {
    return fetch(`${settings.appDataURL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  searchUP(email, password) {
    return fetch(
      `${settings.appDataURL}/users?email=${email}&password=${password}`
    ).then(e => e.json())
  },
  searchEmail(email) {
    return fetch(`${settings.appDataURL}/users?email=${email}`).then(e =>
      e.json()
    )
  }
}
