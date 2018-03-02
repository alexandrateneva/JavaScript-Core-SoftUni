function validateRequest(obj) {
    let method = obj.method;
    let uri = obj.uri;
    let version = obj.version;
    let message = obj.message;

    if (method === undefined || !methodIsValid()) {
        throw new Error('Invalid request header: Invalid Method');
    }
    else if (uri === undefined || !uriIsValid()) {
        throw new Error('Invalid request header: Invalid URI');
    }
    else if (version === undefined || !versionIsValid()) {
        throw new Error('Invalid request header: Invalid Version');
    }
    else if (message === undefined || !messageIsValid()) {
        throw new Error('Invalid request header: Invalid Message');
    }
    else {
        return obj;
    }

    function methodIsValid() {
        let acceptableMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        return acceptableMethods.includes(method);
    }

    function uriIsValid() {
        let regex = /^[a-zA-Z0-9.]+$|\*/g;
        return regex.test(uri);
    }

    function versionIsValid() {
        let acceptableVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        return acceptableVersions.includes(version);
    }

    function messageIsValid() {
        let regex = /^[^<>\\&'"]+$/g;
        return regex.test(message) || message === '';
    }
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});

validateRequest({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: 'hello world'
});
