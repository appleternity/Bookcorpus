class TimeLock {
    constructor(time, submit_btn) {
        this.locked = true;
        this.time = time;
        this.submit_btn = $(submit_btn);
        this.id = setInterval(this.time_counter.bind(this), 1000);
        this.submit_btn.text("Submit ("+this.time+")");
    }

    get is_locked() {
        return this.locked;
    }

    time_counter() {
        // console.log(this.time);
        this.time -= 1;
        if (this.time == 0) {
            this.locked = false;
            clearInterval(this.id);
            this.submit_btn.text("Submit");
            this.submit_btn.attr("disabled", false);
            return;
        }
        this.submit_btn.text("Submit ("+this.time+")");
    }
}

$(document).ready(function() {

    console.log("Hello");
    var time_lock = new TimeLock(30, "#submit_button");

    $(document).on("click", ".options", function(evt) {
        console.log("click");
        
        // get correct story block
        var target = $(evt.target);
        if (!target.hasClass("options")) {
            target = $(evt.target).parents(".options");    
        }
    
        // get value
        var value = target.attr("value");
        console.log(value);

        // style
        $(".options .box").removeClass("selected_box");
        target.find(".box").addClass("selected_box");

        $("#story_answer").val(value);
    });

    $(document).on("click", "#submit_button", function(evt) {
        $("#warning").text("");

        // time lock
        if(time_lock.is_locked) {
            $("#warning").text("Please read all the content carefully.");
            return;
        }

        // check answer 
        var ans = $("#story_answer").val();
        if (ans == "-1") {
            $("#warning").text("Please select the closest story.");
            return;
        }
        console.log("ans", ans);

        // submit
        $("#mturk_form").submit();
    });


});