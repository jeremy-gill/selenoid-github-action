const { execSync } = require("child_process");
const core = require('@actions/core')

// console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

// execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start`)

// console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

run()

async function run() {
    try {
        const limit = core.getInput('limit')
        const browsers = core.getInput('browsers')
        const versions = core.getInput('versions')

        console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

        execSync(`curl -s https://aerokube.com/cm/bash | 
        bash && ./cm selenoid start --args ${limit} --browsers ${browsers} --last-versions ${versions}`)

        console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

    } catch (error) {
        core.setFailed(error.message)
    }
}