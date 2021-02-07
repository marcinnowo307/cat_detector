//NATIVE ADD TO CART
window.addEventListener('message', function (e) {
    if (e.data.topic == "SM_ADDTOCART") {
        var imgOrignal = document.querySelector('#view_full_size img').src;

        document.querySelector('#view_full_size img').src = "https://botland.com.pl/img/art/icon/koszyk.png";
        ajaxCart.add(e.data.id);
        setTimeout(() => {
            document.querySelector('#view_full_size img').src = imgOrignal;
    }, 1000);
    };
});

// function smClosePopup(event) {
//     var popupCloseButton = event.target || e.srcElement;
//     var popup = popupCloseButton.parentNode.parentNode;
//     popup.style.display = "none";
//     popup.nextSibling.style.display = "none";
// }

// (function () {
var shouldShowPopup = false;

var POPUP_TIME_CAP_COOKIE_NAME = "smOTimePopCap";
var POPUP_VIEWS_CAP_COOKIE_NAME = "smOViewsPopCap";
var LAST_CART_COOKIE = "smLastCart";
var DAY_MILLIS = 24 * 60 * 60 * 1000;
var popupIsInitiated = false;
var cartCookieValue = smReadCookie(LAST_CART_COOKIE);
// var conditionUrl = "https://app2.salesmanago.pl/ms/s65qewcaix63vvni/default/pop_up_dynamiczny_porzucony_koszyk_TO_CONDITION.htm?contactId=${contactDetails.id}"

var isCartCookieValueNew = true;

var uuid = smReadCookie('smuuid');
// [#if !contactDetails??]
whichPopup = 3;

// [/#if]

