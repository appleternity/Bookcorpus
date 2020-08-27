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

$(window).ready(function() {
    /****************************************
       Button
    */
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



    /****************************************
       Draw wordcloud
    */
    var color = d3.scale.category20();
    console.log(color);
    console.log(color(1));
    console.log(color(2));

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    var tfidf_list = [];
    for (var i = 0; i < 10; i++) {
        tfidf_list.push(frame_list[i].tfidf);
    }

    var min_tfidf = Math.min(...tfidf_list);
    var max_tfidf = Math.max(...tfidf_list);
    console.log(min_tfidf, max_tfidf);

    var min_val = 30;
    var max_val = 200;

    function interpolation(tfidf) {
        return 1.0*(max_tfidf-tfidf)/(max_tfidf-min_tfidf)*(max_val-min_val)+min_val;
    }

    var start = 30;
    var offset = 25;
    function interpolation(i) {
        return start + i * offset;
    }

    var words = [];
    for (var i = 0; i < 10; i++) {
        var lexical_unit_list = frame_list[i].lexical_unit.split(" / ");
        // var c = interpolation(frame_list[i].tfidf);
        var c = interpolation(i);
        console.log("c", frame_list[i].tfidf, c);
        for (var j = 0; j < lexical_unit_list.length; j++) {
            words.push({
                text: lexical_unit_list[j].split(".")[0],
                size: frame_list[i].tfidf*5,
                color: rgbToHex(c, c, c),
                pos: lexical_unit_list[j].split(".")[1],
            });
        }
    }
    console.log(words);

    var nouns = [];
    var verbs = [];
    var adjs = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].pos == "v") {
            verbs.push(words[i]);
        } else if (words[i].pos == "n") {
            nouns.push(words[i]);
        } else if (words[i].pos == "a") {
            adjs.push(words[i]);
        } else {
            console.log(words[i].pos)
        }
    }

    console.log("Nouns = ", nouns.length);
    console.log("Verbs = ", verbs.length);
    console.log("Adjs = ", adjs.length)

    var cloud_nouns = d3.layout.cloud()
        .random(new Math.seedrandom('noun'))
        .size([500, 500])
        .words(nouns)
        // .words(frame_list.map(function(d) {
        //   return {text: d.frame, size: d.tfidf*10};
        // }))
        .padding(5)
        .rotate(0)
        // .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#noun"))
        .on("end", draw);
    cloud_nouns.start();

    var cloud_verbs = d3.layout.cloud()
        .random(new Math.seedrandom('verb'))
        .size([500, 500])
        .words(verbs)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#verb"))
        .on("end", draw);
    cloud_verbs.start();

    var cloud_adjs = d3.layout.cloud()
        .random(new Math.seedrandom('adj'))
        .size([500, 500])
        .words(adjs)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#adj"))
        .on("end", draw);
    cloud_adjs.start();

    /**********************************************/
    function draw(words) {
        console.log(this.container());
        if (this.container() == null) {
            this.container(d3.select("body"));
            console.log("parent is null", this.container());
        }
        this.container().append("svg")
              .attr("width", this.size()[0])
              .attr("height", this.size()[1])
            .append("g")
              .attr("transform", "translate(" + this.size()[0] / 2 + "," + this.size()[1] / 2 + ")")
            .selectAll("text")
              .data(words)
            .enter().append("text")
              .style("font-size", function(d) { return d.size + "px"; })
              .style("font-family", this.font())
              .style("font-weight", 900)
              // .style('fill', function(d,i){return color(i);})
              .style('fill', function(d,i){return d.color;})
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text(function(d) { return d.text; });
    }
});