export function simplifyContent(htmlString: string): string {
    let imgRegexReplacer = /<div class="se-component se-image-container[^>]+><figure[^>]*><img[^>]+src="([^"]+)"[^>]*><\/figure><\/div>/g;

    return htmlString.replace(imgRegexReplacer, (match, srcValue) => {
        return `<img src="${srcValue}" />`;
    });
}