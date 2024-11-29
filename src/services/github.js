import axios from "axios";

const fetchGitHubDetails= async (username)=>{
  const url = `https://api.github.com/users/${username}/events`;
  try{
    const response = await axios.get(url);
    return response.data;
  }catch(err){
    throw new Error("Failed to fetch events");
  }
}

export default fetchGitHubDetails;