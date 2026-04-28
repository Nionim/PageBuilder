import { pathAliases } from './config.js'

function resolveAlias(pathWithAlias) {
    for (const [alias, realPath] of Object.entries(pathAliases)) {
        if (pathWithAlias.startsWith(alias)) {
            return pathWithAlias.replace(alias, realPath);
        }
    }
    return pathWithAlias;
}

async function loadHTML(url, targetID) {
    const target = document.getElementById(targetID);
    if (!target) return;

    const pathLAYOUT = resolveAlias(url)
    try {
        const response = await fetch(pathLAYOUT);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();

        target.innerHTML = html;
    } catch(error) {
        console.error(`Cannot found ${url}`, error);
    }
}

loadHTML('$layout/BasePage.html', 'test_page');