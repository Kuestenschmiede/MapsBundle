jQuery(document).ready(function() {
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.routePluginEntry = window.c4gMapsHooks.routePluginEntry || [];
    window.c4gMapsHooks.routePluginEntry.push(function(param) {
        let entry = param.entry;
        let feature = param.feature;
        let values = param.values;
        const router = param.router;
        let container = document.createElement("div");
        let upperContainer = document.createElement("div");
        let distanceCont = document.createElement('div');
        distanceCont.innerText = feature.distance + " km";
        $(distanceCont).addClass("station-distance");

        let dieselDiv = document.createElement("div");
        if (feature.d) {
            let dieselLabelDiv = document.createElement("div");
            $(dieselLabelDiv).addClass("fuel-price-label");
            dieselLabelDiv.innerHTML = "Diesel";
            let dieselPriceDiv = document.createElement("div");
            dieselPriceDiv.innerHTML = feature.d.substring(0, 4) + "<sup>" + feature.d.substring(4, 5) + "</sup>€";;
            dieselDiv.appendChild(dieselLabelDiv);
            dieselDiv.appendChild(dieselPriceDiv);
            $(dieselDiv).addClass("fuel-price-diesel");
        }

        let superDiv = document.createElement("div");
        if (feature.e5) {
            let superLabelDiv = document.createElement("div");
            $(superLabelDiv).addClass("fuel-price-label");
            superLabelDiv.innerText = "Super E5";
            let superPriceDiv = document.createElement("div");
            superPriceDiv.innerHTML = feature.e5.substring(0, 4) + "<sup>" + feature.e5.substring(4, 5) + "</sup>€";;;
            superDiv.appendChild(superLabelDiv);
            superDiv.appendChild(superPriceDiv);
            $(superDiv).addClass("fuel-price-super");
        }

        let e10Div = document.createElement("div");
        if (feature.e10) {
            let e10LabelDiv = document.createElement("div");
            $(e10LabelDiv).addClass("fuel-price-label");
            e10LabelDiv.innerText = "Super E10";
            let e10PriceDiv = document.createElement("div");
            e10PriceDiv.innerHTML = feature.e10.substring(0, 4) + "<sup>" + feature.e10.substring(4, 5) + "</sup>€";;
            e10Div.appendChild(e10LabelDiv);
            e10Div.appendChild(e10PriceDiv);
            $(e10Div).addClass("fuel-price-e10");
        }

        let priceDiv = document.createElement("div");
        priceDiv.appendChild(dieselDiv);
        priceDiv.appendChild(superDiv);
        priceDiv.appendChild(e10Div);
        $(priceDiv).addClass("fuel-prices");

        // for the unmarked display of the selected price
        let onePriceDiv = document.createElement("div");
        $(onePriceDiv).addClass("fuel-price-main");
        const layerValue = param.activeLayerValue;
        let priceValue = "";
        switch (layerValue) {
            case "Diesel":
                priceValue += feature.d ? feature.d : "";
                break;
            case "Super E5":
                priceValue += feature.e5 ? feature.e5 : "";
                break;
            case "Super E10":
                priceValue += feature.e10 ? feature.e10 : "";
                break;
        }
        if (priceValue && priceValue.length > 0) {
            onePriceDiv.innerHTML = priceValue.substring(0, 4) + "<sup>" + priceValue.substring(4, 5) + "</sup>€";
        }
        priceDiv.appendChild(onePriceDiv);

        upperContainer.appendChild(distanceCont);
        upperContainer.appendChild(priceDiv);
        $(upperContainer).addClass("top-container");

        let middleDiv = document.createElement("div");
        let leftMiddleDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        nameDiv.className = "fuel-brand-name";
        nameDiv.innerHTML = "<b>" + feature.name + "</b>";
        // adresse + geo coords
        let addressDiv = document.createElement("div");
        let addressString = feature.street;
        addressString += "\n" + feature.city;
        addressDiv.innerText = addressString;
        $(addressDiv).addClass("station-address");
        leftMiddleDiv.appendChild(nameDiv);
        leftMiddleDiv.appendChild(addressDiv);
        let rightMiddleDiv = document.createElement("div");
        let openingTimesDiv = document.createElement("div");
        openingTimesDiv.innerText = createOpeningTimes(feature.ot);
        $(openingTimesDiv).addClass("opening-times");
        rightMiddleDiv.appendChild(openingTimesDiv);
        let sourceDiv = document.createElement("div");
        sourceDiv.innerText = feature.source;
        $(sourceDiv).addClass("fuel-source");
        middleDiv.appendChild(leftMiddleDiv);
        middleDiv.appendChild(rightMiddleDiv);
        $(middleDiv).addClass("middle-container");

        container.appendChild(upperContainer);
        container.appendChild(middleDiv);
        container.appendChild(sourceDiv);
        $(container).addClass("feature-entry");
        param.entry = container.outerHTML;

    });
});

var weekdayMap = {
    1: "Mo",
    2: "Di",
    3: "Mi",
    4: "Do",
    5: "Fr",
    6: "Sa",
    7: "So",
    "ph": "Feiertags"
};

function createOpeningTimes(openingTimes) {
    let returnString = "Öffnungszeiten\n";
    for (let i = 0; i < openingTimes.length; i++) {
        const currentOt = openingTimes[i];
        // the opening times should contain 3 elements (weekday start, weekday end and the times)
        if (currentOt.length === 3) {
            const weekdayStart = currentOt[0];
            const weekdayEnd = currentOt[1];
            let times = currentOt[2];

            returnString += weekdayMap[weekdayStart];
            if (weekdayEnd) {
                returnString += " - " + weekdayMap[weekdayEnd];
            }
            returnString += ": \t";
            if (times.length > 0 && times[0].length === 2) {
                returnString += times[0][0] + " - " + times[0][1] + "\n";
            } else {
                returnString += "Geschlossen";
            }
        }
    }
    return returnString;
}