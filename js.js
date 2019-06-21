            var glagol, objekat, likovi;
            glagol = ["sadim", "pečem", "berem", "čistim", "plevim", "kuvam", "farbam", "gledam", "kupim", "natočim", "sipam", "iseckam", "čitam", "pevam", "kujem", "štemujem", "avanzujem", "liferujem", "slušam", "štimungujem", "naštimam", "cepam", "jedem", "usisam", "premazem", "namazem", "peglam", "krečim", "bacim", "oplevim", "bušim", "operem", "ribam", "skinem", "zapakujem", "zakačim", "pomazim", "naštelujem", "šarmiram", "ziherujem", "kibicujem", "isfeniram", "gepekujem", "dizajniram", "švercujem", "prodam", "gletujem"];
            objekat = ["repu", "travu", "cigle", "sudove", "ogradu", "kelerabu", "televizor", "auto", "cveće", "kera", "drva", "ajvar", "kuplung", "čakšire", "duvan", "emigrante", "farmu", "kantar", "vaser vagu", "krompir", "kravu", "pidzamu", "lampu", "knjigu", "ulje", "krov", "mistriju", "noge", "dupe", "kokoške", "petla", "stepenice"];
            likovi = ["mamom i tatom", "mamom", "tatom", "babom", "Dart Vejderom", "Aleksandrom Vučićem", "bratom", "Djokom", "Ozrenom", "kolegom", "Bokijem", "Binom", "Korovom", "Divnom Ljubojević", "Evom Ras", "komšijom", "komšinicom"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * glagol.length);
              var rand2 = Math.floor(Math.random() * objekat.length);
              var rand3 = Math.floor(Math.random() * likovi.length);
              //                var randCol = [rand1,rand2,rand3];
              //                var i = randGen();
              var content = "Ne mogu moram da " + glagol[rand1] + " " + objekat[rand2] + " sa " + likovi[rand3] + ".";

              document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();
