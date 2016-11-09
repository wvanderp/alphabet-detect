var alphabets = {
    "Latin": new RegExp("[A-Za-z]"),
    "Cyrillic": new RegExp("[\u0400-\u04FF\u2DE0-\u2DFF\uA640-\uA69F\u1C80-\u1C8F]"),
    "Greek": new RegExp("[\u0370-\u03FF\u1F00-\u1FFF]"),
    "Armenian": new RegExp("[\u0530-\u058F\uFB00-\uFB17]"),
    "Georgian": new RegExp("[\u10A0-\u10FF\u2D00-\u2D2F]"),
    "Hangul": new RegExp("[\uAC00-\uD7AF\u3130-\u318F\u3200-\u32FF\uA960-\uA97F\uD7B0-\uD7FF\uFF00-\uFFEF]"),
    "Arabic": new RegExp("[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]"),
    "Hebrew": new RegExp("[\u0590-\u05FF\uFB1D-\uFB4F]"),
    "Hanzi": new RegExp("[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]"),
    "Hiragana": new RegExp("[\u3040-\u309F]"),
    "Katakana": new RegExp("[\u30A0-\u30FF\u31F0-\u31FF\u3200-\u32FF\uFF00-\uFFEF]"),
    "numbers": new RegExp("[0-9]")
};

function detect(string){
    return detectAll(string)[0][0];
}

function detectAll(string){
    var results = [];

    for (var i = 0, len = string.length; i < len; i++) {
        //console.log(string[i]);
        var alphabet = letterMatch(string[i]);

        if(typeof results[alphabet] == "undefined") results[alphabet] = 0
        results[alphabet] = results[alphabet] + 1
    }

    results = results.sort(function(a,b){
        return a - b;
    });

    var tuples = [];

    for (var key in results) tuples.push([key, results[key]]);

    tuples = tuples.sort(function(a, b) {
        a = a[1];
        b = b[1];

        return a < b ? 1 : (a > b ? -1 : 0);
    });



    return tuples;
}

function letterMatch(letter){
    if(alphabets.Arabic.test(letter)) return "Arabic";
    if(alphabets.Armenian.test(letter)) return "Armenian";
    if(alphabets.Cyrillic.test(letter)) return "Cyrillic";
    if(alphabets.Georgian.test(letter)) return "Georgian";
    if(alphabets.Greek.test(letter)) return "Greek";
    if(alphabets.Hangul.test(letter)) return "Hangul";
    if(alphabets.Hanzi.test(letter)) return "Hanzi";
    if(alphabets.Hebrew.test(letter)) return "Hebrew";
    if(alphabets.Hiragana.test(letter)) return "Hiragana";
    if(alphabets.Katakana.test(letter)) return "Katakana";
    if(alphabets.Latin.test(letter)) return "Latin";
    if(alphabets.numbers.test(letter)) return "numbers";
    return "undefined";
}


module.exports.detect = detect;
module.exports.detectAll = detectAll;
module.exports.letterMatch = letterMatch;


