// ==UserScript==
// @name         Auto odovzdavanie
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automaticky odovzdá na Teams po pridaní súboru, odstránení súboru a ak mám už iba 5 sekúnd do odovzdania
// @author       You
// @match        https://assignments.onenote.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let outer;
    let observer;
    let m;
    let btnSpan;
    let timemax;
    let off = 5;
    function filelist(){
        if(!!observer) return;
        outer = document.querySelector('[class*="assignment-details-left"]');
        console.log(outer);
        const z = outer.querySelectorAll(':scope > *[class*="m-bottom-large"]');
        console.log(z);
        for(let x of z){
            if(x.querySelector(':scope [aria-label="Moja práca"]')){
                m = x.querySelector(':scope [class*="assignment-details-files-container"]');
                console.log(m);
                break;
            }
        }

        if(m){
            observer = new MutationObserver(() => {
                if(m.querySelector(":scope #undefined-card")){
                    console.log("NO");
                    return;
                }
                console.log("files changed");
                turnIn();
            });
            observer.observe(m, {childList: true});
            console.log(observer);
        }
    }

    function button(){
        if(!!btnSpan);
        btnSpan = document.querySelector("#assignmentViewerStudentButtons");
    }

    function turnIn(){
        if(!btnSpan) return;
        let btn;
        btn = btnSpan.querySelector(':scope [data-test="turn-in-button"]');
        console.log(btn);
        if(btn){
            btn.click();
            return;
        }

        return;
    }

    function getTime(){
        if(!!timemax) return;
        let rows = document.querySelectorAll('[class*="metadata-row"] > span');
        let pattern = /(?<=\: ).*/g;
        let time;
        for(let x of rows){
            let s = x.innerText;
            if(!s.includes("Termín odovzdania: ")) continue;
            time = pattern.exec(s)[0];
            console.log(time);
        }
        let parts = time.split(" ");
        let day = parts[0].replace(".","");
        let monthArray = ["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"];
        let month = parts[1];
        let year = parts[2];
        let dt = parts[3].split(":");
        timemax = new Date(year, monthArray.indexOf(month),day, dt[0], dt[1]);
        timemax = Math.floor(timemax.getTime()/1000);
    }

    function lowTime(){
        if(!timemax) return;
        let d = Math.floor(Date.now()/1000);
        if(d + off > timemax){
            console.log("low time");
            turnIn();
        }
    }

    window.setInterval(filelist, 1000);
    window.setInterval(button, 1000);
    window.setInterval(getTime, 1000);
    window.setInterval(lowTime, 1000);
})();
