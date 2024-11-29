import fetchGitHubDetails from "../services/github.js";

const track = async (bot,msg,match) => {
  const chatId=msg.chat.id;
  const username=match[1];
  try{
    const activity = await fetchGitHubDetails(username);
    if(activity.length===0){
      bot.sendMessage(chatId,`${username} has no recent activity`);
    }
    else{
      const latestActivity = activity[0];
      bot.sendMessage(chatId,`
      Latest activity for ${username}
      - Type: ${latestActivity.type}
      - Repo: ${latestActivity.repo.name}
      -Time: ${new Date(latestActivity.created_at).toLocaleDateString()}`);
    }
  }catch(err){
    bot.sendMessage(chatId,`There was an error while fetching ${username}
    Error: ${err}`);
  }
};

export default track;