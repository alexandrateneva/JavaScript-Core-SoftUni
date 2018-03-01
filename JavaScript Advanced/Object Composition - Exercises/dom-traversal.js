function findDeepestElement(selector) {
    let element = $(selector);
    let children = element.children();
    if (children.length === 0) {
        $(selector).addClass("highlight");
        return;
    }
    let child;
    while (children.length > 0) {
        child = children[0];
        for (let i = 0; i < children.length; i++) {
            let current = children[i].querySelectorAll("*").length;
            if (current > child.querySelectorAll("*").length) {
                child = children[i];
            }
        }
        children = $(child).children();
    }
    $(child).addClass("highlight");
    $(child).parentsUntil($(selector).parent()).addClass('highlight');
}