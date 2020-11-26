const { execSync } = require("child_process");
const core = require('@actions/core')

// console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

// execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start`)

// console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

run()

async function run() {
    try {
        const args = (core.getInput('args')) ? `--args "${core.getInput('args')}"` : ''

        const browsers = core.getInput('browsers')
        if (!browsers) throw new Error('browsers param is required')

        const lastVersions = core.getInput('last-versions')
        if (!lastVersions) throw new Error('last-versions param is required')

        console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

        execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start ${args} --browsers '${browsers}' --last-versions ${lastVersions}`)

        console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

    } catch (error) {
        core.setFailed(error.message)
    }
}