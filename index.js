const { execSync } = require("child_process");
const core = require('@actions/core')

run()

async function run() {
    try {
        const args = (core.getInput('args')) ? `--args "${core.getInput('args')}"` : ''

        const version = core.getInput('version')
        if (!version) throw new Error('version param is required')

        const browsers = core.getInput('browsers')
        if (!browsers) throw new Error('browsers param is required')

        const lastVersions = core.getInput('last-versions')
        if (!lastVersions) throw new Error('last-versions param is required')

        console.log(`## DOWNLOADING CM AND STARTING SELENOID`);
        const command = `curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid download --version ${version} --force && ./cm selenoid start ${args} --browsers '${browsers}' --last-versions ${lastVersions}`

        execSync(command, {stdio: 'inherit'})
        console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);

        console.log('## CHECKING STATUS')
        execSync('./cm selenoid status', {stdio: 'inherit'})

    } catch (error) {
        core.setFailed(error.message)
    }
}