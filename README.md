# BunnyAPI

`BunnyAPI` is a Node.JS/Express.JS simple API that retrieves JSON from the [BunnyScripts](https://github.com/danner26/BunnyScripts) repo by Daniel W. Anner and Gregory Walsh. This project is originally for our CSIS33-3381 with Dr. Aakash Taneja. In working on this project, we have found a new respect and passion for these Bash Bunny scripts. We plan to keep our research going, and continue to upkeep as well as integrate new features for this API.

## Usage
When using this API, you are free to adapt it for your needs, but it will work best with the tested scripts over in the [BunnyScripts](https://github.com/danner26/BunnyScripts) repo. After following the [wiki setup](https://github.com/danner26/BunnyAPI/wiki/Setup-Install-Guide), you are set to use the API!

### Current API locations
| BunnyScript       | API Base (Port+Path) | Individual API Path | Full API Path                                      |
| ----------------- | -------------------- | ------------------- | -------------------------------------------------- |
| ChromeCreds       | 4001 + /chrome       | /submitChromeCreds  | http(s)://domain.tld:4001/chrome/submitChromeCreds |
