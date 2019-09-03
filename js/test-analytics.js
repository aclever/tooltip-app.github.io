$(document).ready(function () {
    $("#analyticsSend").on("click", function () {
        console.log('send data');

        var composedData = {
            secret: "secret",
            message_id: "MESSAGE_4",
            project_id: "PROJECT_4",
            event_type: "visit",
            user_id: "USER_1", // This value is not used
            time_stamp: ((new Date()) / 1000) // django time stamp format
        };

        $.ajax({
            url: "https://analytics.tooltip.io/api/collect/",
            type: 'POST',
            crossDomain: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(composedData)
        });
    });

    $("#getAnalytics").on("click", function () {
        $.ajax({
            url: "http://analytics.tooltip.io/api/message-stats/MESSAGE_4/",
            type: 'GET',
            crossDomain: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("analytics result");
                console.log(data);
            }
        });
    });
});