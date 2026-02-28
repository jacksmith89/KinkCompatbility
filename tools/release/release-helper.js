const fs = require("fs");
const simpleGit = require("simple-git");

const git = simpleGit();

/*
Release Helper v2 Design Goals:

- Generate changelog-ready draft output
- Detect semantic version from git tags
- Suggest next minor release version
- Filter user-visible commits
*/

function parseVersionTag(tag) {
    const match = tag.match(/v?(\d+)\.(\d+)\.(\d+)/);
    if (!match) return null;

    return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3])
    };
}

function suggestNextVersion(tag) {
    if (!tag) return "v0.1.0";

    const parsed = parseVersionTag(tag);
    if (!parsed) return "v0.1.0";

    // Default strategy: bump minor version
    return `v${parsed.major}.${parsed.minor + 1}.0`;
}

function extractUserVisibleCommits(commits) {
    return commits
        .filter(c => /^(feat|fix|ui|refactor|docs):/.test(c.message))
        .map(c => c.message);
}

async function getLatestVersionTag() {
    try {
        const tags = await git.tags();

        const semanticTags = tags.all
            .filter(t => /^v?\d+\.\d+\.\d+$/.test(t))
            .sort((a, b) => {
                const va = parseVersionTag(a);
                const vb = parseVersionTag(b);

                if (!va || !vb) return 0;

                return (
                    va.major - vb.major ||
                    va.minor - vb.minor ||
                    va.patch - vb.patch
                );
            });

        return semanticTags.length
            ? semanticTags[semanticTags.length - 1]
            : null;

    } catch {
        return null;
    }
}

async function main() {
    console.log("\n=== Release Helper Draft Generator ===\n");

    const latestTag = await getLatestVersionTag();

    console.log("Latest Release Tag:", latestTag || "None");

    const commits = latestTag
        ? await git.log([`${latestTag}..HEAD`])
        : await git.log();

    const candidateCommits = extractUserVisibleCommits(commits.all);

    console.log("\n--- Draft CHANGELOG Entry ---\n");

    if (!candidateCommits.length) {
        console.log("No user-visible changes detected since last release.");
    } else {
        console.log(`## [${suggestNextVersion(latestTag)}] – In Progress\n`);

        console.log("### Changes\n");

        candidateCommits.forEach(msg => {
            console.log("- " + msg);
        });

        console.log("\n(Review and edit before publishing)");
    }

    console.log("\n--- Suggested Next Version ---");
    console.log(suggestNextVersion(latestTag));

    console.log("\n");
}

main();