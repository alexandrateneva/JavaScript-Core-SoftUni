function bugTracker() {
    let obj = (() => {
        let container = [];
        let selector = undefined;
        let currentID = 0;
        let report = function (author, descrition, reproducible, severity) {
            container[currentID] = {
                ID: currentID,
                author: author,
                description: descrition,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            };
            currentID++;

            if(selector){
                print();
            }

        };
        let setStatus = function (id, newStatus) {
            container[id].status = newStatus;
            if(selector){
                print();
            }
        };
        let remove = function (id) {
            container = container.filter(el => el.ID != id);
            if(selector){
                print();
            }
        };
        let sort = function (method) {
            switch(method){
                case 'author':
                    container = container.sort((a,b) => a.author.localeCompare(b.author));
                    break;
                case 'severity':
                    container = container.sort((a,b) => a.severity - b.severity);
                    break;
                case 'ID':
                    container = container.sort((a,b) => a.ID - b.ID);
            }
            if(selector){
                print();
            }
        };
        let output = function (sel) {
            selector = sel;
        };

        let print = function () {
            $(selector).html("");
            for(let bug of container){
                $(selector)
                    .append($('<div>').attr('id', "report_" + bug.ID).addClass('report')
                    .append($('<div>').addClass('body')
                        .append($('<p>').text(bug.description)))
                    .append($('<div>').addClass('title')
                        .append($('<span>').addClass('author').text('Submitted by: ' + bug.author))
                        .append($('<span>').addClass('status').text(bug.status + " | " + bug.severity))));
            }
        };

        return {report, setStatus, remove, sort, output};
    })();

    return obj;
}
