// A Schedule management class.

// Author: Matthew Might
// Site:   http://matt.might.net/
// Modified by Khoa Tran to add Reading and other additional features

function Schedule(initYear, initMonth, initDate, topics, readings, fixed) {

    this.initYear = initYear ;
    this.initMonth = initMonth - 1 ; // [1..12] -> [0..11]
    this.initDate = initDate ;
    
    this.topics = topics || [] ;
    this.readings = readings || [] ;
    this.fixed = fixed || {} ;

    this.createInitDate = function () {
        var d = new Date() ;
        d.setFullYear(this.initYear, this.initMonth, this.initDate) ;

        // toQuasiLexicalDateString: String of the form "YYYY-[M]M-[D]D"
        d.toQuasiLexicalDateString = function () {
            return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + (this.getDate())
        } ;

        // nextDay: Increment this date to the next event day.
        d.nextDay = function (days) {
            this.setDate(this.getDate() + 1) ;
            var max = 7 ;
            while ((!days[this.getDay()]) && (max > 0)) {
                this.setDate(this.getDate() + 1) ;
                --max ;
            }
        } ;    
        return d ;
    } ;
    
    var eventDays = {} ;
    
    this.setEventDay = function (dayOfWeek) {
        if (dayOfWeek == "Sun") dayOfWeek = 0 ;
        else if (dayOfWeek == "Mon") dayOfWeek = 1 ;
        else if (dayOfWeek == "Tue") dayOfWeek = 2 ;
        else if (dayOfWeek == "Wed") dayOfWeek = 3 ;
        else if (dayOfWeek == "Thu") dayOfWeek = 4 ;
        else if (dayOfWeek == "Fri") dayOfWeek = 5 ;
        else if (dayOfWeek == "Sat") dayOfWeek = 6 ;

        else if (dayOfWeek == "S") dayOfWeek = 0 ;
        else if (dayOfWeek == "M") dayOfWeek = 1 ;
        else if (dayOfWeek == "T") dayOfWeek = 2 ;
        else if (dayOfWeek == "W") dayOfWeek = 3 ;
        else if (dayOfWeek == "H") dayOfWeek = 4 ;
        else if (dayOfWeek == "F") dayOfWeek = 5 ;
        else if (dayOfWeek == "S") dayOfWeek = 6 ;

        eventDays[dayOfWeek] = true ;
    } ;


    this.getEvents = function () {

        var topics = this.topics.slice() ; // clone
        var readings = this.readings.slice() ; // clone
        var fixed = this.fixed ;
        var events = [] ;

        for (var d = this.createInitDate(); topics.length > 0 && readings.length > 0; d.nextDay(eventDays)) {
            var topic;
            var reading;
            
            if (fixed[d.toQuasiLexicalDateString()]) {
                topic = fixed[d.toQuasiLexicalDateString()];
                reading = "Science fiction, mysteries, romance novels, etc.";
            } else {
                topic = topics.shift();
                reading = readings.shift();
            }

            events.push({ "date": d.toDateString(),
                          "topic": topic,
                          "reading": reading }) ;
        }
        return events ;
    } ;

    return this ; 
}
