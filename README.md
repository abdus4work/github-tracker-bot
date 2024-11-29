# GitHub Activity Tracker Bot
A Telegram bot built with node.js that tracks GitHub user activity.
User can use `/track` command to fetch the latest activity of a GitHub user.

--- 
## Features
- **Start Command**: Provides a welcome message and instruction.
- **Track Command**: Fetches the latest activity of a specified GitHub user.
---
## Installation
Follow these steps to get your bot up and running locally.

### Prerequisites
Make sure you have the following installed.

- Node.js
- Telegram Account
- Bot Token create by BotFather.

### 1. Bot token generation

1. Search @BotFather
2. /newbot
3. Choose name of the boot
4. Choose username
5. you will get API Token

### 2. Clone the Repository

```bash
git clone https://github.com/abdus4work/github-tracker-bot.git
```
### 3. Install dependencies

```bash
cd github-tracker-bot
npm i
```
### 4. Configure environments variable
create `.env` file in the root directory of the project and add following content.

```
API_TOKEN=your-bot-token
```

### 5. Run the Bot

```bash
npm start
```

## Commands
- `/start`: Start the bot and get a welcome message.
- `/track <github-username>`: Track the latest GitHub activity of a specified user.

## Contributing
Feel free to fork the repository and submit pull requests. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Create a new pull request.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- `node-telegram-bot-api `for the Telegram Bot API wrapper.
- `GitHub API` for fetching user activity data.