function httpGet(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


var testPopupUrls = {
    POPUP: "pop_up_dynamiczny_neww.htm"
};

var testPopupIds = {
    LIMIT_POPUP: "SM_POPUP"
};


// window.setTimeout(function () {
//     if (!popupIsInitiated) {
//         initPopup();
//     }
// }, 5000);

// window.addEventListener('load',function () {
// var buttonCart = document.getElementById('add_to_cart');
//
// buttonCart.addEventListener('click', function () {
//     console.log('button clicked');
//     if (shouldShowPopup && !popupIsInitiated && window.location.href.includes("8575-bbc-microbit-podstawowy-modul-edukacyjny")) {
//         smInitPopup();
//     }
// });
// })
// console.log(window.location.href);


 if (window.location.href.indexOf("/en/")== -1) {
     var a  = document.getElementsByName("Submit")
for (i = 0 ; i<a.length;i++){
    if(a[i].value = 'Dodaj do koszyka'){
        a[i].addEventListener("click",function(){
            // console.log('button clicked');
            if (!popupIsInitiated && window.location.href.includes("8575-bbc-microbit-podstawowy-modul-edukacyjny")) {
                // console.log("init??")
                smInitPopup();
            }
        });
        break;
    }
}
 }

var inactive;
var popupUrl;


function smInitPopup() {
    // console.log('ddd')
    popupUrl = resolvePopupUrl();

    if (popupUrl) {
        resolvePopupAndCookieBuilders(popupUrl);
        smShowPopupUpdateCookiesAndCheckOnExit(popupBuilder, popupUrl);
        popupIsInitiated = true;
    }

}


function isMobileInactiveTime() {
    if (((window.innerWidth > 0) ? window.innerWidth : screen.width) < 800)
        return 7000;
}

function isCountEven(counter) {
    return counter % 2 == 0;
}

function smIsSiteOneOf(urls) {
    if (null != urls)
        for (var i = 0; i < urls.length; i++)
            if (window.location.toString().indexOf(urls[i]) >= 0)
                return true;
    return false;
}

function resolvePopupUrl() {
    if (isDesktopResolution()) {

        return testPopupUrls.POPUP;

    }
}


function isDesktopResolution() {
    if (((window.innerWidth > 0) ? window.innerWidth : screen.width) > 800) {
        return true;
    } else {
        return false;
    }
}

function smIsPopupViewsOk(popupId, maxPopupViews) {
    return smGetPopupViewsCount(popupId) > maxPopupViews;
}


function smGetPopupViewsCount(popupId) {
    var maxPopupViewsCookieValue = smReadCookie(POPUP_VIEWS_CAP_COOKIE_NAME);
    if (!maxPopupViewsCookieValue)
        return 0;

    var popupViews = smReadValueFromString(maxPopupViewsCookieValue, popupId, "|", ":");
    if (!popupViews)
        return 0;
    return popupViews;
}

function smSetPopupView(popupId, value) {
    var maxPopupViewsCookieValue = smReadCookie(POPUP_VIEWS_CAP_COOKIE_NAME);
    if (maxPopupViewsCookieValue == null)
        maxPopupViewsCookieValue = "";
    if (maxPopupViewsCookieValue.indexOf(popupId) >= 0) {
        var popupViews = smReadValueFromString(maxPopupViewsCookieValue, popupId, "|", ":");
        maxPopupViewsCookieValue = maxPopupViewsCookieValue.replace(popupId + ":" + popupViews, popupId + ":" + value);
    } else {
        maxPopupViewsCookieValue += popupId + ":" + value + "|";
    }
    smCreateCookie(POPUP_VIEWS_CAP_COOKIE_NAME, maxPopupViewsCookieValue, 365)
}

function smResolveClientParams() {
    return "";
}

function randomPopupsToDisplay(arr) {
    var randPopup = Math.floor(Math.random() * arr.length),
        randomUrl = arr[randPopup];

    return randomUrl;
}

function smIsPopupTimeOk(popupId, nextViewAfterMillis) {

    var popupLastViewCookieValue = smReadCookie(POPUP_TIME_CAP_COOKIE_NAME);
    if (!popupLastViewCookieValue)
        return true;

    var popupLastViewTimestamp = smReadValueFromString(popupLastViewCookieValue, popupId, "|", ":");
    if (!popupLastViewTimestamp)
        return true;

    popupLastViewTimestamp = parseInt(popupLastViewTimestamp);

    if (nextViewAfterMillis == null)
        nextViewAfterMillis = 24 * 60 * 60 * 1000;

    return (popupLastViewTimestamp + nextViewAfterMillis < new Date().getTime());
}


function smShowPopup(html, waitMillis) {
    if (waitMillis)
        setTimeout(function () {
            smCreatePopup(html);
        }, waitMillis);
    else
        smCreatePopup(html);
}

function smCreatePopup(html) {
    var node = document.createDocumentFragment();
    var div = document.createElement("div");
    for (div.innerHTML = html; div.firstChild;)
        node.appendChild(div.firstChild);
    document.body.insertBefore(node, document.body.childNodes[0]);
}


var popupBuilder = {
    popupUrl: "https://app2.salesmanago.pl/ms/s65qewcaix63vvni/default/",
    popupWidth: 800,
    popupHeight: 570,
    closingImgWidth: 24,
    closingImgHeight: 24,
    closingImgSource: "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/h4jsu6pc5txybj04/0zpqad8fbblhvnkt/1gewbaz3vklvnxr5.png",
    closingContainerTopOffset: 0,
    closingContainerRightOffset: 0,
    backgroundOpacity: 0.4,
    isOnExit: false,
    waitMillis: 3000,
    cookieName: "",
    inactive: 0,

    buildHtml: function () {
        this.popupUrl += smResolveClientParams();
        var closingImgHtml = "<img onclick='smClosePopup(event);' style='width: " + this.closingImgWidth +
            "px; height: " + this.closingImgHeight +
            "px; cursor:pointer;' src=" + this.closingImgSource + " alt='x' title='close popup'>";

        var closingImgContainerHtml = "<div style='position:absolute; right: " + this.closingContainerRightOffset +
            "px; top: " + this.closingContainerTopOffset +
            "px;  padding: 0; background: none; border: none; z-index: 99999;' id=\"smPopupCloseButton\">" + closingImgHtml + "</div>";

        var backgroundHtml = "<div  id='smPopupBackground' class='salesmanagoBackground' tabindex='1' style='position: fixed; width: 100%" +
            "; height: 100%; background-color: black; opacity: " + this.backgroundOpacity +
            "; filter:alpha(opacity=" + (this.backgroundOpacity * 100) + "); z-index: 1100; overflow: hidden;'></div>";

        var iFrameHtml = "<iframe id='salesmanagoIframe' style='margin: 0; padding: 0; width:" +
            this.popupWidth + "px; height:" + this.popupHeight +
            "px; overflow-y:hidden; overflow-x:hidden; border:none; background: none;' src='" +
            this.popupUrl + "'></iframe>";

        var popupLeftOffset = smResolvePopupLeftOffset(this.popupWidth);
        var popupTopOffset = 50;
        // var popupTopOffset = smResolvePopupTopOffset(this.popupHeight);

        var popupHtml = "<div class='smPopupContainer' style='display: block; width:" +
            this.popupWidth + "px; height: " + this.popupHeight + "px; top: "
            + popupTopOffset + "px !important; left: " + popupLeftOffset +
            "px; position: fixed; background: none; border: none; z-index: 222222;'>" +
            closingImgContainerHtml + iFrameHtml + "</div>" + backgroundHtml;
        return popupHtml;
    }
};


function resolvePopupAndCookieBuilders(popupUrl) {
    if (isLocalhost())
        popupBuilder.popupUrl = "https://app2.salesmanago.pl/ms/s65qewcaix63vvni/default/";

    popupBuilder.popupUrl += popupUrl;
    switch (popupUrl) {
        case testPopupUrls.POPUP :
            cookieUpdater.idsToUpdate.push(testPopupIds.LIMIT_POPUP);
            popupBuilder.popupUrl = "https://app2.salesmanago.pl/ms/s65qewcaix63vvni/default/pop_up_dynamiczny_neww.htm?uuid=" + uuid;
            return;
    }
}


function isHomePage() {
    var url = window.location.href;
    var lastPart = url.substr(url.lastIndexOf('/') - 3);

    if (lastPart == '.dk/')
        return true;
    else
        return false;
}

var popup;
var url;

var tim = 0;

function reload() {
    if (url != null || url != "")
        tim = setTimeout(function () {
            if (smIsPopupTimeOk(popup.cookieName, DAY_MILLIS)) {
                smShowPopupAndUpdateCookies(popup, url);
            }
        }, inactive);
}

function canceltimer() {
    window.clearTimeout(tim);
    reload();
}

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

var cookieUpdater = {
    idsToUpdate: [],
    update: function () {
        for (var i = 0; i < this.idsToUpdate.length; i++) {
            smUpdatePopupLastViewTimestamp(this.idsToUpdate[i]);
            smIncrementPopupViews(this.idsToUpdate[i]);
        }
        this.idsToUpdate.length = 0;
    }
};

function smCreatePopupAndUpdateCookies(popupBuilder, popupUrl) {
    var html = popupBuilder.buildHtml();
    var node = document.createDocumentFragment();
    var div = document.createElement("div");
    for (div.innerHTML = html; div.firstChild;)
        node.appendChild(div.firstChild);
    document.body.insertBefore(node, document.body.childNodes[0]);
    cookieUpdater.update();
    // popupIsInitiated = true;
    if (!isLocalhost())
        smEvent('SM_POPUP:' + popupUrl);
}

function smShowPopupAndUpdateCookies(popupBuilder, popupUrl) {

    if (popupBuilder.waitMillis)
        setTimeout(function () {
            smCreatePopupAndUpdateCookies(popupBuilder, popupUrl);
        }, popupBuilder.waitMillis);
    else
        smCreatePopupAndUpdateCookies(popupBuilder, popupUrl);
}

function smShowPopupUpdateCookiesAndCheckOnExit(popupBuilder, popupUrl) {
    if (popupBuilder.isOnExit) {
        addEvent(document, "mouseout", function (e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName == "HTML") {
                if (smIsPopupTimeOk(popupBuilder.cookieName, DAY_MILLIS)) {
                    smShowPopupAndUpdateCookies(popupBuilder, popupUrl);
                }
            }
        });
    } else {
        smShowPopupAndUpdateCookies(popupBuilder, popupUrl);
    }
}

