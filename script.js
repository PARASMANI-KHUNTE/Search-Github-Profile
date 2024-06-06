const apiurl = "https://api.github.com/users/"
const picUrl = ""
const profilePic = document.getElementById("profilePic")
const title = document.getElementById("userTitle")
const bio = document.getElementById("bio")
const follower = document.getElementById("follower")
const following = document.getElementById("following")
const fetchUser = async(username) => {
    const response = await fetch(apiurl  + username);
    const data = await response.json()
    const picUrl = data.avatar_url
    title.innerHTML = data.login
    bio.innerHTML = data.bio
    follower.innerHTML = `Follower : ${data.followers}`
    following.innerHTML = `Following : ${data.following}`
    follower.href = data.followers_url
    following.href = data.following_url
    profilePic.src = picUrl
    repo.href = data.repos_url
    console.log(data.html_url)
    console.log(data);


}
function getuser(){
        const urin = document.getElementById("userInput")
        const userInput = urin.value;
        if(userInput == ''){
            alert("Please enter username.")
        }else{
            const panel =  document.getElementById("panel")
            panel.style.display = "block"
            fetchUser(userInput)
        }
       
}





