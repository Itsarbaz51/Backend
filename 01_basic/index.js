require("dotenv").config();

const express = require("express");

const app = express();
const port = 5000;

const githubData = {
  login: "Itsarbaz51",
  id: 141617702,
  node_id: "U_kgDOCHDqJg",
  avatar_url: "https://avatars.githubusercontent.com/u/141617702?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Itsarbaz51",
  html_url: "https://github.com/Itsarbaz51",
  followers_url: "https://api.github.com/users/Itsarbaz51/followers",
  following_url:
    "https://api.github.com/users/Itsarbaz51/following{/other_user}",
  gists_url: "https://api.github.com/users/Itsarbaz51/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Itsarbaz51/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Itsarbaz51/subscriptions",
  organizations_url: "https://api.github.com/users/Itsarbaz51/orgs",
  repos_url: "https://api.github.com/users/Itsarbaz51/repos",
  events_url: "https://api.github.com/users/Itsarbaz51/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Itsarbaz51/received_events",
  type: "User",
  site_admin: false,
  name: "Arbaz khan",
  company: null,
  blog: "",
  location: "Jaipur, Rajasthan",
  email: null,
  hireable: null,
  bio: "I'm BCA first year student || Tech Enthusiast. Passionate about coding, software development, and emerging technologies",
  twitter_username: "itsarbaz51",
  public_repos: 8,
  public_gists: 0,
  followers: 2,
  following: 2,
  created_at: "2023-08-07T07:35:46Z",
  updated_at: "2024-02-15T04:56:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/day", (req, res) => {
  res.send("01 day first backend localhost port learn")
})

app.get("/github", (req, res) => {
  res.json(githubData)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
