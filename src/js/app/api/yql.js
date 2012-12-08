/* ========================================
 * CORS Planner - YQL Query Ajax
 * 
 * Yahoo Query Language
 * http://developer.yahoo.com/yql/
 *
 * Author: Wang Zhuochun
 * Last Edit: 18/Jul/2012 02:41 PM
 * ========================================
 * <License>
 * ======================================== */

define(function(require, exports) {

    "use strict";
    /*jshint browser:true, jquery:true, laxcomma:true, maxerr:50*/

    // include components
    var helper = require("util/helper")
    // module default options
    , defaults = $.extend({}, { modCode : "ACC1002" }, helper.getSemester());

    // return a valid CORS url
    function getCORSurl(mod) {
        return "https://aces01.nus.edu.sg/cors/jsp/report/ModuleDetailedInfo.jsp?" +
            "acad_y=" + mod.acadYear + "&sem_c=" + mod.semester +
            "&mod_c=" + mod.modCode.toUpperCase();
    }

    // return a valid yql url with query
    function getYQLurl(query) {
        return "http://query.yahooapis.com/v1/public/yql?q=" +
            encodeURIComponent(query) + "&format=json&callback=";
    }

    // wrap the user's callback
    function getCallback(query, callback) {
        return function(result) {
            // add the query url to the JSON result
            result.url = query;
            // then call user's callback
            callback(result);
        };
    }

    // a generalized request
    exports.request = function(query, callback) {
        $.getJSON(getYQLurl(query), getCallback(query, callback));
    };

    // a module request for yql, return a Module object
    exports.requestModule = function(mod, callback) {
        if (typeof mod === "string") {
            mod = { modCode : mod };
        }

        var cors = getCORSurl($.extend({}, defaults, mod))
          , query = "select * from html where url='" + cors + "' and xpath='//table'";

        $.getJSON(getYQLurl(query), getCallback(cors, callback));
    };

});
