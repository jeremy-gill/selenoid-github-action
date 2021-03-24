# selenoid-github-action v2
This action starts selenoid server for your testing needs inside github actions workflow.

Use this action:
- You want to run selenium webdriver tests (any language, any framework) using Github Actions

Selenoid server is fully compatible with selenium-standalone, and can be used as just drop-in replacement. Full documentation is here: https://aerokube.com/selenoid/latest/

Selenoid is downloaded and configured using CM tool: https://aerokube.com/cm/latest/

1) Add it to your job as step like in this example:
```
on: [push]

jobs:
   steps:
    - name: Start Selenoid
        uses: n-ton4/selenoid-github-action@master
        id: start-selenoid
        continue-on-error: false
        with:
          version: 1.10.1
          args: -limit 10
          browsers: chrome;firefox
          last-versions: 1
    - name: Check Selenoid has been started
        run: curl http://localhost:4444/status
```

2) In your tests, specify selenium-remote url as http://localhost:4444/wd/hub , so they will delegate starting of browser to selenoid:
3) Start your tests as usual
