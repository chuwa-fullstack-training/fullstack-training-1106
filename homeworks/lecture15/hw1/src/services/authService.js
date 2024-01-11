export const authService = {
    isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
    user: localStorage.getItem("user") || "",
  
    login(username, password) {
      const isValidUser = username === "username" && password === "password";
      this.isAuthenticated = isValidUser;
      if (isValidUser) {
        this.user = username;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", username);
      }
      return isValidUser;
    },
  
    logout() {
      this.isAuthenticated = false;
      this.user = "";
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  };
  