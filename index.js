const { execSync } = require("child_process");
const core = require('@actions/core')

// console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

// execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start`)

// console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

run()

async function run() {
    try {
        const args = (core.getInput('args')) ? `--args ${core.getInput('args')}` : ''
        const browsers = core.getInput('browsers')
        const versions = core.getInput('last-versions')

        console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

        execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start ${args} --browsers ${browsers} --last-versions ${versions}`)

        console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

    } catch (error) {
        core.setFailed(error.message)
    }
}