function smClosePopup(event) {
    var popupCloseButton = event.target || e.srcElement;
    var popup = popupCloseButton.parentNode.parentNode;
    popup.style.display = "none";
    popup.nextSibling.style.display = "none";
}

function smResolvePopupTopOffset(popupHeight) {
    var body = document.body, html = document.documentElement;
    var windowHeight = window.innerHeight || Math.Max(body.clientHeight, html.clientHeight);
    return (windowHeight - popupHeight) / 5;
}

function smResolvePopupLeftOffset(popupWidth) {
    var body = document.body,
        html = document.documentElement;

    var windowWidth = Math.max(body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);
    return (windowWidth - popupWidth) / 2;
}

function smResolveClientParams() {
    return "";
}

function smIncrementPopupViews(popupId) {
    var maxPopupViewsCookieValue = smReadCookie(POPUP_VIEWS_CAP_COOKIE_NAME);
    if (maxPopupViewsCookieValue === null)
        maxPopupViewsCookieValue = "";
    if (maxPopupViewsCookieValue.indexOf(popupId) >= 0) {
        var popupViews = smReadValueFromString(maxPopupViewsCookieValue, popupId, "|", ":");
        maxPopupViewsCookieValue = maxPopupViewsCookieValue.replace(popupId + ":" + popupViews, popupId + ":" + (++popupViews));
    } else {
        maxPopupViewsCookieValue += popupId + ":" + "1" + "|";
    }
    smCreateCookie(POPUP_VIEWS_CAP_COOKIE_NAME, maxPopupViewsCookieValue, 365)
}

