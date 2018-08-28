function compareOptions(o, n) {
    if (!!o.media != !!n.options.media) console.error('[Options] No media ' + o._id);
    if ((o.buttons) && (n.options.buttons.length == 0)) console.error('[Options] No buttons ' + o._id);

    if ((o.media) && (o.media.contentType != n.options.media.contentType)) console.error('[Options] Wrong content type in media ' + o._id);
    if (o.media && (o.media.url != n.options.media.url)) console.error('[Options] Wrong url in media ' + o._id);
    if ((o.buttons) && (o.buttons.length != n.options.buttons.length)) console.error('[Options] buttons length ' + o._id);


    if (o.media && (o.media.url.indexOf("static.tooltip.io") != -1)) {
        console.log(o._id);
        console.log("[OLD SERVER] " + o.media.url);
        console.log("[NEW SERVER] " + n.options.media.url);
    }
}


function comparePageRules(o, n) {
    if (!o.pageRules) {
        var emulate = {
            pages: ((o.showRules.pageRule == "regexp") && o.showRules.regExp != "*") ? [o.showRules.regExp] : [],
            rule: (o.showRules.pageRule == "regexp") ? "specific" : "all"
        };

        if (emulate.rule != n.pageRules.rule) console.error('[Page Rules] rule ' + o._id);
        if (JSON.stringify(emulate.pages) != JSON.stringify(n.pageRules.pages)) console.error('[Page Rules] pages ' + o._id);

        return false;
    }


    if (o.pageRules.rule != n.pageRules.rule) console.error('[Page Rules] rule ' + o._id);
    if (JSON.stringify(o.pageRules.pages) != JSON.stringify(n.pageRules.pages)) console.error('[Page Rules] pages ' + o._id);
}


function compareShowRules(o, n) {
    if (o.showRules.device && (o.showRules.device.mobile != n.showRules.device.mobile)) console.error('[Show Rules] wrong device');
    if (o.showRules.device && (o.showRules.device.desktop != n.showRules.device.desktop)) console.error('[Show Rules] wrong device');

    if ((!o.showRules.device)) {
        console.log("NO DEVICES FIELD CAMPAIGN in " + o._id);
    }

    if ((!o.showRules.device) && (!n.showRules.device.mobile && !n.showRules.device.desktop)) console.log("[Show Rules] must be true");

    if (o.showRules.display != n.showRules.display) console.error('[Show Rules] wrong show rule');
    if (o.showRules.publish != n.showRules.preview) console.error('[Show Rules] wrong preview rule');
    if (o.showRules.showed != n.showRules.publish) console.error('[Show Rules] wrong preview rule');
}

function compareSegmentation(o, n) {
    // console.log('compare segmentation');

    if (!o.segmentation) {
        return false;
    }


    if (o.segmentation.rulesActive != n.segmentation.rulesActive) console.error("[Segmentation] Rule is disabled");
    if (o.segmentation.contextLogic != n.segmentation.contextLogic) console.error("[Segmentation] contextLogic ERROR");

    if (o.segmentation.rules.length != n.segmentation.rules.length) console.error("[Segmentation] rule length ERROR");


    if (!n.contextLogic) {
        console.error("lost context logic in " + o._id);
    }
}


function compareScheduling(o, n) {
    if (!o.scheduling) {
        if (!(n.scheduling.schedulingActive === false)) console.error("[Scheduling] check old");
        return false;
    }

    if ((o.scheduling.schedulingActive === false) && (n.scheduling.schedulingActive === false)) return true;

    if (o.scheduling.schedulingActive != n.scheduling.schedulingActive) console.error("[Scheduling] Not active!");

    if (!o.scheduling.schedulingActive && !n.scheduling.schedulingActive) return false;

    if (o.scheduling.startDate.date != n.scheduling.startDate.date) console.error("[Scheduling] Start Date problem!");
    if (o.scheduling.weekDays.active != n.scheduling.weekDays.active) console.error("[Scheduling] Week days problem!");
    if (o.scheduling.stopDate.date != n.scheduling.stopDate.date) console.error("[Scheduling] STOP Date problem!");
    if ((o.scheduling.stopDate.active) != (n.scheduling.stopDate.active)) console.error("[Scheduling] STOP Date problem!");
}

function compareTrigger(o, n) {
    if (o.trigger.type != n.trigger.type) console.error("[Trigger] wrong type " + o._id);
    if (o.trigger.delay != n.trigger.delay) console.error("[Trigger] wrong delay " + o._id);
    if (o.trigger.target != n.trigger.target) console.error("[Trigger] wrong target " + o._id);
}

function comparePosition(o, n) {
    if (JSON.stringify(o.position) != JSON.stringify(n.position)) console.error("[Position] not equal position");
}