
async function fetchGitProf() {
    try {
        const response = await fetch("https://api.github.com/users/Gulnar28");
        const data = await response.json();
        console.log(data);
  
        const name=document.querySelector(".name");
        const username=document.querySelector(".title");
        const followers=document.querySelector(".followers");
        const following=document.querySelector(".following");

        
        name.innerHTML = data.name;
        username.innerHTML = data.login;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following; 
    }


        catch (error) {
        console.log("Error:", error);
     }
  }
  
    fetchGitProf();