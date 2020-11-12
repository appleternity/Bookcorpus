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

var testing_words;
var cloud_nouns, cloud_verbs, cloud_adjs;
var cloud_nouns_2, cloud_verbs_2, cloud_adjs_2;

$(window).ready(function() {
    /****************************************
       Button
    */
    console.log("Hello");
    var time_lock = new TimeLock(30, "#submit_button");

    $(document).on("click", ".options input[type='radio']", function(evt) {
        
        // get correct story block
        var target = $(evt.target);
    
        // get value
        var value = target.val();
        
        $(".word_cloud_box").removeClass("selected_story_block");
        $("#word_cloud_panel_"+value).addClass("selected_story_block");
        console.log("#word_cloud_panel_"+value);

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

    var organize_words = function(frame_list) {
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
        testing_words = words;

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
        return [nouns, verbs, adjs];
    }

    var nouns, verbs, adjs, nouns_2, verbs_2, adjs_2;
    temp = organize_words(frame_list_1);
    nouns = temp[0];
    verbs = temp[1];
    adjs = temp[2];

    temp = organize_words(frame_list_2);
    nouns_2 = temp[0];
    verbs_2 = temp[1];
    adjs_2 = temp[2];

    console.log("Fisrt! Nouns = ", nouns.length, "Verbs = ", verbs.length, "Adjs = ", adjs.length);
    console.log("Second! Nouns = ", nouns_2.length, "Verbs = ", verbs_2.length, "Adjs = ", adjs_2.length);

    var width = $("#noun").width()-5;
    var word_cloud_size = [500, 500];

    // First word cloud representation
    cloud_nouns = d3.layout.cloud()
        .random(new Math.seedrandom('noun'))
        .size(word_cloud_size)
        .words(nouns)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#noun"))
        .on("end", draw)
        .note("noun");
    cloud_nouns.start();

    cloud_verbs = d3.layout.cloud()
        .random(new Math.seedrandom('verb'))
        .size(word_cloud_size)
        .words(verbs)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#verb"))
        .on("end", draw)
        .note("verb");
    cloud_verbs.start();

    cloud_adjs = d3.layout.cloud()
        .random(new Math.seedrandom('adj'))
        .size(word_cloud_size)
        .words(adjs)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#adj"))
        .on("end", draw)
        .note("adj");
    cloud_adjs.start();

    // Second word cloud representation
    cloud_nouns_2 = d3.layout.cloud()
        .random(new Math.seedrandom('noun_2'))
        .size(word_cloud_size)
        .words(nouns_2)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#noun_2"))
        .on("end", draw)
        .note("noun_2");
    cloud_nouns_2.start();

    cloud_verbs_2 = d3.layout.cloud()
        .random(new Math.seedrandom('verb_2'))
        .size(word_cloud_size)
        .words(verbs_2)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#verb_2"))
        .on("end", draw)
        .note("verb_2");
    cloud_verbs_2.start();

    cloud_adjs_2 = d3.layout.cloud()
        .random(new Math.seedrandom('adj_2'))
        .size(word_cloud_size)
        .words(adjs_2)
        .padding(5)
        .rotate(0)
        .font("sans-serif")
        .fontSize(function(d) { return d.size; })
        .container(d3.select("#adj_2"))
        .on("end", draw)
        .note("adj_2");
    cloud_adjs_2.start();
    
    /**********************************************/
    function draw(words) {
        console.log(this.container());
        if (this.container() == null) {
            this.container(d3.select("body"));
            console.log("parent is null", this.container());
        }
        test = this.container().append("svg")
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
        
        // generate png figure
        console.log("note in draw function", this.note()());
        var note = this.note()();
        var svgString = new XMLSerializer().serializeToString(document.querySelector('#'+note+' svg'));
        var canvas = document.querySelector("#"+note+" canvas");
        var ctx = canvas.getContext("2d");
        var DOMURL = self.URL || self.webkitURL || self;
        var img = new Image();
        var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svg);
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            var png = canvas.toDataURL("image/png");
            document.querySelector('#'+note+'-png-container').innerHTML = '<img class="img-fluid wordcloud_img" src="'+png+'"/>';
            DOMURL.revokeObjectURL(png);
        };
        img.src = url;
    }
});
var test;