function smUpdatePopupLastViewTimestamp(popupId) {
    var popupLastViewCookieValue = smReadCookie(POPUP_TIME_CAP_COOKIE_NAME);
    if (popupLastViewCookieValue == null)
        popupLastViewCookieValue = "";
    if (popupLastViewCookieValue.indexOf(popupId) >= 0) {
        var popupLastViewTimestamp = smReadValueFromString(popupLastViewCookieValue, popupId, "|", ":");
        popupLastViewCookieValue = popupLastViewCookieValue.replace(popupId + ":" + popupLastViewTimestamp, popupId + ":" + new Date().getTime());
    } else {
        popupLastViewCookieValue += popupId + ":" + new Date().getTime() + "|";
    }
    smCreateCookie(POPUP_TIME_CAP_COOKIE_NAME, popupLastViewCookieValue, 365);
}

function isLocalhost() {
    return window.location.toString().indexOf("http://localhost/") >= 0;
}

function smGetItemValue(itemString, valueSeparator) {
    return itemString.substring(itemString.indexOf(valueSeparator) + 1);
}

function smReadValueFromString(itemsString, requestedKey, itemSeparator, valueSeparator) {
    var items = itemsString.split(itemSeparator);
    for (var i = 0; i < items.length; i++) {
        var itemString = items[i].trim();
        if (itemString.startsWith(requestedKey))
            return smGetItemValue(itemString, valueSeparator)
    }
    return "";
}

function smReadCookie(cookieName) {
    return smReadValueFromString(document.cookie, cookieName, ";", "=");
}


// })();

