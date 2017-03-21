export default function clean(title) {
    title = title.replace(/ /g, '_');
    return title.replace(/[^a-zA-Z0-9-_]/g, '');
}

// This function changes all spaces to underscores and removes all characters except a-z, A-Z and 0-9, using some regular expression.
