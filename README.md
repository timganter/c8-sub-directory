# Overview

When running c8 from a sub-directory to test code in a `src` folder one directory up, code coverage doesn't work.

## Steps to reproduce

1. Download this repo
2. `npm install`
3. `npm run test`
4. See that 1 test passes and 100% coverage. Yay! 🎉
5. `cd sub-directory`
6. `npm install`
7. `npm run test`
8. See that 1 test passes and 0% coverage. 😢

## Animation

https://github.com/timganter/c8-sub-directory/assets/1911000/24637a9a-cc95-4d3a-8d95-b9a7cf199304

