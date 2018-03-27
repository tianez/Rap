
export default function jsonparse(string) {
    let data = string.replace(/&quot;/g, '"');
    data = JSON.parse(data);
    return data
}