"use strict";

let baseURL = "https://task.samid.uz/v1/user";

let token = localStorage.getItem('token');

// ======================= LOGIN FORM start ==================== //

const login = (e) => {

    e.preventDefault();

    const userNames = $("#userNames").value.trim();
    const userPasswords = $("#userPasswords").value.trim();

    const params = {
        username: userNames,
        password: userPasswords,
    };

    if (userNames.length === 0 || userPasswords.length === 0) {
        alert("Please enter your username and email address");
    } else {
        fetch(`${baseURL}/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(params)
        })
            .then((resolve) => resolve.json())
            .then((result) => {
                if (result.code === 1) {
                    localStorage.setItem("token", result.data.token);
                    localStorage.setItem("user", result.data.username);
                    alert(` ${result.data.username} welcome to admin dashboard`);
                    setInterval(() => {
                        location.replace('./index.html');
                    }, 1000)
                } else {
                    alert(result.message)
                }
            });

    }
}



$("#login").addEventListener("submit", (e) => {
    login(e);
})

// ======================= LOGIN FORM end ==================== //

