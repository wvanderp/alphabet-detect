"use strict";
var assert = require('assert');
var should = require("should");

var ad = require("./index.js");

describe("Latin", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "An alphabet is a standard set of letters";
            should(ad.detect(string)).equal("Latin");
        })
    })
});


describe("Cyrillic", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "форма письменности, основанная на стандартном наборе знаков";
            should(ad.detect(string)).equal("Cyrillic");
        })
    })
});


describe("Greek", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "Αλφάβητο είναι ένα σύστημα γραφής που γράφεται με σύμβολα τα οποία εικονίζουν τους στοιχειώδεις";
            should(ad.detect(string)).equal("Greek");
        })
    })
});


describe("Armenian", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "Այբուբենը, յուրաքանչյուր լեզվի համար գործածվող տառերի ամբողջություն է՝ ավանդաբար պահպանվող որոշակի դասավորությամբ";
            should(ad.detect(string)).equal("Armenian");
        })
    })
});


describe("Georgian", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "ან რაიმე სხვა სიმბოლოებისა, რომელთაგან თითოეული ცალკეულ ფონემას, ამა თუ იმ ენის შემადგენელ ბგერით ერთეულს";
            should(ad.detect(string)).equal("Georgian");
        })
    })
});


describe("Hangul", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "하나하나의 문자가 원칙적으로 하나의 자음 또는 모음의 음소를 나타내는 문자 체계이다";
            should(ad.detect(string)).equal("Hangul");
        })
    })
});


describe("Arabic", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "ي طريقة الكتابة حرفية ليست مقطعية ولا رسم فكري. اسمها حسب بداية كثير من الأبجديات بحروف: أ، ب، ج، د بعض الأبجديات تكتب الحركات، والبعض لا تكتبها.";
            should(ad.detect(string)).equal("Arabic");
        })
    })
});


describe("Hebrew", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "אָלֶפְבֵּית הוא אוסף סדור של אותיות, שהן סימנים גרפיים המייצגים עיצורים ותנועות.";
            should(ad.detect(string)).equal("Hebrew");
        })
    })
});


describe("Hanzi", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "字母系統是拼音文字系统当中最小的，数量最少的区别性单位，即字位，如拉丁字母源自拉丁语采用的字母、阿拉伯字母源自阿拉伯语采用的字母";
            should(ad.detect(string)).equal("Hanzi");
        })
    })
});


//japanese
describe("Hiragana", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "あいうえおかきくけこさしすせそたちつてと";
            should(ad.detect(string)).equal("Hiragana");
        })
    })
});

describe("Katakana", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "アイウエオカキクケコサシスセソタチツテト";
            should(ad.detect(string)).equal("Katakana");
        })
    })
});


describe("undefined", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "..()_\"::;--;;~++~==~~";
            should(ad.detect(string)).equal("undefined");
        })
    })
});

describe("numbers", function () {
    describe("#detect", function () {
        it("should be detected corectly", function () {
            var string = "1234567890";
            should(ad.detect(string)).equal("numbers");
        })
    })
});

