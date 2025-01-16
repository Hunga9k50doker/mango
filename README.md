# MANGO TESTNET BOT

## Prerequisite

- Git
- Node JS (v22)

#New

Mango Testnet

➡️ Register : [HERE](https://task.testnet.mangonetwork.io/?invite=HospvH)

- Download Mango Wallet (https://chromewebstore.google.com/detail/mango-wallet/jiiigigdinhhgjflhljdkcelcjfmplnd) (Extension)
- Backup Phrase
- Claim Faucet on your wallet extension
- Go To [Web](https://task.testnet.mangonetwork.io/?invite=HospvH)
- Complete Bind Social Media Accounts and JOIN NOW
- Go to [Event Page](https://task.testnet.mangonetwork.io/events)
- Complete Task on the Task List ( Swap , Bridge )
- Login Daily
- Done

## BOT FEATURE

- Multi Account
- Support PK
- Proxy Support
- Daily Claim Faucet
- Daily Mango Swap
- Daily BeingDex Beta DAPP
- Daily Check In
- Daily Bridge (**Soon**)

## Setup & Configure BOT

### Linux

1. Clone project repo
   ```
   git clone https://github.com/Hunga9k50doker/mango && cd mango
   ```
2. Run
   ```
   npm install
   ```
3. Configure your accounts
   ```
   nano privateKeys.txt
   ```
4. To run Auto TX
   ```
   npm run start
   ```

### Windows

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Hunga9k50doker/mango
   ```
   and cd to project dir
   ```
   cd mango
   ```
3. Run
   ```
   npm install && npm run setup
   ```
4. Navigate to `mango` directory.
5. Navigate to `accounts` directory.
6. Now open `privateKeys.txt` and setup your accounts.
7. Now Back to `mango` directory and Navigate to `proxies.txt` to add proxy if need
8. Back to `mango` directory.
9. To start the app open your `Command Prompt` or `Power Shell`
10. To run auto Tx Bot
    ```
    npm run start
    ```

## Update Bot

To update bot follow this step :

1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot
4. if any eror happen check `log/app.log`

## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.