(function () {
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const build = (url) => {
      width = window.innerWidth > 600 ? 310 : 280
        let div = document.createElement("div")
        div.style.width = width + "px"
        div.style.height = "610px"
        div.style.position = "fixed"
        div.style.transition = "1s"
        div.style.zIndex = "9999999"
        div.style.backgroundColor = "white"
        let hoverable = document.createElement("div")
        hoverable.style.width = "265px"
        hoverable.style.height = "50px"
        hoverable.textContent = "Darmowa dostawa jest blisko"
        hoverable.style.color = "#ffffff"
        hoverable.style.fontFamily = "'Century Gothic', Arial, Verdana, sans-serif"
        hoverable.style.fontSize = "14px"
        hoverable.style.textAlign = "center"
        hoverable.style.lineHeight = "35px"
        hoverable.style.userSelect = "none"
        hoverable.style.backgroundColor = "#e74b3d"
        hoverable.style.position = "absolute"


        if(window.innerWidth > 600){
            hoverable.style.top = "265px"
        }else{
         hoverable.style.top = "unset"
            hoverable.style.bottom = "-45px"
        }
       
        hoverable.style.left = "-50px"
        hoverable.style.transform = "rotate(-90deg)"
        hoverable.style.transformOrigin = "0 0"
        hoverable.style.display = "flex"
        hoverable.style.justifyContent = "space-between"
        hoverable.style.alignItems = "center"
        hoverable.style.padding = "5px 10px 5px 20px"
        hoverable.style.boxShadow = "rgba(0, 0, 0, 0.25) 3px -13px 13px 2px"
        hoverable.style.borderTopLeftRadius = "5px"
        hoverable.style.borderTopRightRadius = "5px"
        let icon = document.createElement("img")
        icon.src = "https://s3-eu-west-1.amazonaws.com/salesmanagoimg/s65qewcaix63vvni/vdvaww9wxpot2ds1/d056x9qm3xjf9bgo.png"
        icon.style.width = "28px"
        icon.style.height = "28px"
        icon.style.transform = "rotate(90deg)"
        hoverable.appendChild(icon)
        div.appendChild(hoverable)
        let iframe = document.createElement("iframe")
        iframe.src = url
        iframe.style.border = "none"
        iframe.style.width = width + "px"
        iframe.style.height = "610px"
        iframe.style.transition = "0.5s"
        div.appendChild(iframe)
        if (window.innerWidth > 600)
            div.style.bottom = "100px"
        else
            div.style.top = "5px"
        div.style.right = "-" + width + "px"
        document.body.appendChild(div)
        document.body.style.overflowX = "hidden"
        hoverable.addEventListener("click", function () {
            if (div.style.right != "0px") {
                div.style.right = "0px"
                iframe.style.boxShadow = "-7px 0px 12px 5px rgba(0,0,0,0.25)"
            } else {
                div.style.right = "-" + width + "px"
                iframe.style.boxShadow = ""
            }
        })
    }
    if (window.location.href.includes("zamowienie")) {
        let productsIds = []
        let sum = 0
        let observer = new MutationObserver(function (mutations) {
            if (document.getElementById("confirmCheckout")) {
                observer.disconnect()
                let products = document.getElementsByClassName("checkout-single-item")
                sum = parseFloat(document.getElementById("total_product").textContent.replace(/,/, '.'))
                for (let element of products) {
                    productsIds.push(element.getAttribute("id").slice(8).slice(0, element.getAttribute("id").slice(8).indexOf("_")))
                }
                if (sum < 300 && productsIds.length > 0) {
                    let urlString = "https://app2.salesmanago.pl/ms/s65qewcaix63vvni/default/SIDEBAR_DYNAMICZNY.htm?cartValue=" + sum + "&cartProds="
                    productsIds.forEach((element) => urlString += element + ",")
                    urlString = urlString.slice(0, -1)
                    let smuuid = getCookie("smuuid")
                    if (smuuid != "")
                        urlString += "&uuid=" + smuuid
                    let contactId = getCookie("smclient")
                    if (contactId != "")
                        urlString += "&contactId=" + contactId
                    console.log(urlString, sum)
                    build(urlString)
                }
            }
        })
        observer.observe(document, {
            attributes: false,
            childList: true,
            characterData: false,
            subtree: true
        });
    }
})();