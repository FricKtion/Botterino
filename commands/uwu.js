// Inspired by https://mxmbrook.co.uk/tools/uwu

exports.run = (client, message, args) => {
    var uwuText = args.join(' ');
    var faces = [":3","(^Â³^)","uwu","OwO",">.<"];
    var facecount = Math.max(1,Math.round(uwuText.length/10)*Math.random());

    uwuText = uwuify(uwuText);
    for(var i = facecount; i > 0; i--){
        var pivot = Math.floor(Math.random()*uwuText.length);
        uwuText = uwuText.substring(0,pivot)+(uwuText.substring(pivot)+" ")
            .replace(" "," "+faces[Math.floor(Math.random()*faces.length)]+" ");
    }

    message.delete();
    message.channel.send(uwuText);
};

function uwuify(str) {
    // TODO - Figure out what to do with the commented out RegEx, would be nice if it was usable
    const uwuMap = {
        r: "w",
        l: "w",
        youw: "ur",
        you:"u",
        // TODO - test this one below, it's not throwing syntax errors anymore
        //"/awe(?![a-z])/": "r",
        ove: "uv",
        //(n)([aeiou]): "$1y$2"
        na: "nya",
        ne: "nye",
        ni: "nyi",
        no: "nyo",
        nu: "nyu"
    };

    var tester = new RegExp(Object.keys(uwuMap).join("|"),"gi");

    return str.replace(tester, function(matched) {
        return uwuMap[matched];
    });
}