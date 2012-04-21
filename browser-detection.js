var system = (function (window, undefined) {
    var navigator = window.navigator;
    var system = {
        browser: (function () {
            var ua = navigator.userAgent,
                browserName, regArora = /Arora/i,
                regChrome = /Chrome/i,
                regEpiphany = /Epiphany/i,
                regFirefox = /Firefox/i,
                regSafariMobile = /Mobile(\/.*)? Safari/i,
                regInternetExplorer = /Msie/i,
                regMidori = /Midori/i,
                regOpera = /Opera/i,
                regSafari = /Safari/i;

            if (regFirefox.test(ua)) {
                browserName = 'Firefox';
            } else if (regArora.test(ua)) {
                browserName = 'Arora';
            } else if (regChrome.test(ua)) {
                browserName = 'Chrome';
            } else if (regEpiphany.test(ua)) {
                browserName = 'Epiphany';
            } else if (regSafariMobile.test(ua)) {
                browserName = 'SafariMobile';
            } else if (regInternetExplorer.test(ua)) {
                browserName = 'MSIE';
            } else if (regMidori.test(ua)) {
                browserName = 'Midori';
            } else if (regOpera.test(ua)) {
                browserName = 'Opera';
            } else if (regSafari.test(ua)) {
                browserName = 'Safari';
            } else {
                browserName = undefined;
            }
            return browserName;

        }()),
        //End Browser
        systemOs: (function () {
            var ua = navigator.userAgent,
                os, regAndroid = /Android/i,
                regChrome = /CrOS/i,
                regiOS = /iP[ao]d|iPhone/i,
                regLinux = /Linux/i,
                regMac = /Mac OS/i,
                regWin = /windows/i;

            if (regAndroid.test(ua)) {
                os = 'Android';
            } else if (regChrome.test(ua)) {
                os = 'Chrome OS';
            } else if (regiOS.test(ua)) {
                os = 'iOS';
            } else if (regLinux.test(ua)) {
                os = 'Linux';
            } else if (regMac.test(ua)) {
                os = 'Mac OS';
            } else if (regWin.test(ua)) {
                os = 'Windows';
            } else {
                os = undefined;
            }

            return os;
        }()),
        //End System OS
    }; // End Object System
    return system;
}(window));